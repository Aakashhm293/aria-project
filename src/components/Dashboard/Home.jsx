import React from "react";

const Home = () => {
  return (
    <>
      <div class="navbar-container">
        <ul class="navBar">
          <li class="list_item">
            <a href="#">Student Application</a>
          </li>
          <li class="list_home">
            <a href="../index.html">Home</a>
          </li>
          <li class="list_home">
            <a href="#">About</a>
          </li>
          <li class="list_home">
            <a href="/index.html"> Logout</a>
          </li>
        </ul>
        <hr />
      </div>
      <br />
      <div class="section_1">
        <h1>Student Details</h1>
        <select class="select_bar">
          <option value="0">Select</option>
          <option value="1">Marks</option>
          <option value="2">Subject</option>
        </select>
      </div>
      <br />
      <br />
      <div>
        <table>
          <thead>
            <tr>
              <th colspan="6" style="text-align: center">
                Student Information
              </th>
            </tr>
          </thead>
          <tr>
            <th>Register Number</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>City</th>
            <th>Course</th>
          </tr>
          <tr>
            <td>101</td>
            <td>John</td>
            <td>john@gmail.com</td>
            <td>8951124114</td>
            <td>Mysuru</td>
            <td>MCA</td>
          </tr>
          <tr>
            <td>102</td>
            <td>Robin</td>
            <td>robin@gmail.com</td>
            <td>6351124114</td>
            <td>Mandya</td>
            <td>BSC</td>
          </tr>
          <tr>
            <td>103</td>
            <td>Kumar</td>
            <td>kumar@gmail.com</td>
            <td>7411124114</td>
            <td>Mandya</td>
            <td>MS</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Home;
