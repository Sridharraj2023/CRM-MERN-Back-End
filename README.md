Here's a detailed README for the backend of your CRM MERN project. This README will guide other developers or yourself in the future, providing an understanding of how to set up and run the project.

---

# CRM MERN Backend

This is the backend part of a CRM (Customer Relationship Management) system for the textile industry, built with Node.js, Express.js, and MongoDB. The backend provides APIs to manage customer profiles, track customer communication, manage sources, statuses, follow-ups, and generate reports and analytics.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Server](#running-the-server)
- [API Endpoints](#api-endpoints)
- [Security](#security)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Customer Management**: Create, read, update, and delete customer profiles.
- **Track Communication**: Track follow-ups, meetings, emails, and more with customers.
- **Role-Based Access Control (RBAC)**: Different roles for admin, manager, and sales teams.
- **Reports and Analytics**: Generate reports based on CRM data, such as lead conversion rates and sales performance.
- **Secure Authentication**: Implemented with JWT tokens and password hashing using `bcrypt`.

## Tech Stack
- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web framework for Node.js to handle routing and middleware.
- **MongoDB**: NoSQL database for data storage.
- **Mongoose**: ODM for MongoDB to manage database interactions.
- **JWT (JSON Web Tokens)**: For secure authentication and authorization.
- **bcrypt**: For password hashing and encryption.

## Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [MongoDB](https://www.mongodb.com/) (Local or Cloud-based instance)

## Installation
### 1. Clone the repository
```bash
git clone https://github.com/Sridharraj2023/CRM-MERN-Back-End.git
cd CRM-MERN-Back-End
```

### 2. Install dependencies
Make sure you're in the backend directory and install the required dependencies:
```bash
npm install
```

### 3. Set up MongoDB
If using a local MongoDB server, ensure it's running, or use a cloud-based solution like MongoDB Atlas.

## Environment Variables
You need to create a `.env` file in the root directory with the following environment variables:

```bash
# Server Configurations
PORT=5000

# MongoDB URI
MONGODB_URI=mongodb://localhost:27017/crm_mern

# JWT Secret for Token Generation
JWT_SECRET=your_jwt_secret

# Optional: for email (if using email services like Nodemailer)
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
```

> **Note:** Replace the values of `JWT_SECRET`, `MONGODB_URI`, and email settings with your own.

## Running the Server

### 1. Start the Development Server
You can run the backend server in development mode using:
```bash
npm run dev
```
The server will start at `http://localhost:5000` by default.

### 2. Production Build
To run in production mode:
```bash
npm start
```

## API Endpoints

Here is a summary of some available endpoints:

### Authentication
- `POST /api/auth/register`: Register a new user.
- `POST /api/auth/login`: Login a user and get a JWT token.

### Customers
- `GET /api/customers`: Get all customers.
- `POST /api/customers`: Create a new customer.
- `GET /api/customers/:id`: Get a specific customer by ID.
- `PUT /api/customers/:id`: Update a specific customer by ID.
- `DELETE /api/customers/:id`: Delete a customer.

### Communication and Follow-up
- `POST /api/customers/:id/communication`: Add a communication entry for a customer.
- `GET /api/customers/:id/communication`: Get all communications for a customer.

### Reports and Analytics
- `GET /api/reports/sales`: Get sales performance report.
- `GET /api/reports/conversions`: Get lead conversion rates.

## Security
- **Authentication**: The app uses JWT (JSON Web Token) for authentication.
- **Password Hashing**: Passwords are hashed using `bcrypt` to ensure user security.
- **Authorization**: Role-based access control to restrict specific endpoints to authorized users (e.g., admin-only routes).

## Contributing
Contributions are welcome! If you'd like to contribute, please fork the repository, make your changes, and submit a pull request.

### Steps to Contribute:
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
