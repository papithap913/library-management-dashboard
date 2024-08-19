import React from 'react';

const authors = [
  { id: 1, name: 'J.K. Rowling' },
  { id: 2, name: 'George R.R. Martin' },
  { id: 3, name: 'J.R.R. Tolkien' },
];

const Authors = () => {
  return (
    <div>
      <h1>Authors</h1>
      <ul>
        {authors.map((author) => (
          <li key={author.id}>{author.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Authors;
