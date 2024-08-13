import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <>
      <div>
        <h1 id="welcome">Welcome</h1>
      </div>
      <form action="/dashboard" id="form-body">
        <div>
          <p class="paratext">Enter Email Here</p>
          <input type="email" class="input-fields" />
        </div>
        <div>
          <p class="paratext">Enter Password Here</p>
          <input type="password" class="input-fields" />
        </div>
        <br />
        <button type="submit" id="button-smt">
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
