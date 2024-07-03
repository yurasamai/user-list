import axios from 'axios';

const REACT_APP_ACCES_TOKEN= "764f0362b3dfe981770b453debf78dddcd554d697009c7780b6b875aa6a9e642"
const UserListApiGateWay = axios.create({
  baseURL: 'https://gorest.co.in/', 
  timeout: 5000, 
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
     'Authorization': `Bearer ${REACT_APP_ACCES_TOKEN}`
  },
});

export default UserListApiGateWay;