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

bookRouter.route('/')
  .get(function(req, res) {
    res.render('books',{
      title: 'Books',
      nav: [{
        Link: '/Books',
        Text: 'Books'
      }, {
        Link: '/Authors',
        Text: 'Authors'
      }],
      books: books
    });
  });

bookRouter.route('/single')
  .get(function(req, res) {
    res.send('Hello single book');
  });

module.exports = bookRouter;
