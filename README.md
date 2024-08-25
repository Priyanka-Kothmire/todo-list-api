## Setup and Installation

1. **Clone the repository**:
   git clone https://github.com/Priyanka-Kothmire/todo-app-api.git

2. **Navigate to the project directory**:
    cd todo-app-api

3. **Install dependencies**:
    npm install

   This command will install all necessary packages, including:
   1.express: Web framework for Node.js
   2.mongoose: ODM (Object Data Modeling) library for MongoDB
   3.body-parser: Middleware to parse incoming request bodies
   4.nodemon (dev dependency): Automatically restarts the server on file changes

  ### Database ###
   Database : test, 
   collection :task. 
   check the database and collection MongoDB Compass or terminal.



5. **Start the server**:
     nodemon server.js
     The server will start on `http://localhost:3000`.

   ## API Endpoints

### 1. **Create a new task**

- **Endpoint**: `POST /tasks`
- **Description**: Create a new task.
- **Request Body**:
    {
        "title": "Buy groceries",
        "description": "Milk, Bread, Eggs",
        "status": "pending"
    }
  
- **Response**:
    - **201 Created**: Task successfully created.
    - **400 Bad Request**: Invalid input data.
 
  ### 2. **Retrieve all tasks**

- **Endpoint**: `GET /tasks`
- **Description**: Retrieve a list of all tasks.
- **Response**:
    - **200 OK**:
 
    - [
    {
        "_id": "66c63b756e662db802f7bff1",
        "title": "finish the project",
        "status": "in-progress",
        "created_at": "2024-08-21T19:09:41.486Z",
        "updated_at": "2024-08-21T19:09:41.493Z",
        "__v": 0
    },
    {
        "_id": "66c7063c808028203fe11cf0",
        "title": "upload the document",
        "description": "complete documentation by friday",
        "status": "pending",
        "created_at": "2024-08-22T09:34:52.307Z",
        "updated_at": "2024-08-22T09:34:52.314Z",
        "__v": 0
    },
    {
        "_id": "66c85b457cac7b835d71fff3",
        "title": "complete the exam",
        "description": "complete test by friday",
        "status": "pending",
        "created_at": "2024-08-23T09:49:57.343Z",
        "updated_at": "2024-08-23T09:49:57.349Z",
        "__v": 0
    },
    {
        "_id": "66c85c51b0e13f9e5c591e31",
        "title": "Test Completed",
        "description": "complete exam by today ",
        "status": "in-progress",
        "created_at": "2024-08-23T09:54:25.190Z",
        "updated_at": "2024-08-23T09:54:25.195Z",
        "__v": 0
    },
    {
        "_id": "66c986c2832bb58bcf99d8b7",
        "title": "project incomplete",
        "description": "complete the project by monday ",
        "status": "in-progress",
        "created_at": "2024-08-24T07:07:46.260Z",
        "updated_at": "2024-08-24T07:07:46.268Z",
        "__v": 0
    },
    {
        "_id": "66c9b16e6758123bddaa29e5",
        "title": "Buy groceries",
        "description": "Milk, Bread, Eggs",
        "status": "completed",
        "created_at": "2024-08-24T10:09:50.427Z",
        "updated_at": "2024-08-24T10:09:50.445Z",
        "__v": 0
    }

]

### 3. **Retrieve a single task by ID**

- **Endpoint**: `GET /tasks/:id`
- **Description**: Retrieve a specific task by its ID.
- **Response**:
    - **200 OK**:
      {
        "_id": "66c9b16e6758123bddaa29e5",
        "title": "Buy groceries",
        "description": "Milk, Bread, Eggs",
        "status": "completed",
        "created_at": "2024-08-24T10:09:50.427Z",
        "updated_at": "2024-08-24T10:09:50.445Z",
        "__v": 0
      }

  **404 Not Found**: Task not found.

  ### 4. **Update a task by ID**

- **Endpoint**: `PUT /tasks/:id`
- **Description**: Update a specific task by its ID.
- **Request Body**: (Partial or full update)
    {
        "status": "completed"
    }
  
- **Response**:
    - **200 OK**: Task successfully updated.
      
    - **404 Not Found**:
    -  { "message": "Task not found" }

    - **400 Bad Request**: Invalid input data.

 ### 5. **Delete a task by ID**

- **Endpoint**: `DELETE /tasks/:id`
- **Description**: Delete a specific task by its ID.
- **Response**:
    - **200 OK**:
    - { "message": "Task deleted successfully" }
    - 
    - **404 Not Found**: Task not found.
    - { "message": "Task not found" }

 
## License

This project is licensed under the MIT License.

