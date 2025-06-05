# 📚 PLP Bookstore – MongoDB Project

This project demonstrates how to work with MongoDB through a practical bookstore database. It covers database setup, basic CRUD operations, advanced queries, aggregation pipelines, and indexing using a `books` collection.

---

## 🚀 How to Run the Script

1. **Ensure MongoDB is running** locally or you have an Atlas cluster set up.
2. Install [Node.js](https://nodejs.org/) if not already installed.
3. Clone or download this project.
4. Navigate to the project directory in your terminal.
5. Run the following command to insert sample data into the database:

```bash
node insert_books.js

✅ Task 1: MongoDB Setup
Install MongoDB locally or set up a free MongoDB Atlas cluster.

Create a database called: plp_bookstore

Inside it, create a collection called: books

🧾 Task 2: Basic CRUD Operations
📥 Insert Books
Use the insert_books.js script to insert at least 10 books. Each book includes:

title (string)

author (string)

genre (string)

published_year (number)

price (number)

in_stock (boolean)

pages (number)

publisher (string)

🔍 Queries
Find all books in a specific genre:


db.books.find({ genre: "Fiction" })
Find books published after a certain year:


db.books.find({ published_year: { $gt: 2000 } })

Find books by a specific author:
db.books.find({ author: "George Orwell" })

Update the price of a specific book:
db.books.updateOne({ title: "1984" }, { $set: { price: 13.99 } })

Delete a book by its title:
db.books.deleteOne({ title: "Moby Dick" })

 Task 3: Advanced Queries

Books in stock and published after 2010:
db.books.find({ in_stock: true, published_year: { $gt: 2010 } })

Projection (return only title, author, and price):
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 })

Sorting by price:
Ascending:
db.books.find().sort({ price: 1 })

Descending:
db.books.find().sort({ price: -1 })

Pagination (5 books per page):
db.books.find().sort({ price: 1 }).skip(5).limit(5)

Task 4: Aggregation Pipeline

Average price by genre:
db.books.aggregate([
  { $group: { _id: "$genre", averagePrice: { $avg: "$price" } } },
  { $sort: { averagePrice: -1 } }
])

Author with the most books:
db.books.aggregate([
  { $group: { _id: "$author", bookCount: { $sum: 1 } } },
  { $sort: { bookCount: -1 } },
  { $limit: 1 }
])

Books grouped by publication decade:
db.books.aggregate([
  {
    $project: {
      decade: {
        $concat: [
          { $toString: { $multiply: [ { $floor: { $divide: ["$published_year", 10] } }, 10 ] } },
          "s"
        ]
      }
    }
  },
  { $group: { _id: "$decade", count: { $sum: 1 } } },
  { $sort: { _id: 1 } }
])

 Task 5: Indexing

Index on title for faster searches:
db.books.createIndex({ title: 1 })

Compound index on author and published_year:
db.books.createIndex({ author: 1, published_year: 1 })

Use explain() to analyze performance:
db.books.find({ title: "The Hobbit" }).explain("executionStats")
Compare totalDocsExamined before and after indexing to see the improvement.


c:\Users\Dell\Pictures\Screenshots\Screenshot (42).png
*Figure: Screenshot of the books collection in MongoDB Compass*
