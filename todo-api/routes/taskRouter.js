const express = require("express");
const router = express.Router();
const Task = require("../models/task");


//create a new task

router.post("/tasks" ,async(req,res) => {
    try{
        const newTask = new Task(req.body);  // Create a new Task instance using the data from the request body
        const savedTask = await newTask.save(); // Save the new task to the database and await the result
        res.status(201).json(savedTask);  // Respond with a 201 status code (Created) and the saved task in JSON format
    }catch (err){
        res.status(400) // If an error occurs, respond with a 400 status code (Bad Request)
        .json({
            message: err.message  // and send the error message as a JSON response
        });
    }
});


//get all tasks

router.get("/tasks", async(req,res) => {
    try {
        const tasks = await Task.find(); // Fetch all tasks from the database
        res.status(200).json(tasks); // Respond with the list of tasks
    } catch (err) {
        res.status(400)
        .json({
            message: err.message
        })// Respond with error message
    }
});


//get single tasks by ID

router.get("/tasks/:id", async(req, res) => {
    console.log("fetching task with ID: ${req.params.id}");
    try {
        const task = await Task.findById(req.params.id);// Find task by ID
        if (!task){
            return res.status(404)
        .json({
            message: "Task not found"
        });// Handle task not found 
        }
        res.status(200).json(task);// Respond with the task
    } catch (err) {
        console.log(err);
        res.status(500)
        .json
        ({ message : err.message})// Respond with error message
    }
});


//Update a task by ID
router.put("/tasks/:id" ,async(req , res) =>{
    try{
        // Update the task by ID and return the updated task
        const updateTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true});
            if (!updateTask){
                return res.status(404)
                .json({
                    message: "Task not found"
                });  // Handle task not found
            }
            res.status(200).json(updateTask) // Respond with the updated task
    }catch (err){
        res.status(400)
        .json({
            message: err.message
        });// Respond with error message
    }
});


//Delete a task
router.delete("/tasks/:id", async(req , res) => {
    try{
        const deleteTask = await Task.findByIdAndDelete(req.params.id); // Delete task by ID
        if (! deleteTask){
            return res.status(404)
            .json({
                message: "Task not found"
            });  // Handle task not found
        }
            res.status(200)
            .json({
                message: "Task Deleted Sucessfully"
            }); // Respond with success message
    }catch (err){
        res.status(400)
        .json({
            message: err.message
        });  // Respond with error message
    }
});

module.exports = router;