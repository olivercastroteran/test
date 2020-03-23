import React from 'react';
import './UserOutput.css';

const UserOutput = props => {
  return (
    <div className="UserOutput">
      <h3>Hi {props.usrName}</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, quo.
      </p>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  );
};

export default UserOutput;
