import React from "react";
import Google from "../images/google.png";
import Facebook from "../images/facebook.png";
import Github from "../images/github.png";
// import axios from "axios";

const Login = () => {
  // const [data, setData] = useState({ email: "", password: "" });


  const google = () => {
    // Redirect the user to the Google authentication URL
    // window.location.href = "http://localhost:8080/auth/google";
    window.location.href = "https://oauth-login-g7iy.onrender.com/auth/google";

  };
  

  const github = () => {
    // window.open("http://localhost:8080/auth/github/callback", "_self");
    window.open("https://oauth-login-g7iy.onrender.com/auth/github/callback", "_self");

  };

  const facebook = () => {
    // window.open("http://localhost:8080/auth/facebook/callback", "_self");
    window.open("https://oauth-login-g7iy.onrender.com/auth/facebook/callback", "_self");
    
  };
  return (
    <div>
      <div className="login">
        <h1 className="loginTitle">Choose a Login Method</h1>
        <div className="wrapper">
          <div className="center">
            <div className="loginButton google" onClick={google}>
              <img src={Google} alt="" className="icon" />
              Google
            </div>

            <div className="loginButton facebook" onClick={facebook}>
              <img src={Facebook} alt="" className="icon" />
              Facebook
            </div>
            <div className="loginButton github" onClick={github}>
              <img src={Github} alt="" className="icon" />
              Github
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
