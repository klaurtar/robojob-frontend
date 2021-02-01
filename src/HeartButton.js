import React, { useState, useContext } from 'react';
import axios from 'axios';
import { LoggedInContext } from './contexts/LoggedIn';

const HeartButton = ({ poster, position, company, url, user, description }) => {
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const { favoriteJobs, setFavoriteJobs } = useContext(LoggedInContext);

  const addJobToFavorites = async () => {
    try {
      const payload = JSON.stringify({
        poster: poster,
        position: position,
        company: company,
        url: url,
        user: user,
        description: description,
      });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        'http://localhost:1337/api/v1/job/favorite-job',
        payload,
        config
      );

      setFavoriteJobs([...favoriteJobs, data.data.favoriteJob]);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = () => {
    setButtonDisabled(true);
    addJobToFavorites();
  };

  return (
    <button
      disabled={buttonDisabled}
      onClick={handleClick}
      className="btn btn-danger"
    >
      <i className="fas fa-heart"></i>
    </button>
  );
};

export default HeartButton;
