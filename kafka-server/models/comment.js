const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    comment: {
      type: String,
      required: true,
      max: 100,
    },
    postId: {
      type: String,
      required: true,
      max: 100,
    },
    userId: {
      type: String,
      required: true,
      max: 100,
    },
  },
  { timestamps: true }
);

module.exports  = mongoose.model("comment",commentSchema);

