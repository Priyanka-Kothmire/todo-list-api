const mongoose = require("mongoose");

//Define a schema for the Task Model
const TaskSchema = new mongoose.Schema({
    //Title of the task (required field)
    title: {
        type: String,
        required: true,
    },
    //Descreption of the task (optional)
    description: {
        type: String,
    },
    //Status of the task (can be "pending", "in-progress", or "completed") 
    status: {
        type: String,
        enum :[
            "pending",
            "in-progress",
            "completed"
        ],
        default: "pending"
    },
    //Timestamp when the task was created (defaults to current date)
    created_at: {
        type: Date,
        default: Date.now,
    },
    //Timestamp when the task was last updated (default to current date)
    updated_at: {
        type: Date,
        default: Date.now,
    },
});

// Middleware to update 'updated_at' before saving the task
TaskSchema.pre('save', function(next) {
    this.updated_at = Date.now(); // Set 'updated_at' to current date and time
    next();// Proceed with the save operation
  });
 
// Create the Task model using the schema
module.exports = mongoose.model("task" ,TaskSchema);