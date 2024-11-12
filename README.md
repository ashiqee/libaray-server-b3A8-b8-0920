# Library Management System API

## Project Name & Description

### **Library Management System API**
This project is a backend API for a **Library Management System** designed to manage library books, memberships, and borrowing activities. The API enables library staff and members to perform CRUD operations on books, manage member information, and track borrowing and returning of books. It also handles overdue books and generates reports of overdue borrow records.

### **Objective**
The goal is to provide a simple and efficient API for a library to handle the management of books and members, as well as to facilitate the borrowing and returning of books. This system is structured around **CRUD** (Create, Read, Update, Delete) operations for books, members, and borrow records. Additionally, it provides endpoints to track overdue books and handle errors appropriately.

---

## Live URL
[Live Link (Backend)](https://libaray-server-b3-a8-b8-0920.vercel.app)

---

## Technology Stack & Packages

- **Node.js**: JavaScript runtime environment for building the API.
- **Express.js**: Web framework for Node.js used to build the API endpoints.
- **TypeScript**: Superset of JavaScript providing type safety and better tooling.
- **Prisma ORM**: Database toolkit used to interact with the PostgreSQL database, enabling easy querying and migrations.
- **PostgreSQL**: Relational database for storing library data.
- **UUID**: Universal Unique Identifier (UUID) used as a primary key for all tables to ensure unique identification of records.

---

## Setup Instructions

To run this project locally, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/ashiqee/libaray-server-b3A8-b8-0920
cd libaray-server-b3A8-b8-0920
```


### 2. Install Dependencies

Ensure you have Node.js installed. Then run the following command to install the necessary packages:
```bash
npm install
```


### 3. Install Dependencies
Ensure you have PostgreSQL installed and a database is created. You will need to configure the DATABASE_URL in the .env file
```bash
DATABASE_URL="postgresql://user:password@localhost:5432/library_db"
```

After configuring the database URL, run the Prisma migration commands to set up the database schema:

```bash
npx prisma migrate deploy
```

### 4. Running the API Server
Once the dependencies are installed and the database is set up, start the server with the following command:
```bash
npm run dev
```

The server will be running on http://localhost:3000.

# Key Features & Functionality

## Book Management
- Create Book: Allows adding new books to the library.
- Read Books: Retrieve all books or a specific book by its bookId.
- Update Book: Edit the details of an existing book.
- Delete Book: Delete a book record from the system.

## Member Management
- Create Member: Add a new member to the library system.
- Read Members: Fetch all members or a specific member by memberId.
- Update Member: Modify a member’s information.
- Delete Member: Remove a member from the system.

## Borrowing & Returning Books
- Borrow a Book: Members can borrow a book by providing the bookId and memberId.
- Return a Book: Books can be returned, updating the returnDate in the borrow record.
## Overdue Books Tracking
- Overdue Borrow List: Provides a list of books that are overdue (borrowed for more than 14 days).
## Error Handling
- The API responds with standard error messages when operations fail, making it easier to debug.


## Known Issues/Bugs
- Overdue Borrow Tracking: Overdue books are tracked based on a 14-day return policy, but the calculation may not be perfect for edge cases (e.g., time zone differences).
- Book Availability: Currently, there is no real-time lock on books being borrowed or returned. Multiple users may attempt to borrow the same book at once.


# API Endpoints
## Book CRUD Operations
- POST  `/api/books`: Create a new book.
- GET   `/api/books`: Get all books.
- GET   `/api/books/:bookId`: Get a specific book by bookId.
- PUT   `/api/books/:bookId`: Update an existing book.
- DELETE `/api/books/:bookId`: Delete a book.
## Member CRUD Operations
- POST `/api/members`: Create a new member.
- GET `/api/members`: Get all members.
- GET `/api/members/:memberId`: Get a specific member.
- PUT `/api/members/:memberId`: Update a member's details.
- DELETE `/api/members/:memberId`: Delete a member.
## Borrow & Return Operations
- POST `/api/borrow`: Borrow a book.
- POST `/api/return`: Return a borrowed book.
## Bonus Features
- GET `/api/borrow/overdue`: Fetch a list of overdue borrowed books.


## L2Batch-3-assignment-8
#### Submission : (Please check my submissions:)



- Backend Live Link: [Backend Link](https://libaray-server-b3-a8-b8-0920.vercel.app)
- GitHub Repository URL (Backend): https://github.com/ashiqee/libaray-server-b3A8-b8-0920