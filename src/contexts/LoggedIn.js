import React, { createContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Cookie from 'js-cookie';
import axios from 'axios';
export const LoggedInContext = createContext();

export function LoggedInProvider(props) {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const [coverLetter, setCoverLetter] = useState('');
  const [favoriteJobs, setFavoriteJobs] = useState([]);

  const signUserIn = (token, userData, path = undefined) => {
    // set token,
    // set user data,
    // navigate to home page.

    Cookie.set('token', token);
    changeLogIn(true);
    changeUser(userData.user);
    changeCoverLetter(userData.user.coverLetter);
    setFavoriteJobs(userData.user.jobs);
    NavigateTo(path);
  };

  useEffect(() => {
    setLoading(true);
    const jwt = Cookie.get('token');

    const fetchData = async () => {
      try {
        const config = {
          method: 'POST',
          url: 'http://localhost:1337/api/v1/auth/sign-in/token',
          headers: {
            'Content-Type': 'application/json',
          },
          data: {
            token: jwt,
          },
        };

        const { data } = await axios(config);

        signUserIn(jwt, data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    if (jwt) {
      fetchData();
    } else {
      setLoading(false);
    }
  }, []);

  const changeLogIn = (val) => {
    setLoggedIn(val);
  };

  const signUserOut = () => {
    // un-set token,
    // un-set user data,
    // navigate to home page.

    Cookie.set('token', '');
    changeLogIn(false);
    changeUser('');
    changeCoverLetter('');
    setFavoriteJobs([]);
    NavigateTo('/');
  };

  const changeUser = (val) => {
    setUser(val);
  };

  const changeCoverLetter = (val) => {
    setCoverLetter(val);
  };

  const NavigateTo = (path) => {
    history.push(path);
  };

  return (
    <LoggedInContext.Provider
      value={{
        loggedIn,
        user,
        coverLetter,
        loading,
        favoriteJobs,
        setCoverLetter: changeCoverLetter,
        setFavoriteJobs: setFavoriteJobs,
        signUserIn: signUserIn,
        signUserOut: signUserOut,
      }}
    >
      {props.children}
    </LoggedInContext.Provider>
  );
}
