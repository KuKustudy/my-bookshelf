from pydantic import BaseModel

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