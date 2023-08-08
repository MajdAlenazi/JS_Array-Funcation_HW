let books = [
    {
        title: "Treasure Island ",
        author: "Ranem",
        number_of_pages: 500,
        borrowing: true
    },
    {
        title: "Dont be sad ",
        author: "ِAid Alqarni",
        number_of_pages: 450,
        borrowing: true
    },
    
    {
        title: "The Thursday Murder Club ",
        author:"Richard Osman",
        number_of_pages: 400,
        borrowing: true
    },

    {
        title:"James and the Giant ",
        author:"Roald Dahl",
        number_of_pages: 350,
        borrowing: true
    },
    {
        title:"GoodnightMoon",
        author:"Margaret Wise Brown",
        number_of_pages: 300,
        borrowing: true
    },
];


books.forEach(function(value){
    console.log(`book title :${value.title}`);
    console.log(value.author);
    console.log(value.number_of_pages);

});




console.log("-------------------");

// // Create a function called "borrowBook"


function borrowBook(book_name, borrower_name) {
  books.forEach((x)=> {
            if(x.title == book_name){
                if(x.borrowing == true){
                x.borrowing = false;
                let name =x.borrower = borrower_name;
            console.log(`The Book title: ${x.title} Borrowed by: ${name}` ); 
        }
        else if(x.title == book_name && x.borrowing == false) {
            console.log(`The book is ${x.title} is not available ` );
        }
      }
  
    })
}


console.log("-------------------");


// Create a function called "returnBook"

function returnBook(book_name){
  books.forEach((x)=> {

    if(x.title == book_name){
        if(x.name == false){
        x.borrowing = true;
        delete x.name;
    console.log(`The Book title: ${x.book_name} ` ); 
}
else if(x.title == book_name && x.borrowing == true) {
    console.log(`The book is ${x.book_name} does not have a borrower ` );
}
}
})
  
}

borrowBook("GoodnightMoon", "moh");
borrowBook("GoodntMoon", "Hala");
returnBook("Dont be sad" ,"reem");

console.log("-------------------");


// Use a for loop to iterate through the books array and print out the title, author, number of pages, and borrower (if any) for each book.

for (let i = 0; i < books.length; i++) {

  console.log(`Title: ${books[i].title}`);
  console.log(`Author: ${books[i].author}`);
  console.log(`Number of Pages: ${books[i].number_of_pages}`);
  
  if (books[i].name) {
    console.log(`Borrower: ${books[i].name}`);
  } else {
    console.log(" Not Borrower");
  }
  
}

console.log("-------------------");

// add book
function addBook(newBook) {
  books.push(newBook);
}
let newBook = {
  title: "Js",
  author: "Maryam",
  number_of_pages: 900,
  borrowing: true
};
addBook(newBook);
console.log(newBook);

console.log("-------------------");

// searchBook
function searchBook(search_term) {
  let a = books.filter (function(x){
    return ( x.author == search_term || x.title == search_term || x.number_of_pages == search_term
    );

  })
  console.log(searchBook);

}
searchBook("Dont be sad");
searchBook("Treasure Island");





