import Home from "./pages/home/Home";
import React from 'react';
import Profile from "./pages/profile/Profile";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import { 
        BrowserRouter as Router,
        Routes,
        Route
        } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/"   element={<Home />} />
        <Route exact path="/register"   element={<Register />} />
        <Route exact path="/profile"   element={<Profile />} />
        <Route exact path="/login"   element={<Login />} />

      </Routes>
    </Router>   
   
  );
}

export default App;
