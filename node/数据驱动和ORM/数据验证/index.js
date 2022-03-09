const BookSer = require('./services/bookService');

BookSer.addBook({
    name: '3232',
}).then(resp => {
    console.log(resp)
})