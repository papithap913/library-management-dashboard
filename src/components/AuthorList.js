import React, { useState } from 'react';
import AuthorForm from './AuthorForm';

const AuthorList = () => {
  const [authors, setAuthors] = useState([]);

  const handleAddAuthor = (author) => {
    setAuthors([...authors, author]);
  };

  const handleEditAuthor = (index, updatedAuthor) => {
    const updatedAuthors = authors.map((author, i) =>
      i === index ? updatedAuthor : author
    );
    setAuthors(updatedAuthors);
  };

  const handleDeleteAuthor = (index) => {
    const updatedAuthors = authors.filter((_, i) => i !== index);
    setAuthors(updatedAuthors);
  };

  return (
    <div>
      <AuthorForm onSubmit={handleAddAuthor} />
      <ul>
        {authors.map((author, index) => (
          <li key={index}>
            {author.name} (Born: {author.birthDate})
            <button onClick={() => handleEditAuthor(index, author)}>Edit</button>
            <button onClick={() => handleDeleteAuthor(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorList;

