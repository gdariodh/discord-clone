import React, { useEffect } from "react";
import "./App.css";
// components
import Sidebar from "./components/sidebar";
import Chat from "./components/chat";
import Login from "./components/login";
// useSelector accede state, useDispatch invoca actions
import { useSelector, useDispatch } from "react-redux";
// states de user
import { selectUser } from "./features/userSlice";
// actions de user
import { login, logout } from "./features/userSlice";
import { auth } from "./firebase";

function App() {
  const dispatch = useDispatch();

  // option2:
  const user = useSelector(selectUser);
  // option1: const user = useSelector(state => state.user.user)

  useEffect(() => {
    // revisa si hay un auth
    auth.onAuthStateChanged((authUser) => {
      if(authUser){
        dispatch(login({
          // action.payload
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName
        }));
      }else{
        // pone user como null
        dispatch(logout())
      }
    });
  }, [dispatch]);

  return (
    <>
      <div className="app">
        {user ? (
          <>
            <Sidebar />
            <Chat />
          </>
        ) : (
          <Login />
        )}
      </div>
    </>
  );
}

export default App;
