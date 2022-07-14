import axios from 'axios';
import { useState, useEffect, useCallback } from 'react';
import Users from './Components/Users';
import Header from './Components/Header';
// import { getUsers, getTodos } from './actions/API';

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [todos, setTodos] = useState([]);
  const [userSearchByEmail, setUserSearchByEmail] = useState('');
  const [userSearchByName, setUserSearchByName] = useState('');

  const requestData = useCallback(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        console.log('res', response);
        const newUsers = response.data;
        setUsers(newUsers);
        setFilteredUsers(newUsers);
      });

    axios
    .get('https://jsonplaceholder.typicode.com/todos')
    .then((response) => {
      const newTodos = response.data;
      setTodos(newTodos);
    });
  }, []);

  useEffect(() => {
    requestData();
  }, [requestData]);

  // useEffect(() => {
  //   let newFilteredUsers = filteredUsers.filter(() => 
  //     users.includes(userSearchByName);
  //   )

  // }, [userSearchByName]);

  return (
    <div className="App">
      <Header
        userSearchByEmail={userSearchByEmail}
        setUserSearchByEmail={setUserSearchByEmail}
        userSearchByName={userSearchByName}
        setUserSearchByName={setUserSearchByName}
      />
      {users.length > 0 && (
        <Users users={filteredUsers} />
      )}
    </div>
  );
}

export default App;
