var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

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

var router = function (nav) {
  adminRouter.route('/addBooks')
    .get(function(req, res) {
      var url = 'mongodb://localhost:27017/libraryApp';
      mongodb.connect(url, function (err, db) {
        var collection = db.collection('books');
        collection.insertMany(books, function(err, results){
          res.send(results);
          db.close();
        });
      });
      // res.send('inserting books');
    });

  return adminRouter;
};

module.exports = router;
