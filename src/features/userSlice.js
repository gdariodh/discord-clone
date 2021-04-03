// userSlice tiene el initial state, los reducers y los actions 
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user += action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
 
// exportar y hacer disponible state en diferentes childrens, para trabajar con useSelector
// state.nameState.InitialStateName
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
