import "./tailwindoutput.css";
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
    <div >
      <h1 class="text-5xl font-bold text-center text-blue-500 mt-12 mb-12">Reading room</h1> 
      <h2 class="text-2xl mb-6 px-12">Books you've added</h2>

      <ul class="grid grid-cols-3 gap-6 px-12">
        {books.map(book => (
          <li key={book._id} class="p-4 rounded-xl border border-gray-300 shadow-md">
            <h2 class="text-xl font-semibold text-center text-blue-700">{book.title} </h2> <br />
            Author: {book.author} <br />
            Description: {book.description} <br />
            Published: {book.published_year} <br />
            Finished Reading: {book.finished_reading ? 'Yes' : 'No'} <br /> <br />
          </li>
        ))}

      </ul>
    </div>
  );
}

export default App;
