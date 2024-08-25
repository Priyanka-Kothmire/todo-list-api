## Setup and Installation

1. **Clone the repository**:
   git clone https://github.com/Priyanka-Kothmire/todo-app-api.git

2. **Navigate to the project directory**:
    cd todo-app-api

3. **Install dependencies**:
    npm install

4. **Start the server**:
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
    ```
- **Response**:
    - **201 Created**: Task successfully created.
    - **400 Bad Request**: Invalid input data.

