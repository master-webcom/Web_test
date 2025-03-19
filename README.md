Features
Employee Management:

Add, update, delete, and list employees.

Department Management:

Add, update, delete, and list departments.

Project Management:

Add, update, delete, and list projects.

Employee-Project Relationships:

Assign employees to projects and view details.

Frontend Options:

Use Angular or React for the frontend.

Technologies Used
Backend:
ASP.NET Core (MSSQL)

Spring Boot (MySQL)

Frontend:
Angular (Angular Material for UI)

React (Bootstrap for UI)

Database:
MSSQL for ASP.NET Core

MySQL for Spring Boot

Tools:
Entity Framework Core (ASP.NET Core)

Spring Data JPA (Spring Boot)

Axios (React)

Docker (Optional for deployment)

Setup Instructions
Backend Setup
ASP.NET Core (MSSQL):

Navigate to the backend/aspnet-core folder.

Update the appsettings.json file with your MSSQL connection string.

Run the following commands:

bash
Copy
dotnet restore
dotnet ef database update
dotnet run
The API will run on http://localhost:5000.

Spring Boot (MySQL):

Navigate to the backend/spring-boot folder.

Update the application.properties file with your MySQL connection details.

Run the following command:

bash
Copy
mvn spring-boot:run
The API will run on http://localhost:8080.

Frontend Setup
Angular Frontend:

Navigate to the frontend/angular folder.

Install dependencies:

bash
Copy
npm install
Start the Angular app:

bash
Copy
ng serve
The app will run on http://localhost:4200.

React Frontend:

Navigate to the frontend/react folder.

Install dependencies:

bash
Copy
npm install
Start the React app:

bash
Copy
npm start
The app will run on http://localhost:3000.

Running the Application
Start the backend services:

ASP.NET Core: http://localhost:5000

Spring Boot: http://localhost:8080

Start the frontend of your choice:

Angular: http://localhost:4200

React: http://localhost:3000

Use the frontend to interact with the backend APIs.

API Endpoints
ASP.NET Core (Employee API):
GET /api/employee - List all employees.

POST /api/employee - Add a new employee.

PUT /api/employee/{id} - Update an employee.

DELETE /api/employee/{id} - Delete an employee.

Spring Boot (Department API):
GET /api/department - List all departments.

POST /api/department - Add a new department.

PUT /api/department/{id} - Update a department.

DELETE /api/department/{id} - Delete a department.
