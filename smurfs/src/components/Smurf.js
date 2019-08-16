import React from "react";

const Smurf = props => {
  //* Rendering data passed from SmurfList via props
  return (
    <React.Fragment>
      <div>
        <h1>{props.smurf.name}</h1>
        <h3>
          Age: <span>{props.smurf.age}</span>
        </h3>
        <h3>
          Height: <span>{props.smurf.height}</span>
        </h3>
      </div>
    </React.Fragment>
  );
};

export default Smurf;
