import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'; 
import { User } from '@/types/users/UserTypes'; 
import { RootState } from '@/redux/store';
import { fetchUsers, createUser, fetchUsersById } from '@/services/users/UserListServices';

 export interface UserList {
    users: User[];
    loading: boolean;
    error: string | null;
  }

  const initialState: UserList = {
    users: [],
    loading: false,
    error: null,
  };

  // Fetch users from API 
export const fetchUsersAsync = createAsyncThunk(
    'users/fetchUsers',
    async () => {
       const response = await fetchUsers(); 
          
       return response;
    }
  );

  //Fetch user by id 
  export const fetchUserByIdAsync = createAsyncThunk(
    'users/fetchUsersById',
    async (id: string) => {
       const response = await fetchUsersById(id); 
          
       return response;
    }
  );

  // Create user
export const createUserAsync = createAsyncThunk(
  'users/createUser',
  async (newUser: User) => {
     const response = await createUser(newUser); 
     return response; 
  }
);
  // Slice
export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
    // fetchUsers reducers
    builder.addCase(fetchUsersAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      });
      builder.addCase(fetchUsersAsync.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.loading = false;
        state.users = action.payload;
      });
      builder.addCase(fetchUsersAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error fetching users';
      });
    },
});

// Excport actions and reducers
export const selectUsers = (state: RootState) => state.user.users;
export const selectLoading = (state: RootState) => state.user.loading;
export const selectError = (state: RootState) => state.user.error;

export default userSlice.reducer;