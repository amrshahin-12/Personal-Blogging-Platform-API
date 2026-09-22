const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'An article must have a title!'],
    unique: true,
  },
  content: {
    type: String,
    required: [true, 'An article must have content!'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: String,
    required: [true, 'An article must have an author!'],
  },
  tags: { type: [String] },
});

exports.Article = mongoose.model('Article', articleSchema);
