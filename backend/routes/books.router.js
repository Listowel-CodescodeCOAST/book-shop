const { Router } = require("express");
const {booksHandlers} = require("../middlewares/books.middleware");
const{ 
    createBook, 
    getAllBooks, 
    updateBook,
} = require("../controller/books.controller");

const router = Router();

// adding middlewares to filter books by category or by author
router.get("/", [booksHandlers.byAuthor, booksHandlers.byCategory], getAllBooks);

router.post("/",createBook);

// update book details by isbn [international standard book number]
router.put("/", updateBook);

module.exports = router;
