import { AppDispatch } from '@/redux/store'; 
import { fetchUserByIdAsync } from '@/redux/users/UserReducer'; 

export const UseGetUserById = async (dispatch: AppDispatch, id: string) => {
  try {
    return await dispatch(fetchUserByIdAsync(id));
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};