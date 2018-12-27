import React from 'react';

const Error = (props) => {
  if (props.show) {
    return (
      <div className={props.class}><p>{props.msg}</p></div>
    );
  }
  return (<div />);
};

export default Error;
