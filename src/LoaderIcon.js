import React from 'react';
import './LoaderIcon.css';

const LoaderIcon = () => {
    return (
        <div className="loader-holder my-3">
            <div className="loader">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
        </div>
    )
}

export default LoaderIcon;