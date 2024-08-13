import React from "react";

const Register = () => {
  return (
    <>
      <form action="/Login/Login.html">
        <div class="container">
          <div style="text-align: center">
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
            <button type="submit" class="registerbutton">
              Register
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Register;
