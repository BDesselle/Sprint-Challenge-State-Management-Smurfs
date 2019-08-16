import axios from "axios";

export const GET_SMURFS_START = "GET_SMURFS_START";
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS";
export const GET_SMURFS_FAIL = "GET_SMURFS_FAIL";
export const ADD_SMURF_START = "ADD_SMURF_START";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAIL = "ADD_SMURF_FAIL";

export const getSmurfs = () => dispatch => {
  dispatch({ type: GET_SMURFS_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data });
      console.log(
        "%cAction > getSmurfs_SUCCESSFUL!",
        "color: green; font-weight: bold;"
      );
    })
    .catch(err => {
      dispatch({ type: GET_SMURFS_FAIL, payload: err });
      console.log(
        "%cAction > getSmurfs_FAILURE!",
        "color: red; font-weight: bold;"
      );
      console.log(err);
    });
};

export const addSmurf = newSmurf => dispatch => {
  dispatch({ type: ADD_SMURF_START });
  axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then(res => {
      dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data });
      console.log(
        "%cAction > addSmurf_SUCCESSFUL!",
        "color: green; font-weight: bold;"
      );
      console.log(
        "%cAction > getSmurfs_UPDATING... ",
        "color: blue; font-weight: bold;"
      );
      dispatch(getSmurfs());
    })
    .catch(err => {
      dispatch({ type: ADD_SMURF_FAIL, payload: err });
      console.log(
        "%cAction > addSmurf_FAILURE!",
        "color: red; font-weight: bold;"
      );
      console.log(err);
    });
};
