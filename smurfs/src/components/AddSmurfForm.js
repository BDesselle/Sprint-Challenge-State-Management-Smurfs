import React from "react";
//* Importing Connect function
import { connect } from "react-redux";
//* Importing the addSmurf Action
import { addSmurf } from "../store/actions";

const AddSmurfForm = props => {
  //* Setting up a useState to hold newSmurf and to set state with setNewSmurf
  const [newSmurf, setNewSmurf] = React.useState(props.newSmurf);

  //* Creating a handler to handle changes in the form's input fields
  const changeHandler = e => {
    setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value }); //* When a change occurs setState to target.name( name, age, height ):target.value( name, age, height )
  };

  //* Creating a handler to handle submit via click/enter
  const clickToAdd = e => {
    e.preventDefault(); //* Preventing the default action of the form
    props.addSmurf(newSmurf); //* Invoking the function to dispatch an action from the store (actions.js)
  };
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

//* Mapping my State to Props
const mapStatetoProps = state => {
  return {
    newSmurf: state.newSmurf
  };
};

//* Using the Connect function to connect my component to the Redux Store & provides the function it can use to dispatch actions from the store
export default connect(
  mapStatetoProps,
  { addSmurf }
)(AddSmurfForm);
