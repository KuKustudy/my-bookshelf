import "./tailwindoutput.css";
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CreateBookForm from "./components/CreateBookForm";


// this file contains frontend code that define how the interface should look
// to start the frontend: npm start

function App() {
  // a pair of variable and function, the function updates the variable when needed
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // get all books from backend by send a get request
    axios.get('http://localhost:8000/books')
      .then(response => {
        setBooks(response.data); 
      })
      .catch(error => {
        console.error('Error fetching books:', error);
      });

  }, []);


  // belows are tailwind css + html code
  return (
    <div >
      <h1 class="text-5xl font-bold text-center text-blue-500 mt-12 mb-12">Reading room</h1> 

      <CreateBookForm />
   
      <h2 class="text-2xl mb-6 px-12">Books you've added</h2>

      <ul class="grid grid-cols-3 gap-6 px-12 mb-36">
        {books
        .slice()
        .sort((a,b) => {
          // Sort before display so that books with finished_reading = true comes first
          if (a.finished_reading === b.finished_reading) return 0;
          return a.finished_reading ? -1 : 1;
        })
        .map(book => (
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
