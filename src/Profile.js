import React, { useContext, useState } from 'react';
import Navbar from './Navbar';
import { LoggedInContext } from './contexts/LoggedIn';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import ProfileContent from './ProfileContent';
import './Profile.css';

const buttonTypes = ['Favorite Jobs', 'Profile Settings'];

const Profile = () => {
  const [profileTabActive, setProfileTabActive] = useState(buttonTypes[0]);
  const { loggedIn } = useContext(LoggedInContext);

  return (
    <>
      {loggedIn ? (
        <div className="Profile">
          <div className="d-flex justify-content-end">
            {buttonTypes.map((button) => (
              <div
                key={button}
                className={`profile-buttons ${
                  profileTabActive === button ? 'active' : ''
                }`}
                onClick={() => {
                  setProfileTabActive(button);
                }}
              >
                {button}
              </div>
            ))}
          </div>

          <ProfileContent active={profileTabActive} />
        </div>
      ) : (
        <h1 className="text-center mt-3">
          You are not logged in... Should you be here?{' '}
          <span role="img" aria-label="Emoji">
            🤔
          </span>
        </h1>
      )}
    </>
  );
};

export default Profile;
