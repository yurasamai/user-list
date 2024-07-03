import { AppDispatch } from '@/redux/store';
import { deleteUserAsync } from '@/redux/users/UserReducer';

export const UseDeleteUser = async (dispatch: AppDispatch, id: string) => {
  try {
    await dispatch(deleteUserAsync(id));
  } catch (error) {
    console.error('Error deleting user:', error);
  }
};