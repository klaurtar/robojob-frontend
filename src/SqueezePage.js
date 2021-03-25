import React, { useState } from 'react';
import FadeInSection from './FadeInSection';
import validator from 'validator';
import './SqueezePage.css';

const SqueezePage = () => {
  const [email, setEmail] = useState('');
  const [numberOfSignUps, setNumberOfSignUps] = useState(0);

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const clickHandler = async (e) => {
    e.preventDefault();
    if (validator.isEmail(email)) {
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      const raw = JSON.stringify({ email });

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };

      const rawData = await fetch(
        `"http://localhost:1337/api/v1/email`,
        requestOptions
      );

      const finalData = await rawData.json();
      console.log(finalData);
      resetEmail();
      calculateSignUpSpotsLeft(finalData.length);
    } else {
      console.log('Not working');
    }
  };

  const resetEmail = () => {
    setEmail('');
  };

  const calculateSignUpSpotsLeft = (num) => {
    let spotsLeft = 100 - num;
    setNumberOfSignUps(spotsLeft);
  };

  return (
    <div className="SqueezePage">
      <div className="container">
        <div className="row mb-5">
          <div className="col-sm-6 p-3">
            <FadeInSection direction="right">
              <div className="ninja-logo">
                <img src="/Ninja-9to5_logo_Stacked copy.png" />
              </div>
            </FadeInSection>
          </div>
          <div className="col-sm-6 p-3">
            <FadeInSection direction="left">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/aI7jRGMGzEU"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </FadeInSection>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6 ninja-text">
            <FadeInSection direction="right">
              <div className="header-text">
                The only site built by a coder to help other coders go from job
                seeking to hired - <span style={{ color: 'red' }}>FAST!</span>
              </div>
              <ul className="feature-list">
                <li>
                  Search multiple job sites like Ziprecruiter, Monster, and
                  Indeed all at once!
                </li>
                <li>
                  Create cover letter templates that generate a new cover letter
                  for every job you're interested in to save you time.
                </li>
                <li>
                  9to5Ninja is{' '}
                  <strong style={{ color: 'red' }}>invite only</strong>! This is
                  a private tool to help our ninjas cut through job market
                  competition, and only the worthy may enter!
                </li>
              </ul>
            </FadeInSection>
          </div>
          <div className="col-sm-6 p-3">
            <FadeInSection direction="left">
              <div className="newsletter">
                <div className="header">Join Our Newsletter</div>
                <p>The first 100 newsletter susbcribers will receive:</p>
                <ul className="newsletter-bullets">
                  <li>An invitation to join 9to5Ninja</li>
                  <li>Information on when the site is live</li>
                  <li>
                    Curated content for how to ace your interviews and get the
                    job
                  </li>
                  <li>
                    Random coding challenges to keep your mind sharp like a
                    katana
                  </li>
                </ul>
                <div className="number-container">
                  <strong>Spots Left:</strong>
                  <span className="big-money">{numberOfSignUps}</span>
                </div>

                <form>
                  <div className="form-group row px-3">
                    <div className="col-8">
                      <input
                        type="email"
                        class="form-control"
                        id="newsletterEmail"
                        aria-describedby="emailHelp"
                        placeholder="kakashi@hiddenleaf.com"
                        value={email}
                        onChange={emailHandler}
                      />
                    </div>
                    <div className="col-4">
                      <button
                        className="btn btn-primary"
                        onClick={clickHandler}
                      >
                        Join Newsletter
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
      {/* <div className="ninja-logo">
        <img src="/Ninja-9to5_logo_Stacked copy.png" />
      </div> */}
    </div>
  );
};

export default SqueezePage;
