# Car Management System

## Description

This is the back end for a web app that allows users to manage car records with features like creating, updating, deleting, and viewing cars. Users can add detailed information for each car, such as make, model, year, owner, and registration. It is a full-stack project showcasing React on the front end and a secure Node.js and MongoDB backend. The app is designed to be user-friendly and scalable, making it a strong example of a modern web application.

## Purpose

The app demonstrates how to:

- Design a full-stack application with the Model-View-Controller (MVC) pattern.
- Build a responsive and dynamic React front end with hooks for state and user interactions.
- Implement secure and efficient CRUD operations using RESTful APIs with Express.js and MongoDB.

## Key Features

- **CRUD Operations:** Users can create, view, update, and delete car records through the app's interactive interface.
- **Batch Updates:** The app supports updating multiple car records simultaneously, such as changing the owner field for several cars.
- **Interactive UI:** Real-time updates using React hooks ensure a seamless user experience.
- **Filtering:** Users can filter car records based on specific criteria, such as cars older than a certain year.
- **Responsive Design:** The app works well across desktop and mobile devices.

---

## How to Install:

### Requirements

- [Node.js](https://nodejs.org/)
- MongoDB
- npm (comes with Node.js)

### Steps

1. Set up the backend:
   - Go to the backend folder:
     ```bash
     cd backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file with the following variables:
     ```env
     PORT=8080
     MONGO_URI=mongodb://localhost:27017/car-management
     ```
   - Start the backend server:
     ```bash
     npm start
     ```
2. Set up the frontend:
   - Go to the frontend folder:
     ```bash
     cd frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the frontend app:
     ```bash
     npm start
     ```
3. Open `http://localhost:3000/` in your browser.

---

## Technologies Used

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
- **Frontend:**
  - React.js
  - Axios for API calls
- **Styling:**
  - Custom CSS

---

## Why This Project Stands Out

- **Portfolio:** The app showcases my ability to build full-stack applications, including robust backend logic and dynamic frontends.
- **Modular Design:** The RESTful APIs and MongoDB schemas are designed to be reusable and scalable for future applications.
- **Clean and Interactive:** The app uses React best practices, making the user interface clean and highly interactive.
- **Other Projects:** Check out my other projects, including a media search app using the iTunes API, a to-do list app with advanced JWT authorization, and an eCommerce platform built with React.
