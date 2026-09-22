const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

const connectDB = require('./db');

connectDB();

const port = process.env.PORT || 8000;
const server = app.listen(port, '127.0.0.1', () => {
  console.log('listening...');
});
