import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import { LoggedInContext } from './contexts/LoggedIn';
import Search from './Search';
import SignIn from './SignIn';
import Profile from './Profile';
import './App.css';

const RouteSwitch = () => {
  const { loading } = useContext(LoggedInContext);

  return (
    <>
      {loading ? (
        <div className="loading-screen">
          <span role="img" aria-label="emoji" className="robo-logo">
            🤖
          </span>
        </div>
      ) : (
        <Switch>
          <Route exact path="/" render={() => <Search />} />
          <Route exact path="/signin" render={() => <SignIn />} />
          <Route exact path="/profile" render={() => <Profile />} />
        </Switch>
      )}
    </>
  );
};

export default RouteSwitch;
