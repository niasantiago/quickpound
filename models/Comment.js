const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    default: 0 
  },
  user: {
    type: String,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  post: {
    type: String,
    ref: "Post",
    required: true, 

  },
});

module.exports = mongoose.model("Comment", CommentSchema);
