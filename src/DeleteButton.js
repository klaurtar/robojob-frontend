import React, { useContext } from 'react';
import axios from 'axios';
import { LoggedInContext } from './contexts/LoggedIn';

const HeartButton = ({ id }) => {
  const { favoriteJobs, setFavoriteJobs } = useContext(LoggedInContext);

  const deleteJob = async () => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.delete(
        'http://localhost:1337/api/v1/job/favorite-job/' + id,
        config
      );
      console.log(data);

      const index = favoriteJobs.findIndex((job) => {
        return job.id === id;
      });
      favoriteJobs.splice(index, 1);
      setFavoriteJobs([...favoriteJobs]);

      //setFavoriteJobs(job =>)
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = () => {
    deleteJob();
  };

  return (
    <button onClick={handleClick} className="btn btn-danger">
      <i className="fas fa-trash"></i>
    </button>
  );
};

export default HeartButton;
