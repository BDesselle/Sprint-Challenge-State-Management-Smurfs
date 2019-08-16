import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../store/actions";
import Smurf from "./Smurf";

const SmurfList = props => {
  useEffect(() => {
    props.getSmurfs(props.smurfs);
    // eslint-disable-next-line
  }, [props.smurfs.name]);

  if (!props.smurfs) return <p>Loading...</p>;
  return (
    <div>
      {props.smurfs.map((smurf, index) => (
        <Smurf smurf={smurf} key={index} />
      ))}
    </div>
  );
};

const mapStatetoProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(
  mapStatetoProps,
  { getSmurfs }
)(SmurfList);
