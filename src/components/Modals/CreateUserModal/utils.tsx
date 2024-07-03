import { AppDispatch } from '@/redux/store'; 
import { createUserAsync } from '@/redux/users/UserReducer'; 
import { User } from '@/types/users/UserTypes';

export const UseCreateUser = async (dispatch: AppDispatch, user: User) => {
  try {
   
    await dispatch(createUserAsync(user));
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};