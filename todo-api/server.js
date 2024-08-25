//Import required modules
const express = require("express");
const connectDB = require("./database/db");
const taskRoutes = require("./routes/taskRouter");
const bodyParser = require("body-parser");


//create an Express application
const app = express();

//MiddleWare to parse JSON bodies
app.use(express.json());


//Middleware 
app.use(bodyParser.json());

//connect to MongoDB
connectDB();

//Use taskRouter to handle routes related to tasks
app.use("/api" , taskRoutes);

// Start the server and listen on port 3000
app.listen(3000, () => {
    console.log("Server running on port 3000");
});


module.exports = app;

