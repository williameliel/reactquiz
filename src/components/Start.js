import React from 'react';

const Start = ({title, description, handleStart}) => {

  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <button 
        className="btn btn-default" 
        onClick={handleStart}>Start</button>
    </div>
  );
};

export default Start;
