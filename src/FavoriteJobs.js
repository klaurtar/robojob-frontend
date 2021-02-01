import React, { useContext } from 'react';
import { LoggedInContext } from './contexts/LoggedIn';
import Job from './Job';
import './FavoriteJobs.css';

const FavoriteJobs = () => {
  const { favoriteJobs } = useContext(LoggedInContext);

  return (
    <div className="FavoriteJobs">
      <div className="container">
        <div className="row">
          {favoriteJobs.length ? (
            favoriteJobs
              .slice(0)
              .reverse()
              .map((job) => {
                return (
                  <Job
                    position={job.position}
                    company={job.company}
                    description={job.description}
                    poster={job.poster}
                    url={job.url}
                    key={job._id}
                    id={job._id}
                    foundJobBy={'Favorite Jobs'}
                  />
                );
              })
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FavoriteJobs;
