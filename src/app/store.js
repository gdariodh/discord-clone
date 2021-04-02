import { configureStore } from '@reduxjs/toolkit';
// nombramos como Reducer a los Slice
import userReducer from '../features/userSlice';

// FIXME: 1:53

export default configureStore({
  reducer: {
    user: userReducer
    // app: appReducer
  },
});


// store hace disponible los diferentes reducer en toda la app
// de modo que puedas acceder con useSelector desde cualquier lugar de la app
