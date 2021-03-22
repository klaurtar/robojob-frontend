import React, { useContext, useState } from 'react';
import axios from 'axios';
import { LoggedInContext } from './contexts/LoggedIn';

const SignIn = () => {
  const { signUserIn } = useContext(LoggedInContext);
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const logInInfo = JSON.stringify({
        email: emailValue,
        password: passwordValue,
      });

      const config = {
        method: 'POST',
        url: 'http://localhost:1337/api/v1/auth/sign-in',
        headers: {
          'Content-Type': 'application/json',
        },
        data: logInInfo,
      };

      const { data } = await axios(config);

      signUserIn(data.token, data, '/');
      //make one function
    } catch (err) {
      console.log(err);
      alert('Invalid Email and/or Password');
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 my-3 offset-sm-3 ">
            <h1>Sign In</h1>
            <form
              onSubmit={onSubmitHandler}
              style={{ border: '1px lightgrey solid', borderRadius: '5px' }}
              className="p-3"
            >
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  value={emailValue}
                  onChange={handleEmailChange}
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  value={passwordValue}
                  onChange={handlePasswordChange}
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
