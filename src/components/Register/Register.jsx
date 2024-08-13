import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <>
      <div>
        <div>
          <form action="/Login/Login.html">
            <div className="container">
              <div>
                <h1>Register</h1>
                <hr />
                <label for="email">
                  <br />
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Enter email id"
                  name="email"
                  id="email"
                  required
                />
                <br />
                <br />
                <label for="password">
                  <br />
                  Pasword
                </label>
                <input
                  type="text"
                  placeholder="Enter pasword"
                  name="password"
                  id="password"
                  required
                />
                <br />
                <br />
                <label for="confirm password">
                  <br />
                  Confirm Password
                </label>
                <input
                  type="text"
                  placeholder="Enter repeat password"
                  name="Repeat password"
                  id="Repeat password"
                  required
                />
                <br />
                <br />
                <hr />
                <button type="submit" className="registerbutton">
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
