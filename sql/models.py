from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from .database import Base


class Author(Base):
    __tablename__ = "Author"

    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String)

    books = relationship("Book", back_populates="author")


class Book(Base):
    __tablename__ = "Book"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    author_id = Column(Integer, ForeignKey("Author.id"))

    author = relationship("Author", back_populates="books")
    quotes = relationship("Quote", back_populates="book")


class Quote(Base):
    __tablename__ = "Quote"

    id = Column(Integer, primary_key=True, index=True)
    content = Column(String)
    book_id = Column(Integer, ForeignKey("Book.id"))

    book = relationship("Book", back_populates="quotes")