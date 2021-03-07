import React from 'react';
import './App.css';
// components
import Sidebar from './components/sidebar'
import Chat from "./components/chat"

function App() {
  return (
    <>
    <div className="app">
       {/* sidebar component */}
       <Sidebar/>
       {/* chat component */}
       <Chat/>
    </div> 
    </>
  );
}

export default App;
