const mongoose = require('mongoose');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);
const connectDB = async () => {
  try {
    await mongoose.connect(DB);
    console.log('DB connection successful!');
  } catch (err) {
    console.log('Error connecting to database:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
