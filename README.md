# my-bookshelf

this is an app used to store books I have read and my comments


to activate virtual environment:
1. python -m venv venv 
2. source venv/bin/activate

to run front end - react:
1. go to 'my-bookshelf-frontend' folder
2. npm start


to run back end - fastAPI:
1. go to 'my-bookshelf-backend'/'app' folder
2. uvicorn main:app --reload


Credit to:

ChatGPT and DeepSeek
how to make use of this backend function in my react frontend?
# get all books
@app.get("/books")
async def get_books():
    books = []
    for book in collection.find():
        books.append(Book(**book))
    return books