# API Documentation

This folder contains the source code for the API of the project. The API is built using the Go programming language and utilizes the Fiber web framework for handling HTTP requests.

## Setup

To set up and run the API, follow the steps below:

1. **Install Dependencies:**

   Make sure you have Go installed, and then install the necessary Go modules:

   ```sh
   go mod tidy
   ```

2. **Environment Variables:**

   Create a `.env` file in the `apps/api` directory with the following content:

   ```plaintext
   DB_USER=<database_username>
   DB_PASS=<database_password>
   DB_HOST=<database_host>
   DB_PORT=<database_port>
   DB_NAME=<database_name>
   ```

3. **Run the API:**

   To run the API server:

   ```sh
   npx nx serve api
   ```

## Available Endpoints

Here is a list of available API endpoints:

- **User Management:**
  - `POST /api/users`: Create a new user
  - `POST /api/login`: User login

You can find more details about each endpoint in the API documentation files within the `handlers` directory.

## Project Structure

- **handlers**: Contains the HTTP handlers for different API endpoints.
- **models**: Contains the data models used by the application.
- **routers**: Defines the routes for the API.
- **main.go**: Entry point for the API server.

## Database Migrations

Database migrations are managed using the `goose` tool. Use the following commands for database migrations:

- To apply migrations:

  ```sh
  make migrate-up
  ```

- To rollback migrations:

  ```sh
  make migrate-down
  ```

## Additional Information

For more information, please refer to the [Nx documentation](https://nx.dev) and the [Fiber documentation](https://docs.gofiber.io).

For any issues or contributions, please refer to the project's repository.
