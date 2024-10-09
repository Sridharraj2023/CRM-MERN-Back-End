## CRM Application (MERN Stack)

### Overview
This CRM application helps manage customer profiles with features such as login/registration, CRUD operations for customer data, role-based access, and analytics. The stack is built using the MERN (MongoDB, Express.js, React.js, Node.js) framework.

---

### Frontend (React.js + Bootstrap)

#### Technologies
- **React.js**: Component-based UI framework.
- **Bootstrap**: For responsive design.
- **React Router**: For client-side routing.
- **Axios**: For making HTTP requests to the backend.

#### Folder Structure
- **`client/src/`**: Contains all React components and configuration files.
- **`components/`**: Reusable components like forms, buttons, customer cards, etc.
- **`pages/`**: Pages like login, dashboard, customer profile management, etc.

#### Steps to Run Frontend

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Sridharraj2023/CRM-MERN-Front-End.git
   cd CRM-MERN-Front-End
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run Frontend**:
   - Make sure the backend server is running on port `3000`.
   - Start the React frontend using:
     ```bash
     npm start
     ```
   - The frontend will now be running on `http://localhost:3000`.

4. **Environment Variables (Optional)**:
   You can create a `.env` file for any environment-specific variables. By default, it will interact with the backend on `http://localhost:3000`.

#### Features:
- **User Registration & Login**: Allow users to sign up and log in securely.
- **Dashboard**: Displays customer profiles and allows for managing customer details.
- **CRUD Operations**: Users can create, view, edit, and delete customer data.
- **Role-based Access Control**: Limits certain features based on the user's role.
- **Bootstrap Integration**: Ensures the app is fully responsive for all devices.
  
---

### Backend (Node.js + Express.js + MongoDB)

#### Technologies
- **Node.js**: JavaScript runtime for the backend server.
- **Express.js**: Framework to handle HTTP requests and routing.
- **MongoDB**: NoSQL database for storing customer data.
- **JWT (JSON Web Tokens)**: For secure authentication and session management.
- **bcrypt**: For hashing passwords.

#### Folder Structure
- **`server/`**: Contains all backend files, including routes, models, and controllers.
- **`routes/`**: API endpoints for user authentication and customer management.
- **`models/`**: Mongoose models for users and customers.
- **`controllers/`**: Contains logic for handling user and customer requests.

#### Steps to Run Backend

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Sridharraj2023/CRM-MERN-Back-End.git
   cd CRM-MERN-Back-End
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Create `.env` File**:
   - In the `server/` directory, create a `.env` file and add the following:
     ```
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret_key
     PORT=port_number
     ```
   - **MONGO_URI**: Replace with your MongoDB connection string.
   - **JWT_SECRET**: Replace with a secure random string.

4. **Run Backend**:
   Start the backend server using:
   ```bash
   npm run dev
   ```
   The backend will now be running on `http://localhost:3000`.

#### Features:
- **User Authentication**: Secure login and registration with JWT for session management.
- **Password Hashing**: Passwords are securely stored using `bcrypt`.
- **Customer Management**: Provides full CRUD functionality for customer profiles.
- **Error Handling**: Proper error handling for all API requests.
- **API Endpoints**:
  - `/api/auth/register`: For user registration.
  - `/api/auth/login`: For user login.
  - `/api/customers`: For customer profile management (CRUD operations).

---

### Full Application Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Sridharraj2023/CRM-MERN-Front-End.git
   git clone https://github.com/Sridharraj2023/CRM-MERN-Back-End.git
   cd CRM_MERN
   ```

2. **Backend Setup**:
   - Navigate to `server` and follow the backend instructions to install dependencies, set up the `.env` file, and run the backend.

3. **Frontend Setup**:
   - Navigate to `client` and install the dependencies. Start the frontend as explained in the frontend setup section.

4. **Start Both Servers**:
   - Backend: Run `npm run dev` in `server`.
   - Frontend: Run `npm start` in `client`.

5. **Access the Application**:
   - Open the frontend in your browser: `http://localhost:3000`.
   - The backend API will be available at `http://localhost:3000`.

---

### Contributing
To contribute to this project:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit (`git commit -m 'Add some feature'`).
4. Push the branch (`git push origin feature/YourFeature`).
5. Create a pull request.

### License
This project is licensed under the MIT License.

---
