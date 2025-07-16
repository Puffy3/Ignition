
import './App.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/test', {
          responseType: 'text' 
        });
        setMessage(response.data);
      } catch (error) {
        setMessage('Error fetching data');
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Message from server:</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;



