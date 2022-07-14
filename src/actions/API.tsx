import axios from 'axios';

export const getUsers = async () => {
    let users;
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log('Users: ', response.data);
        users = response.data;
        return users;
    } catch (err) {
        console.log(err);
    }
}; 

export const getTodos = async () => {
    let todos;
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        console.log('Todos: ', response.data);
        todos = response.data;
        return todos;
    } catch (err) {
        console.log(err);
    }
}; 