const BooksController = require('../controllers/BooksController');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Hello Nerds!");
});

router.get('/books', BooksController.index);
router.get('/books/:id', BooksController.show);
router.get('/books/search/:title', BooksController.search);
router.post('/books', BooksController.store);
router.put('/books/:id', BooksController.update);
router.delete('/books/:id', BooksController.destroy);

module.exports = router;