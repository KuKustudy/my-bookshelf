from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
from models import Book
from bson.objectid import ObjectId
from dotenv import load_dotenv
import os

# this file contains functions that can be call by client (the frontend) to 
# manage data in database


# To run backend:
# STEP1: activate virtual environment: python -m venv venv 
# STEP2: source venv/bin/activate
# STEP3: go to: cd .../my-bookshelf/my-bookshelf-backend/app
# STEP4: load the app: uvicorn main:app --reload

load_dotenv() # load from .env file
app = FastAPI()

# connect to MongoDB database
client = MongoClient(os.getenv("DATABASE_URL"))
db = client["bookstorage"]
collection = db["books"]

# Configure CORS, allow only our React frontend to make request, prohibit other malicious request
app.add_middleware(
    CORSMiddleware,
    allow_origins=[os.getenv("CLIENT_URL")],  # React's default port/URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# code credit to: https://dev.to/aquibpy/building-a-crud-api-with-fastapi-and-mongodb-32n
# create a book
@app.post("/books", response_model=Book)
async def create_book(book: Book):
    book_dict = book.model_dump()
    collection.insert_one(book_dict)
    return book

# get all books
@app.get("/books")
async def get_books():
    books = []
    for book in collection.find():
        books.append(Book(**book))
    return books

# get a book by id
@app.get("/books/{book_id}", response_model = Book)
async def get_book_by_id(book_id: str):
    book = collection.find_one({"_id": ObjectId(book_id)})
    if book:
        return Book(**book)
    else:
        raise HTTPException(status_code=404, detail="Book not found")

# update a book by its ID
@app.put("/books/{book_id}", response_model=Book)
async def update_book(book_id: str, book:Book):
    collection.update_one({"_id": ObjectId(book_id)}, {"$set": book.model_dump()})
    return book

# Delete a book by its ID
@app.delete("/books/{book_id}")
async def delete_book(book_id: str):
    collection.delete_one({"_id": ObjectId(book_id)})
    return {"message": "Book deleted successfully"}