const Post = require('../models/Post');

async function handle_request(req, callback){

console.log("handling new get")
console.log(req.id)
  try {
    const post =await Post.findById(req.id);  
    callback(null, post) 
  } catch (err) {
    callback(null, null);
  }

    console.log("after callback");
};

exports.handle_request = handle_request;  