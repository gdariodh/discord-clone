// userSlice tiene el initial state, los reducers y los actions
import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    channelId: null,
    channelName: null,
  },
  // altera o modifica initialState
  reducers: {
    setChannelId: (state, action) => {
      state.app += action.payload;
    },
  },
});

// actions: fns q ejecuta el usuario en la app
export const { setChannelId } = appSlice.actions;

// exportar y hacer disponible state en diferentes childrens
export const selectChannelId = (state) => state.app.channelId;
export const selectChannelName = (state) => state.app.channelName;

export default appSlice.reducer;
