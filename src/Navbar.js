import React, { useContext } from 'react';
import { LoggedInContext } from './contexts/LoggedIn';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Navbar.css';

import './App.css';

const Navbar = () => {
  const { loggedIn, signUserOut } = useContext(LoggedInContext);

  const handleLogoutClick = async () => {
    try {
      const config = {
        method: 'GET',
        url: 'http://localhost:1337/api/v1/auth/logout',
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios(config);
      console.log(data);
      signUserOut();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img className="logo" src="/Ninja-9to5_logo_H.png" alt="logo" />
      </Link>

      <div className="d-flex justify-content-end ml-auto">
        {loggedIn ? (
          <>
            <Link to="/profile" className="align-self-center mr-3">
              Profile
            </Link>
            <button onClick={handleLogoutClick} className="btn btn-danger">
              Log Out
            </button>{' '}
          </>
        ) : (
          <Link to="/signin">Sign In</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
