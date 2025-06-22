from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# this is the entry point for the application


# To run backend:
# activate virtual environment: python -m venv venv 
# STEP2:source venv/bin/activate
# go to: cd /Users/wingyeehe/documents/github_clones/my-bookshelf/my-bookshelf-backend
# load the app: uvicorn main:app --reload

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React's default port
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Hello from FastAPI!"}

