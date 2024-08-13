import "./App.css";

function App() {
  return (
    <>
      <h1>Welcome</h1>
      <div class="navbar-container">
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
            <a href="./Login/Login.html">Login</a>
          </li>
          <li id="signup">
            <a href="./Register/Register.html">Signup</a>
          </li>
        </ul>
        <hr />
      </div>
    </>
  );
}

export default App;
