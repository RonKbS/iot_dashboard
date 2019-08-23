import React from 'react';
import { Link } from 'react-router-dom';


export const Logout = () => {
  localStorage.removeItem("token");
  render (
    <li className="nav-item active">
      <Link className="btn btn-light lp-btn text-black" to="/signin">
        LogOut
      </Link>
    </li>
  );
};

const Navbar = () => (
  <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-transparent">
    <h3>IoT</h3>
    <ul className="navbar-nav ml-auto">
      <span />
      <Logout />
    </ul>
  </nav>
);

export default Navbar;