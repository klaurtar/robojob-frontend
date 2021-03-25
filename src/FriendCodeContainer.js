import React, { useState } from 'react';
import './FriendCodeContainer.css';

const FriendCodeContainer = () => {
  const [showCodes, setShowCodes] = useState(false);
  return (
    <div className="FriendCodeContainer" data-open={showCodes}>
      <div
        onClick={() => {
          setShowCodes(!showCodes);
        }}
        className="FriendCodeContainerHeader"
      >
        <div className="FriendContainerHeaderInterior">Friend Codes</div>
      </div>
      {showCodes && <div className="FriendContainerBody">Hello</div>}
    </div>
  );
};

export default FriendCodeContainer;
