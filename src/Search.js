import React, { useContext, useState } from 'react';
import LoaderIcon from './LoaderIcon';
import axios from 'axios';
import validator from 'validator';
import madison from 'madison';
import Job from './Job';
import Navbar from './Navbar';
import './Search.css';

import { LoggedInContext } from './contexts/LoggedIn';

const Form = () => {
  const { loggedIn, user } = useContext(LoggedInContext);
  const [positionValue, setPositionValue] = useState('');
  const [locationValue, setLocationValue] = useState('');
  const [stateValue, setStateValue] = useState('AL');
  const [limitValue, setLimitValue] = useState(1);
  const [isLoadingValue, setIsLoadingValue] = useState(false);

  const [jobsValue, setJobsValue] = useState([]);

  const handlePositionChange = (e) => {
    setPositionValue(e.target.value);
  };
  const handleLocationChange = (e) => {
    setLocationValue(e.target.value);
  };

  const handleDropdownChange = (e) => {
    setLimitValue(e.target.value);
  };

  const handleDropdownStateChange = (e) => {
    setStateValue(e.target.value);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    let isValidated = validateInput();

    if (isValidated) {
      setIsLoadingValue(true);

      try {
        setJobsValue([]);
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');

        const raw = JSON.stringify({
          query: positionValue,
          location: locationValue,
          state: stateValue,
          limit: limitValue || 5,
        });

        const requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow',
        };

        const { data } = await axios.post(
          'http://localhost:1337/api/v1/job/get-jobs',
          requestOptions
        );

        setJobsValue(data.jobs);
      } catch (err) {
        console.log(err);
      }

      setIsLoadingValue(false);
      reset();
    }
  };

  const validateInput = () => {
    const positionEmpty = validator.isEmpty(positionValue);
    const cityEmpty = validator.isEmpty(locationValue);

    if (!positionEmpty && !cityEmpty) {
      return true;
    } else {
      alert(`Position and City field's must be filled out!`);
      return false;
    }
  };

  const reset = () => {
    setPositionValue('');
    setLocationValue('');
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-sm-6 my-3 offset-sm-3 ">
            {!isLoadingValue ? (
              <>
                {loggedIn && (
                  <p className="text-success mb-3 flash-message">
                    Hey there {user.name.split(' ')[0]}, let's find you your
                    next job...
                  </p>
                )}
                <h1>Search for Jobs</h1>
                <form
                  style={{ border: '1px lightgrey solid', borderRadius: '5px' }}
                  className="p-3"
                  onSubmit={onSubmitHandler}
                >
                  <div className="form-group">
                    <label htmlFor="jobPosition">Job Position</label>
                    <input
                      value={positionValue}
                      onChange={handlePositionChange}
                      type="text"
                      className="form-control"
                      id="jobPosition"
                      aria-describedby="jobPosition"
                      placeholder="Enter a job you're searching for..."
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="location">City</label>
                    <input
                      value={locationValue}
                      onChange={handleLocationChange}
                      type="text"
                      className="form-control"
                      id="location"
                      placeholder="Enter a location for your job search..."
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="stateValue">State</label>
                    <select
                      value={stateValue}
                      onChange={handleDropdownStateChange}
                      className="form-control"
                      id="stateValue"
                    >
                      {madison.states.map((state) => (
                        <option key={state['abbr']} value={state['abbr']}>
                          {state['name']}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="numberLimit">
                      How many jobs would you like to pull from each platform?
                    </label>
                    <select
                      value={limitValue}
                      onChange={handleDropdownChange}
                      className="form-control"
                      id="numberLimit"
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                    </select>
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Search
                  </button>
                </form>
              </>
            ) : (
              <>
                <h1>
                  Pulling jobs...Please hold{' '}
                  <span role="img" aria-label="Smile">
                    🤓
                  </span>
                </h1>
                <LoaderIcon />
              </>
            )}
          </div>
        </div>

        <div className="row">
          {jobsValue.length ? (
            jobsValue.map((job) => {
              return (
                <Job
                  position={job.position}
                  company={job.company}
                  description={job.description}
                  poster={job.poster}
                  url={job.url}
                  foundJobBy={'Search'}
                  key={job.id}
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

export default Form;
