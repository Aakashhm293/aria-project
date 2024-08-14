import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <div>
        <div class="heading_tag" role="banner">
          <h1 class="h1_heading" aria-label="Student Information">
            Student Information
          </h1>
        </div>
        <div class="navbar-container" role="navigation">
          <ul class="navBar" aria-label="navbar">
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
        <div
          role="complementary"
          class="section_1"
          style={{ display: "flex", alignItems: "center" }}
          aria-label="dropdown"
        >
          <div>
            <h1 style={{ marginRight: "10px" }}>Student Details</h1>
          </div>
          <div
            class="dropdown_button"
            style={{ marginLeft: "80%" }}
            aria-live="polite"
          >
            <select class="select_bar">
              <option value="0">Select</option>
              <option value="1">Marks</option>
              <option value="2">Subject</option>
            </select>
          </div>
        </div>

        <br />
        <br />
        <div role="main">
          <table aria-label="Student Table">
            <thead>
              <tr>
                <th colspan="6" style={{ textAlign: "center" }}>
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
      </div>
    </>
  );
};

export default Dashboard;
