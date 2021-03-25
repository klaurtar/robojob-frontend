import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import { LoggedInContext } from './contexts/LoggedIn';
import Navbar from './Navbar';
import FriendCodeContainer from './FriendCodeContainer';
import Search from './Search';
import SignIn from './SignIn';
import Profile from './Profile';
import SqueezePage from './SqueezePage';
import './App.css';

const RouteSwitch = () => {
  const { loading } = useContext(LoggedInContext);

  return (
    <>
      {loading ? (
        <div className="loading-screen">
          <img src="/Ninja-9to5_logo_Stacked.png" alt="Logo Stacked" />
        </div>
      ) : (
        <>
          <Navbar />
          <Switch>
            <Route exact path="/" render={() => <SqueezePage />} />
            {/* <Route exact path="/signin" render={() => <SignIn />} />
            <Route exact path="/profile" render={() => <Profile />} />
            <Route exact path="/squeeze" render={() => <SqueezePage />} /> */}
          </Switch>
          {/* <FriendCodeContainer /> */}
        </>
      )}
    </>
  );
};

export default RouteSwitch;
