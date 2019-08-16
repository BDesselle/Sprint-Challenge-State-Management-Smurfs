import React from "react";
//* Importing Connect function
import { connect } from "react-redux";
//* Importing the getSmurfs Action
import { getSmurfs } from "../store/actions";
// Components
import Smurf from "./Smurf";

const SmurfList = props => {
  //* Creating a useEffect _ componentDidMount || componentDidUpdate _ dependency=props.smurfs.name
  React.useEffect(() => {
    props.getSmurfs(props.smurfs); //* onMount || onUpdate invoke the function to dispatch an action from the store (actions.js)
    // eslint-disable-next-line
  }, [props.smurfs.name]);

  //* if !props.smurfs = true, return "Loading..."
  if (!props.smurfs) return <p>Loading...</p>;
  //* else return SmurfList JSX
  return (
    <React.Fragment>
      <div>
        {props.smurfs.map((smurf, index) => (
          <Smurf smurf={smurf} key={index} />
        ))}
      </div>
    </React.Fragment>
  );
};

//* Mapping my State to Props
const mapStatetoProps = state => {
  return {
    smurfs: state.smurfs
  };
};

//* Using the Connect function to connect my component to the Redux Store & provides the function it can use to dispatch actions from the store
export default connect(
  mapStatetoProps,
  { getSmurfs }
)(SmurfList);
