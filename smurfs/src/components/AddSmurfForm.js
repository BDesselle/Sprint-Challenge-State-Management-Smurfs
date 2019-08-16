import React, { useState } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../store/actions";

const AddSmurfForm = props => {
  const [newSmurf, setNewSmurf] = useState(props.newSmurf);

  const changeHandler = e => {
    setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value });
  };

  const clickToAdd = e => {
    e.preventDefault();
    props.addSmurf(newSmurf);
  };
  return (
    <div>
      <form onSubmit={clickToAdd}>
        <input
          type="text"
          name="name"
          value={newSmurf.name}
          placeholder="Enter name of Smurf..."
          onChange={changeHandler}
        />
        <input
          type="number"
          name="age"
          value={newSmurf.age}
          placeholder="Enter age of Smurf..."
          onChange={changeHandler}
        />
        <input
          type="text"
          name="height"
          value={newSmurf.height}
          placeholder="Enter height of Smurf..."
          onChange={changeHandler}
        />
        <button onClick={clickToAdd}>Add Smurf</button>
      </form>
    </div>
  );
};

const mapStatetoProps = state => {
  return {
    newSmurf: state.newSmurf
  };
};

export default connect(
  mapStatetoProps,
  { addSmurf }
)(AddSmurfForm);
