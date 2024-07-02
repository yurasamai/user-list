import { AppDispatch } from '@/redux/store'; 
import { fetchUsersAsync } from '@/redux/users/UserReducer'; 

export const useFetchUsers = async (dispatch: AppDispatch) => {
  try {
    await dispatch(fetchUsersAsync());
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};