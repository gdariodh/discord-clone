import React from "react";
import "./App.css";
// components
import Sidebar from "./components/sidebar";
import Chat from "./components/chat";
import Login from "./components/login"

// useSelector accede state, useDispatch invoca actions
import { useSelector } from "react-redux";
// states de user
import { selectUser } from "./features/userSlice";

function App() {
  // option1: const user = useSelector(state => state.user.user)

  // option2:
  const user = useSelector(selectUser);
  console.log(user);

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
