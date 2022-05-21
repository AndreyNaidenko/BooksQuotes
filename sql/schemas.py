from pydantic import BaseModel


class QuoteBase(BaseModel):
    content: str


class QuoteCreate(QuoteBase):
    pass


class Quote(QuoteBase):
    id: int
    book_id: int

    class Config:
        orm_mode = True


class BookBase(BaseModel):
    title: str


class BookCreate(BookBase):
    pass


class Book(BookBase):
    id: int
    author_id: int
    quotes: list[Quote] = []

    class Config:
        orm_mode = True


class AuthorBase(BaseModel):
    full_name: str


class AuthorCreate(AuthorBase):
    pass


class Author(AuthorBase):
    id: int
    books: list[Book] = []

    class Config:
        orm_mode = True
