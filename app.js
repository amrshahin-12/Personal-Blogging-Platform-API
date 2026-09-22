const express = require('express');
const articleRouter = require('./routes/articleRoutes');

const app = express();
const { errorMiddleware } = require('./controllers/errorController');

app.use(express.json({ limit: '10kb' }));

app.use('/api/v1/articles', articleRouter);

app.use(errorMiddleware);

module.exports = app;
