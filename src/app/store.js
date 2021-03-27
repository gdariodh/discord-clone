import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';

export default configureStore({
  reducer: {
    user: userReducer,
  },
});


// store hace disponible los diferentes reducer en toda la app
// de modo que puedas acceder con useSelector desde cualquier lugar de la app
