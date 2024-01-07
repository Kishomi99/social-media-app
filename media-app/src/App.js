import Home from "./pages/home/Home";
import React from 'react';
import Profile from "./pages/profile/Profile";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

function App() {
  return (
    <div >
      <Home/>
      <Profile/>
      <Login/>
      <Register/>

      
    </div>
  );
}

export default App;
