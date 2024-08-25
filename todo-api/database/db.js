const mongoose = require("mongoose");

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    // Connect to MongoDB with the specified URI
    await mongoose.connect("mongodb://localhost:27017/test");
    console.log("MongoDB Connected"); // Log success message
  } catch (err) {
    console.log("Connection failed", err); // Log error message 
    process.exit(1); // Exit the process with a failure code
};
};

module.exports = connectDB;