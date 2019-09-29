import Axios from 'axios';

const createUser = user => Axios.post('/user', user); // TODO typeOf user => Object
const getUsers = () => Axios.get('/user');

export {
    createUser, 
    getUsers
};