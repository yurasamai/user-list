import axios from 'axios';

const UserListApiGateWay = axios.create({
  baseURL: 'https://gorest.co.in/', 
  timeout: 5000, 
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default UserListApiGateWay;