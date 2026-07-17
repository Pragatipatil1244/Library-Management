const express = require("express");
const router = express.Router();

const {
  addBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
  issueBook,
  returnBook,
} = require("../controllers/bookController");

const protect = require("../middleware/authMiddleware");

// Add a new book
router.post("/", protect, addBook);

// Get all books
router.get("/", getBooks);

// Get a single book by ID
router.get("/:id", getBookById);

// Update a book
router.put("/:id", protect, updateBook);

// Delete a book
router.delete("/:id", protect, deleteBook);


module.exports = router;