from sqlalchemy.orm import Session

from . import models, schemas


def create_author(db: Session, author: schemas.AuthorCreate):
    author = models.Author(full_name=author.full_name)
    db.add(author)
    db.commit()
    db.refresh(author)
    return author


def get_author_by_full_name(db: Session, full_name: str):
    author = (
        db.query(models.Author).filter(models.Author.full_name == full_name).first()
    )
    return author


def create_book(db: Session, book: schemas.BookCreate, author_id: int):
    book = models.Book(title=book.title, author_id=author_id)
    db.add(book)
    db.commit()
    db.refresh(book)
    return book
