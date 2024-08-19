import React, { useState } from 'react';
import BookForm from './BookForm';

const BookList = () => {
  const [books, setBooks] = useState([]);

  const handleAddBook = (book) => {
    setBooks([...books, book]);
  };

  const handleEditBook = (index, updatedBook) => {
    const updatedBooks = books.map((book, i) =>
      i === index ? updatedBook : book
    );
    setBooks(updatedBooks);
  };

  const handleDeleteBook = (index) => {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
  };

  return (
    <div>
      <BookForm onSubmit={handleAddBook} />
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            {book.title} by {book.author} (ISBN: {book.isbn})
            <button onClick={() => handleEditBook(index, book)}>Edit</button>
            <button onClick={() => handleDeleteBook(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;

