
import React from "react";
import { Link } from "react-router-dom";

const LogoutBar = ({ userDetails }) => {
  const user = userDetails; // userDetails contains the user data

  const logout = () => {
    // window.open("https://oauth-login-g7iy.onrender.com/auth/logout", "_self");
    window.open("http://localhost:8080/auth/logout", "_self");
  };

  return (
    <div>
      <nav className={"navbar navbar-expand-lg bg-body-tertiary"}>
        <div className={"container-fluid"}>
          <Link to="/">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.3alG8972NDSKIUCGOGVkkAHaEC&pid=Api&P=0&h=220"
              alt="Software Shop"
              width="120"
              height="40"
            ></img>
          </Link>
          <button
            className={"navbar-toggler"}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className={"navbar-toggler-icon"}></span>
          </button>
          <div className={"collapse navbar-collapse"} id="navbarSupportedContent">
            <ul className={"navbar-nav me-auto mb-2 mb-lg-0"}>
              <li className={"nav-item"}>
                <Link
                  to="/about"
                  className={"nav-link active"}
                  aria-current="page"
                >
                  <button className={"btn btn-light me-3"}> About</button>
                </Link>
              </li>
              <div className="nav">
                {/* Render user's image and name */}
                <li className="listItem">
                  <img
                    src={user.photos[0].value}
                    alt="google dp"
                    className={"avatar me-2 mt-3"}
                  />
                </li>
                <li className="listItem mt-3">{user.displayName}</li>
              </div>
              <li>
                <Link
                  to="/"
                  className={"nav-link active ms-auto"}
                  aria-current="page"
                >
                  <button className={"btn btn-light "} onClick={logout}>
                    Log Out
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default LogoutBar;
