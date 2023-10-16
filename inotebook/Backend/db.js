const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/iNotebook"; // Replace with your MongoDB URI

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

module.exports = connectToMongo;
