import React from "react";
import { Link, BrowserRouter, Route, NavLink } from "react-router-dom";
import '../SideBar/SideBar.css'
function App() {
  return (
    <aside className="main-sidebar sidebar-light-teal elevation-4 ">
      {/* Brand Logo */}
      <a href="../index3.html" className="brand-link">
        <img
          src="../dist/img/AdminLTELogo.png"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-light">AdminLTE 3</span>
      </a>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src="../dist/img/user2-160x160.jpg"
              className="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div className="info">
            <a href="#" className="d-block">
              Alexander Pierce
            </a>
          </div>
        </div>
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            {/* Add icons to the links using the .nav-icon class
           with font-awesome or any other icon font library */}
            <NavLink
              to="/home"
              activeStyle={{
                background: "#17a2b8",
                borderRadius: "5px"
              }}
            >
              <li className="nav-item">
                <p className="nav-link">
                  <i className="nav-icon fas fa-home" />
                  <p style={{ marginLeft: "15px" }}>Home</p>
                </p>
              </li>
            </NavLink>
            <NavLink to="/activity"   activeStyle={{
                background: "#17a2b8",
                borderRadius: "5px"
              }}>
              <li className="nav-item">
                <p className="nav-link ">
                  <i className="nav-icon fas fa-heart" />
                  <p style={{ marginLeft: "15px" }}>Activity</p>
                </p>
              </li>
            </NavLink>
            <NavLink to="/messages"   activeStyle={{
                background: "#17a2b8",
                borderRadius: "5px"
              }}>
              <li className="nav-item">
                <p className="nav-link ">
                  <i className="nav-icon fas fa-comment" />
                  <p style={{ marginLeft: "15px" }}>Messages</p>
                </p>
              </li>
            </NavLink>
            <NavLink to="/profile"   activeStyle={{
                background: "#17a2b8",
                borderRadius: "5px"
              }}>
              <li className="nav-item">
                <p className="nav-link">
                  <i className="nav-icon fas fa-user" />
                  <p style={{ marginLeft: "15px" }}>Profile</p>
                </p>
              </li>
            </NavLink>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
}

export default App;
