const mongoose = require('mongoose');
const commentSchema = new mongoose.Schema({
    comment: String,
   
});

module.exports = mongoose.model("comments", commentSchema);