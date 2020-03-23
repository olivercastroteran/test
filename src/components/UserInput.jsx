import React from 'react';

const UserInput = props => {
  const style = {
    margin: '20px 0',
    outline: 'none',
    padding: '10px',
    border: '1px solid blue',
    textAlign: 'center',
    borderRadius: '5px'
  };
  return (
    <input
      type="text"
      style={style}
      name="name"
      onChange={props.changed}
      value={props.currentName}
    />
  );
};

export default UserInput;
