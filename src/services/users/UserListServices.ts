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