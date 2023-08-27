import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setUsers(res.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const postUser = () => {
    Axios.post('https://jsonplaceholder.typicode.com/users', { name: name })
      .then(res => {
        console.log(res);
        // After posting, you can update the users state with the new user if required
        setUsers([...users, res.data]);
      })
      .catch(error => {
        console.error('Error posting user:', error);
      });
  };

  return (
    <div>
      {users.map(u => (
        <div key={u.id}>
          {u.name}
        </div>
      ))}
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={postUser}>Post</button>
    </div>
  );
}

export default App;
