from pydantic import BaseModel

# code credit to: https://dev.to/aquibpy/building-a-crud-api-with-fastapi-and-mongodb-32n
class Book(BaseModel):
    title: str
    author: str
    description: str
    published_year: int
    finished_reading: bool
    
    class Config:
        schema_extra = {
            "example": {
                "title": "book x",
                "author": "author x",
                "description": "A non-trivial story",
                "published_year": 1987,
                "finished_reading": True
            }
        }