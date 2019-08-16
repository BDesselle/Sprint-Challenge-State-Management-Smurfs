import React from "react";

const Smurf = props => {
  return (
    <div>
      <h1>{props.smurf.name}</h1>
      <h2>{props.smurf.age}</h2>
      <h3>{props.smurf.height}</h3>
    </div>
  );
};

export default Smurf;
