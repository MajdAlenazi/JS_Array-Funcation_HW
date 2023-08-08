//Shahad Alshabani

//books
const books = [
    {
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      numberOfPages: 320,
      availableForBorrowing: true
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      numberOfPages: 320,
      availableForBorrowing: true
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      numberOfPages: 224,
      availableForBorrowing: false
    },
    {
      title: "The Da Vinci Code",
      author: "Dan Brown",
      numberOfPages: 594,
      availableForBorrowing: true
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      numberOfPages: 336,
      availableForBorrowing: true
    }
  ];
  
  //print out the title, author, and number of pages for each book.
  console.log("----------Books------------");
  let numOfBook = 1;
  books.forEach(book => {
      console.log("----------Book "+ numOfBook++ +"------------");
      console.log("Title: " + book.title);
      console.log("Author: " + book.author);
      console.log("Number of Pages: " + book.numberOfPages);
    });
  
  //borrowBook
    function borrowBook(title, borrower) {
      //find book with title
      const book = books.find(function(element){
          return element.title === title;
      });
  
      if (book) {// book is founded
        if (book.availableForBorrowing) {//book avalible
          // change the book's availability to not avalible. 
          book.availableForBorrowing = false;
          //add borrower proporty to obj and set it to the borrower's name
          book.borrower = borrower;
          console.log(`Book Title: ${book.title}\nBorrowed by: ${borrower}`);
        } else {//book not avalible
          console.log(`The book with title ${book.title} is currently unavailable for borrowing.`);      
        }
      } else {// book not found
          console.log(`The book with title ${title} was not found in the bookstore.`);
      }
  }
  
  
  function returnBook(title) {
      //find book with title
      const book = books.find(function(element){
          return element.title === title;
      });
    
      if (book) {// book is founded
        if (book.borrower) {// check if the book has borrower
          book.availableForBorrowing = true;  // change the book's availability to avalible. 
          delete book.borrower;// remove borrower.
          console.log(`The book with title ${title} has been returned.`);
        } else {//book has not a borrower
          console.log(`The book with title ${title} was never borrowed.`);
        }
      } else {//book not found
        console.log(`The book with title ${title} was not found in the bookstore.`);
      }
    }
  console.log("----------Test Case 1------------");
  console.log("----------Borrow Books------------");
  borrowBook("To Kill a Mockingbird","Shahad");
  console.log("----------Borrow Books------------");
  borrowBook("To Kill a Mockingbird","Sarah");
  console.log("----------Return Books------------");
  returnBook("To Kill a Mockingbird","Shahad");
  console.log("----------Borrow Books------------");
  borrowBook("To Kill a Mockingbird","Sarah");
  
  console.log("----------Test Case 2------------");
  borrowBook("Hard Life","Sarah");
  
  console.log("----------Test Case 3------------");
  returnBook("The Da Vinci Code","Sarah");
  
  console.log("--------------------------------------");
  
  console.log("-----print out the title, author, number of pages, and borrower (if any) for each book-----");
  for (let i = 0; i < books.length; i++) {
      console.log("----------Book "+ i +"------------");
      console.log(`Title: ${books[i].title}`);
      console.log(`Author: ${books[i].author}`);
      console.log(`Number of Pages: ${books[i].numberOfPages}`);
      
      if (books[i].borrower) {
        console.log(`Borrower: ${books[i].borrower}`);
      } else {
        console.log("Borrower: No one");
      }
      
    }
  //addBook
  function addBook(newB) {
      books.push(newB);
    }
    const newB = {
      title: "Steve Jobs",
      author: "Walter Isaacson",
      numberOfPages: 228,
      availableForBorrowing: true
    };
    addBook(newB);
    console.log("--------------------------------------");
  //searchBook
  function searchBook(searchTerm) {
      const resultsBooks = []; // to save all books in the books array that contain the search term. 
      
      for (let i = 0; i < books.length; i++) {
        // check if search term contains the title, author or borrower name.
        if (books[i].title.includes(searchTerm) ||books[i].author.includes(searchTerm) ||(books[i].borrower && books[i].borrower.includes(searchTerm)))
        {
          resultsBooks.push(books[i]);// add all books contain search term.
        }
      }
      
      return resultsBooks;
    }
    console.log("-------------Search for Title-------------------------");
    console.log(searchBook("Steve"));
    console.log("-------------Search for Auther-------------------------");
    console.log(searchBook("J."));
    console.log("-------------Search for Borrower-------------------------");
    console.log(searchBook("Sarah"));
    