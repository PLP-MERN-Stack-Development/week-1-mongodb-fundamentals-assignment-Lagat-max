// --- Task 1 MongoDB Setup 

use plp_bookstore
db.createCollection("books")

// --- Task 2: Basic CRUD Operations

db.books.insertOne([{title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    published_year: 1960,
    price: 12.99,
    in_stock: true,
    pages: 336,
    publisher: 'J. B. Lippincott & Co.'}])

db.books.insertMany([{title: '1984',
    author: 'George Orwell',
    genre: 'Dystopian',
    published_year: 1949,
    price: 10.99,
    in_stock: true,
    pages: 328,
    publisher: 'Secker & Warburg'
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Fiction',
    published_year: 1925,
    price: 9.99,
    in_stock: true,
    pages: 180,
    publisher: 'Charles Scribner\'s Sons'
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
    genre: 'Dystopian',
    published_year: 1932,
    price: 11.50,
    in_stock: false,
    pages: 311,
    publisher: 'Chatto & Windus'
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    published_year: 1937,
    price: 14.99,
    in_stock: true,
    pages: 310,
    publisher: 'George Allen & Unwin'
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: 'Fiction',
    published_year: 1951,
    price: 8.99,
    in_stock: true,
    pages: 224,
    publisher: 'Little, Brown and Company'
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: 'Romance',
    published_year: 1813,
    price: 7.99,
    in_stock: true,
    pages: 432,
    publisher: 'T. Egerton, Whitehall'
  },
  {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    published_year: 1954,
    price: 19.99,
    in_stock: true,
    pages: 1178,
    publisher: 'Allen & Unwin'
  },
  {
    title: 'Animal Farm',
    author: 'George Orwell',
    genre: 'Political Satire',
    published_year: 1945,
    price: 8.50,
    in_stock: false,
    pages: 112,
    publisher: 'Secker & Warburg'
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    genre: 'Fiction',
    published_year: 1988,
    price: 10.99,
    in_stock: true,
    pages: 197,
    publisher: 'HarperOne'
  },
  {
    title: 'Moby Dick',
    author: 'Herman Melville',
    genre: 'Adventure',
    published_year: 1851,
    price: 12.50,
    in_stock: false,
    pages: 635,
    publisher: 'Harper & Brothers'
  },
  {
    title: 'Wuthering Heights',
    author: 'Emily Brontë',
    genre: 'Gothic Fiction',
    published_year: 1847,
    price: 9.99,
    in_stock: true,
    pages: 342,
    publisher: 'Thomas Cautley Newby'
}])

// --- Find all books in a specific genre
db.books.find({ genre: "Fiction" })

// --- Find books published after a certain year
db.books.find({ published_year: { $gt: 1900 } })

// --- Find books by a specific author
db.books.find({ author: "Paulo Coelho" })

// --- Update the price of a specific book
db.books.updateOne(
  { title: "The Alchemist" },        
  { $set: { price: 12.99 } }           
)

// --- Delete a book by its title
db.books.deleteOne({ title: "Animal Farm" })


// --- Task 3: Advanced Queries

// --- Find books that are both in stock and published after 2010
db.books.find({
  published_year: { $gt: 2010 },
  in_stock: true
})

// --- Use projection to return only the title, author, and price fields in your queries
db.books.find(
  {
    published_year: { $gt: 1925 },
    in_stock: true
  },
  {
    _id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald ",
    price: 9.99
  }
)

// --- Implement sorting to display books by price (both ascending and descending)
// ---ascending
db.books.find().sort({ price: 1 })
// ---descending
db.books.find().sort({ price: -1 })

// --- Using the `limit` and `skip` methods to implement pagination (5 books per page) for the first page
db.books.find()
  .sort({ price: 1 })     
  .skip((1 - 1) * 5)
  .limit(5)

  