/* eslint-disable @typescript-eslint/no-explicit-any */
import UserListApiGateWay from '@/api/AxiosConfig';
import { User } from '@/types/users/UserTypes';

// Fetch user list
export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await UserListApiGateWay.get('/public/v2/users/');
    return response.data;
  } catch (error: any) {
    throw new Error(`Error on: Fetch users: ${error.message}`);
  }
};

// Create user
export const createUser = async (newUser: User): Promise<User> => {
  try {
    const response = await UserListApiGateWay.post('/public/v2/users', newUser);
    return response.data;
  } catch (error: any) {
    throw new Error(`Error on: Create user: ${error.message}`);
  }
};

// Fetch user by id
export const fetchUsersById = async (userId: string): Promise<any> => {
  try {
    const response = await UserListApiGateWay.get(`/public/v2/users/${userId}`);
    return response.data;
  } catch (error: any) {
    throw new Error(`Error on: Fetch users: ${error.message}`);
  }
};

// Edit user
export const editUser = async (userId: string, updatedUser: User): Promise<User> => {
  try {
    const response = await UserListApiGateWay.put(`/public/v2/users/${userId}`, updatedUser);
    return response.data;
  } catch (error: any) {
    throw new Error(`Error on: Edit user: ${error.message}`);
  }
};
