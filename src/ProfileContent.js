import React from 'react';
import FavoriteJobs from './FavoriteJobs';
import ProfileSettings from './ProfileSettings';

const ProfileContent = ({ active }) => {
  const renderSwitch = (param) => {
    switch (param) {
      case 'Favorite Jobs':
        return <FavoriteJobs />;
      default:
        return <ProfileSettings />;
    }
  };

  return <>{renderSwitch(active)}</>;
};

export default ProfileContent;
