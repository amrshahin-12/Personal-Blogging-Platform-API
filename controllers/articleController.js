const { Article } = require('../models/articleModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.createArticle = catchAsync(async (req, res, next) => {
  const article = await Article.create(req.body);
  res.status(201).json({
    status: 'success',
    data: { data: article },
  });
});

exports.getAllArticles = catchAsync(async (req, res, next) => {
  const articles = await Article.find();
  res.status(200).json({
    status: 'success',
    resutls: articles.length,
    data: {
      data: articles,
    },
  });
});
exports.getArticle = catchAsync(async (req, res, next) => {
  const article = await Article.findById(req.params.id);
  if (!article)
    return next(new AppError('no article found with that id!', 404));
  res.status(200).json({
    status: 'success',
    data: { data: article },
  });
});
exports.deleteArticle = catchAsync(async (req, res, next) => {
  const article = await Article.findByIdAndDelete(req.params.id);
  if (!article)
    return next(new AppError('No document found with that ID', 404));
  res.status(204).send();
});
exports.updateArticle = catchAsync(async (req, res, next) => {
  const updatedArticle = await Article.findByIdAndUpdate(
    req.params.id,
    req.body,
    { returnDocument: 'after' },
  );
  if (!updatedArticle)
    return next(new AppError('No document found with that ID', 404));
  res.status(200).json({
    status: 'success',
    data: { data: updatedArticle },
  });
});
