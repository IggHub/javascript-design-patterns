/* 
Two states:
- Intrinsic state
- Extrinsic state

Intrinsic data:
Objects sharing the same - replaced with single shared object (factory method)
Can keep track of the constructor
Copies will share the same properties as constructor

Extrinsic states:
Use manager object.
Manager object contains central database of extrinsic states and flyweight objects

Classical Flyweights
 Flyweight
  Concrete Flyweight
  Flyweight factory
*/

// managing a book in library.
// Argument includes important meta-data (1st 7) and keep track of checked-out books (last 4)


var Book = function( id, title, author, genre, pageCount,publisherID, ISBN, checkoutDate, checkoutMember, dueReturnDate,availability ){
 
   this.id = id;
   this.title = title;
   this.author = author;
   this.genre = genre;
   this.pageCount = pageCount;
   this.publisherID = publisherID;
   this.ISBN = ISBN;
   this.checkoutDate = checkoutDate;
   this.checkoutMember = checkoutMember;
   this.dueReturnDate = dueReturnDate;
   this.availability = availability;
 
};
 
Book.prototype = {
 
  getTitle: function () {
     return this.title;
  },
 
  getAuthor: function () {
     return this.author;
  },
 
  getISBN: function (){
     return this.ISBN;
  },
 
  // For brevity, other getters are not shown
  updateCheckoutStatus: function( bookID, newStatus, checkoutDate, checkoutMember, newReturnDate ){
 
     this.id = bookID;
     this.availability = newStatus;
     this.checkoutDate = checkoutDate;
     this.checkoutMember = checkoutMember;
     this.dueReturnDate = newReturnDate;
 
  },
 
  extendCheckoutPeriod: function( bookID, newReturnDate ){
 
      this.id = bookID;
      this.dueReturnDate = newReturnDate;
 
  },
 
  isPastDue: function(bookID){
 
     var currentDate = new Date();
     return currentDate.getTime() > Date.parse( this.dueReturnDate );
 
   }
};

var book1 = new Book(1, "First Book", "Some Author", "Some Genre", 100, "abc", "111-1111", "12/31/2018", "Some Member", "12/31/2019", "available")

// console.log(book1.getTitle());
// console.log(book1.getAuthor());
// console.log(book1.getISBN());
// console.log(book1.updateCheckoutStatus(1, "checked out", "1/1/2019", "Good kid 1"));
// console.log(book1.isPastDue(1));

/*
Optimizing: separating data into intrinsic and extrinsic states

Intrinsic:
- data relevant to book object 
  - title 
  - author

Extrinsic:
- Checkout data (not related to book object)
  - checkoutMember
  - dueReturnDate

Recall 1st seven (meta-data each book):

1 ID
2 Title
3 Author
4 Genre
5 Page count
6 Publisher ID
7 ISBN

Recall attributes to keep track:
1 checkoutDate
2 checkoutMember
3 dueReturnDate
4 availability

Optimized flyweight pattern will remove the extrinsic attributes of Book object into:

var Book = function ( title, author, genre, pageCount, publisherID, ISBN ) {
 
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pageCount = pageCount;
    this.publisherID = publisherID;
    this.ISBN = ISBN;
 
};

For checkouts/ extrinsic properties, a factory will be used to manage that object
*/


var Book = function ( title, author, genre, pageCount, publisherID, ISBN ) {
 
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pageCount = pageCount;
    this.publisherID = publisherID;
    this.ISBN = ISBN;
 
};

// Book Factory will be a Singleton
/* 
recall: Singleton instantiates object no more than once
This is so we don't unnecessarily create multiple book instances
*/

// var BookFactory = (function(){
//   var existingBooks = {}, existingBook; 
//   // https://stackoverflow.com/questions/12769922/x-y-z-comma-assignment-in-javascript
//   // it instantiates existingBooks = {}
//   // it instantiates existingBook variable (to be used later)
//   
//   return {
//     createBook: function(title, author, genre, pageCount, publisherID, ISBN){
//       // when running createBook,
//       // it checks whether, from existingBooks with ISBN, it exists
//       existingBook = existingBooks[ISBN];
//       // if existingBook is found (not undefined), it is not instantiated
//       if(!!existingBook){
//         return existingBook;
//       } else {
//         var book = new Book(title, author, genre, pageCount, publisherID, ISBN); // uses the optimized book object using only intrinsic attributes
//         existingBooks[ISBN] = book; // upon creation, adds existingBooks object ({})
//         // this existingBooks object is being updated and added whenever createBook is called
//         return book;
//       }
//     },
//     displayBooks: function(){
//       console.log(existingBooks);
//       return existingBooks;
//     }
//   }
// })();

var BookFactory = (function () {
  var existingBooks = {}, existingBook;
 
  return {
    createBook: function ( title, author, genre, pageCount, publisherID, ISBN ) {
 
      // Find out if a particular book meta-data combination has been created before
      // !! or (bang bang) forces a boolean to be returned
      existingBook = existingBooks[ISBN];
      if ( !!existingBook ) {
        return existingBook;
      } else {
 
        // if not, let's create a new instance of the book and store it
        var book = new Book( title, author, genre, pageCount, publisherID, ISBN );
        existingBooks[ISBN] = book;
        return book;
 
      }  
    },
    displayBooks: function(){
      console.log(existingBooks)
    }
  };
 
})();
BookFactory.createBook("some title", "some author", 100, "111-1111", "12345", "firstISBN");
BookFactory.displayBooks();
BookFactory.createBook("some other title", "some other author", 300, "333-3333", "11111", "secondISBN")
BookFactory.displayBooks();
