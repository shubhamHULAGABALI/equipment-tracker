# Equipment Tracker Application

## Overview

This project was built as part of an intern take-home assignment.  
It is a simple full-stack web application that allows users to manage a list of equipment.

The main focus of this project is functionality, clean code, and understanding of frontend, backend, and database concepts, rather than complex UI or advanced features.

---

## What This Application Does

- Displays a list of equipment in a table
- Allows users to add new equipment
- Allows users to edit existing equipment
- Allows users to delete equipment
- Includes basic form validation
- Saves data so it is not lost on refresh
- Includes a simple search feature 

---

## Tech Stack Used

### Frontend
- React (Create React App)
- Axios
- Basic HTML and CSS

### Backend
- Node.js
- Express.js
- REST API

### Database
- SQLite (used for simplicity and quick setup)





---

## API Endpoints

| Method | Endpoint             | Description       |
|--------|----------------------|-------------------|
| GET    | `/api/equipment`     | Get all equipment |
| POST   | `/api/equipment`     | Add new equipment |
| PUT    | `/api/equipment/:id` | Update equipment  |
| DELETE | `/api/equipment/:id` | Delete equipment  |

---

## How to Run the Project Locally

### Prerequisites
- Node.js (LTS version)

---

### Backend Setup
- cd backend
- npm install
- node server.js

The backend will run at:
http://localhost:5000

---
### Frontend Setup

- cd frontend
- npm install
- npm start

The frontend will run at:
http://localhost:3000

---
### Assumptions

- Authentication is not required
- Single-user usage is assumed
- SQLite is used to keep setup simple
- Basic UI is sufficient as per assignment instructions
---
### What I Would Improve With More Time

- Add pagination and sorting
- Improve UI and make it mobile responsive
- Add better error handling
- Add authentication and authorization
---
### Conclusion

This project meets all the requirements mentioned in the take-home assignment.
It includes full CRUD functionality, a clean API structure, and a simple, working frontend.

The solution was kept intentionally simple and readable to match the scope and time limit of the assignment.
