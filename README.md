# Medical Software Full-Stack Project

## Overview

This project is a full-stack web application built using Django REST Framework for the backend and React.js for the frontend. It serves as a medical software with functionalities tailored for both users and administrators. The backend implements JWT (JSON Web Tokens) for user authentication, while the frontend utilizes React components and toasts for a smooth user experience.

## Features

### User Authentication

- Implemented JWT for secure user authentication.
- Supports both user and admin roles.

### Modules

1. **Users**

   - User management functionalities.
   - Authentication and authorization mechanisms.

2. **Patients**

   - CRUD operations for managing patient records.

3. **Services**

   - Management of medical services offered.

4. **Slips**

   - Point of sale functionalities for users.

5. **Cash Tallies**

   - Tracking and management of financial transactions.

6. **Other Management and Edit Functionalities**
   - Additional functionalities tailored for administrative purposes.

### Technology Stack

- **Backend:**
  - Django REST Framework
  - JWT for authentication
- **Frontend:**
  - React.js
  - React Toastify for notifications

### Project Structure

medical-software/
│
├── backend/
│ ├── users/
│ ├── patients/
│ ├── services/
│ ├── slips/
│ ├── cash_tallies/
│ ├── ...
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├
│ │ ├── ...
│ │
│ ├
│ ├
│
├── README.md
└── ...

## Getting Started

1. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   cd medico
   ```

2. **Backend Setup:**

   ```bash
   cd backend
   # Install dependencies
   pip install -r requirements.txt
   # Run migrations
   python manage.py makeMigrations
   python manage.py migrate
   # Run the server
   python manage.py runserver
   ```

3. **Frontend Setup:**

   ```bash
   cd frontend
   # Install dependencies
   npm install
   # Run the frontend server
   npm start
   ```

4. **Accessing the Application:**
   - Open your browser and navigate to `http://localhost:5173` to access the application.

## Contributors

- [Ahmed Hassan](https://github.com/curiousahmed0)

## License

This project is licensed under the [MIT License](LICENSE).
