var express = require('express');

var bookRouter = express.Router();

var books = [
  {
    title: 'book 1',
    genre: 'genre 1',
    author: 'author 1',
    read: false
  },
  {
    title: 'book 2',
    genre: 'genre 2',
    author: 'author 2',
    read: false
  },
  {
    title: 'book 3',
    genre: 'genre 3',
    author: 'author 3',
    read: false
  }
];

var router = function(nav) {
  bookRouter.route('/')
    .get(function(req, res) {
      res.render('bookListView',{
        title: 'Books',
        nav: nav,
        books: books
      });
    });

  bookRouter.route('/:id')
    .get(function(req, res) {
      var id = req.params.id;
      res.render('bookView', {
        title: 'Books',
        nav: nav,
        book: books[id]
      });
    });

  return bookRouter;
};

module.exports = router;
