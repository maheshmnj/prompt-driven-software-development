# User Service

User Service is a RESTful API built using Node.js, Express, and PostgreSQL. It provides functionality for user authentication, account management, and basic CRUD operations on a user table in a PostgreSQL database.

## Features

1. **User Authentication**: Utilizes JSON Web Tokens (JWT) for user authentication and authorization.
2. **Database Integration**: Connects to a PostgreSQL database to store and retrieve user information.
3. **Express Framework**: Built on the Express framework for handling HTTP requests and routing.
4. **RESTful API**: Follows RESTful principles for designing APIs.

### Running the Project

Before running the project, make sure to install the required dependencies:

```bash
npm install
```

### Start the Local Server

```bash
npm run start
```

### Start the Database Server

Assuming the database is set up with the required schema and configuration:

```bash
pg_ctl -D /opt/homebrew/var/postgresql@14 start
```
```bash
psql postgres # Launch the PostgreSQL shell
/conninfo # View connection details
```

### API Endpoints

- GET /users: Retrieve a list of all users.
- GET /users/:id: Retrieve details of a specific user (protected route, requires authentication).
- POST /users: Create a new user.
- PUT /users/:id: Update details of a specific user (protected route, requires authentication).
- DELETE /users/:id: Delete a specific user.

### Technology Stack

Node.js
Express
PostgreSQL
JSON Web Tokens (JWT)


### Folder Structure

```sql
/user-service
|-- src
|   |-- controllers
|   |-- db
|   |-- middleware
|   |-- routes
|   |-- services
|   |-- app.ts
|-- dist
|-- node_modules
|-- package.json
|-- tsconfig.json
|-- README.md
```

### Security Considerations
User authentication is implemented using JWT for secure and stateless communication.
Passwords are hashed before storing them in the database to enhance security.

### Contributing
Feel free to contribute to the project by opening issues or creating pull requests.
Feel free to customize and expand this template based on your project's specific details and requirements.



*Note: This readme was generated using Chat GPT*