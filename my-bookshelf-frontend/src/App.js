import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

// start the frontend: npm start

function App() {
  const [message, setMessage] = useState('');
  const [books, setBooks] = useState([]);

  useEffect(() => {

    // get message fron backend
    axios.get('http://localhost:8000/')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('Error fetching message:', error);
      });

    // get books from backend
    axios.get('http://localhost:8000/books')
      .then(response => {
        setBooks(response.data); // store the list of books in response
      })
      .catch(error => {
        console.error('Error fetching books:', error);
      });

  }, []);



  return (
    <div>
      <h1>Reading room</h1>
      <p>Message from backend: {message}</p>

      <h2>Books</h2>
      <ul>
        {books.map(book => (
          <li key={book._id}>
            {book.title} <br />
            Author: {book.author} <br />
            {book.description} <br />
            Published: {book.published_year} <br />
            Finished Reading: {book.finished_reading ? 'Yes' : 'No'} <br /> <br />
          </li>
        ))}

      </ul>
    </div>
  );
}

export default App;
