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
    setChannelInfo: (state, action) => {
      state.channelId = action.payload.channelId
      state.channelName = action.payload.channelName
    },
  },
});

// actions: fns q ejecuta el usuario en la app
export const { setChannelInfo } = appSlice.actions;

// exportar y hacer disponible state en diferentes childrens, para trabajar con useSelector

// state.nameState.InitialStateName
export const selectChannelId = (state) => state.app.channelId;
export const selectChannelName = (state) => state.app.channelName;

export default appSlice.reducer;
