import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Post from "./pages/Post";


import { useState, useEffect } from "react";
const App = () => {

  const [user, setUser] = useState(null);
  useEffect(() => {
    const getUser = () => {
      // fetch("http://localhost:8080/auth/login/success", {
        fetch("https://oauth-login-g7iy.onrender.com/auth/login/success",{
        method: "GET",
        credentials: "include",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,  
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
          console.log(resObject.user)
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);
	
  return (
    <BrowserRouter>
      <div>   
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
       
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
            <Route
            path="/about"
            element={user ? <About /> : <Navigate to="/login" />}
          />
          <Route
            path="/post/:id"
            element={user ? <Post /> : <Navigate to="/login" />}
          />
       
  
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
