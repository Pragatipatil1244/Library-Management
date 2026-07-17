
# 📚 Library Management System

A RESTful Library Management System built with **Node.js**, **Express.js**, and **MongoDB**. This project allows users to manage books and user accounts through a secure API.

## 🚀 Features

- 👤 User Registration & Login
- 🔐 JWT Authentication
- 🔒 Password Encryption using Bcrypt
- 📚 Add Books
- 📖 View All Books
- ✏️ Update Book Details
- ❌ Delete Books
- 🗄️ MongoDB Database Integration
- 🌐 REST API Architecture

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JSON Web Token (JWT)
- **Password Security:** BcryptJS
- **Environment Variables:** Dotenv

## 📂 Project Structure

```
Library-Management-System/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── userController.js
│   └── bookController.js
│
├── middleware/
│   └── authMiddleware.js
│
├── models/
│   ├── User.js
│   └── Book.js
│
├── routes/
│   ├── userRoutes.js
│   └── bookRoutes.js
│
├── .env
├── server.js
├── package.json
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/Library-Management-System.git
```

### 2. Navigate to the Project Folder

```bash
cd Library-Management-System
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory and add:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 5. Start the Server

Development Mode

```bash
npm run dev
```

Production Mode

```bash
npm start
```

---

## 📡 API Endpoints

### User Routes

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/users/register` | Register a new user |
| POST | `/api/users/login` | Login user |

### Book Routes

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/books` | Get all books |
| POST | `/api/books` | Add a new book |
| PUT | `/api/books/:id` | Update a book |
| DELETE | `/api/books/:id` | Delete a book |

---

## 📦 Dependencies

- Express.js
- Mongoose
- JWT (jsonwebtoken)
- BcryptJS
- Dotenv
- Nodemon

---

## 🧪 Testing

Use **Postman** or **Thunder Client** to test the API endpoints.

---

## 📸 Screenshots

You can add screenshots of:

- API Responses
- MongoDB Collections
- Postman Testing

---

## 📈 Future Improvements

- Issue & Return Books
- Book Availability Status
- Admin Dashboard
- Fine Calculation
- Search & Filter Books
- Pagination
- Swagger API Documentation

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push to GitHub

```bash
git push origin feature-name
```

5. Open a Pull Request

---

## 👩‍💻 Author

**Prapti Patil**

GitHub: https://github.com/your-github-username

---

## 📄 License

This project is licensed under the MIT License.

---

⭐ If you found this project helpful, please give it a **Star** on GitHub!
