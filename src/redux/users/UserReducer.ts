import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@/types/users/UserTypes';
import { RootState } from '@/redux/store';
import { fetchUsers, createUser, fetchUsersById, editUser, deleteUser } from '@/services/users/UserListServices';

export interface UserList {
  users: User[];
  loading: boolean;
  error: string | null;
}

export interface EditUserParams {
  userId: string
  updatedUser: User
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

// Edit user
export const editUserAsync = createAsyncThunk(
  'users/editUser',
  async (params: EditUserParams) => {
    const { userId, updatedUser } = params
    await editUser(userId, updatedUser);
    return userId;
  }
);


// Delete user
export const deleteUserAsync = createAsyncThunk(
  'users/deleteUser',
  async (userId: string) => {
    await deleteUser(userId); 
    return userId; 
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

    // createUser reducers
    builder.addCase(createUserAsync.fulfilled, (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    });

    // deleteUser reducers
    builder.addCase(deleteUserAsync.fulfilled, (state, action: PayloadAction<string>) => {
      state.users = state.users.filter(user => user.id !== action.payload);
    });
  },
});

// Excport actions and reducers
export const selectUsers = (state: RootState) => state.user.users;
export const selectLoading = (state: RootState) => state.user.loading;
export const selectError = (state: RootState) => state.user.error;

export default userSlice.reducer;