import { AppDispatch } from '@/redux/store'; 
import { editUserAsync, fetchUserByIdAsync } from '@/redux/users/UserReducer'; 
import { User } from '@/types/users/UserTypes';

export const UseEditUser = async (dispatch: AppDispatch, id: string, user: User) => {
  try {
    const paramsObj = {
      userId:id,
      updatedUser:user
    }
    await dispatch(editUserAsync(paramsObj));
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

export const UseGetUserById = async (dispatch: AppDispatch, id: string) => {
    try {
      return await dispatch(fetchUserByIdAsync(id));
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };