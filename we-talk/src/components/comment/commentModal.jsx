import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { AuthContext } from "../../context/AuthContext";
import "./commentModal.css";


const CommentModal = ({ post, show }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [user, setUser] = useState({});
  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchComments = async () => {
      const res = await axios.get(`/posts/${post._id}/comments`);
      setComments(res.data);
    };
    fetchComments();
  }, [post.postId]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`/posts/${post._id}/${currentUser.username}/comments`, {
        comment: newComment,
      });
      setComments([...comments, res.data]);
      setNewComment("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    
    <>
    {show &&
    <div class="mainbox">
    <div class="comment-list">
      <h2>Comments</h2>
      {comments.map((comment) => (
          <div class="comment" key={comment.userId}>
            <p className="user">{comment.userId}</p>
            <p className="text">{comment.comment}</p>
            <p className="timestamp">{format(comment.createdAt)}</p>
          </div>
        ))}
    </div>
    <form class="comment-form" onSubmit={handleCommentSubmit}>
      <div class="form-group">
        <input
            type="text"
            id="comment-input"
            name="comment"
            placeholder="Add a comment"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
      </div>
      <div class="form-group">
        <button type="submit">Post</button>
      </div>
    </form>
  </div>

  //  <div className="mainbox">
  //       {comments.map((comment) => (
  //         <div class="eachcomment" key={comment.userId}>
  //           <p className="userid">{comment.userId}</p>
  //           <p className="comment">{comment.comment}</p>
  //           <p className="createdAt">{format(comment.createdAt)}</p>
  //         </div>
  //       ))}
  //       <form onSubmit={handleCommentSubmit}>
  //         <input
  //           type="text"
  //           placeholder="Add a comment"
  //           value={newComment}
  //           onChange={(e) => setNewComment(e.target.value)}
  //         />
  //         <button type="submit">Post</button>
  //       </form>
  //     </div>

        }
        </>
  );
};

export default CommentModal;
