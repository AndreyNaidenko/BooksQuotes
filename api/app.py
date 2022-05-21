from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class NewBook(BaseModel):
    author: str
    bookName: str

@app.post("/")
async def add_book(new_book: NewBook):
    print(new_book)
    return '200'