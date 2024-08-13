import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div>
        <div>
          <h1 role="banner" aria-hidden="true">
            Welcome
          </h1>
          <div role="navigation" class="navbar-container">
            <ul id="navBar">
              <li class="list_item">
                <a href="#">Student Application</a>
              </li>
              <li id="home">
                <a href="#">Home</a>
              </li>
              <li id="about">
                <a href="#">About</a>
              </li>
              <li id="login">
                <Link to="/login">Login</Link>
              </li>
              <li id="signup">
                <Link to="/register">Signup</Link>
              </li>
            </ul>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
