import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  userInfo: null,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset:(state)=>{
        state.loading = false;
        state.userInfo = null;
        state.error = null;
    }
  },
  extraReducers:{
    [checkLogin.pending]: (state, action) => {
        
    }
  }
});

export const { setToken } = authSlice.actions;

export default authSlice.reducer;
