import axios from "axios";

//* Instantiating & Exporting my Action Types
export const GET_SMURFS_START = "GET_SMURFS_START";
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS";
export const GET_SMURFS_FAIL = "GET_SMURFS_FAIL";
export const ADD_SMURF_START = "ADD_SMURF_START";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAIL = "ADD_SMURF_FAIL";

//* ACTION CREATORS
//* getSmurfs function which is invoked by a UI Event
export const getSmurfs = () => dispatch => {
  dispatch({ type: GET_SMURFS_START }); //* Dispatches the Action - GET_SMURFS_START
  axios
    .get("http://localhost:3333/smurfs") //* GET Request via Axios
    .then(res => {
      //* THEN >
      dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data }); //* Dispatches the Action - GET_SMURFS_SUCCESS with res.data as the Payload
    })
    .catch(err => {
      //* CATCH >
      dispatch({ type: GET_SMURFS_FAIL, payload: err }); //* Dispatches the Action - GET_SMURFS_FAIL with err as the Payload
      console.log(
        "%cAction > getSmurfs_FAILURE!",
        "color: red; font-weight: bold;"
      );
      console.log(err);
    });
};

//* addSmurf function which is invoked by a UI Event
export const addSmurf = newSmurf => dispatch => {
  dispatch({ type: ADD_SMURF_START }); //* Dispatches the Action - ADD_SMURF_START
  axios
    .post("http://localhost:3333/smurfs", newSmurf) //* POST Request via Axios with newSmurf being the data that is posted
    .then(res => {
      //* THEN >
      dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data }); //* Dispatches the Action - ADD_SMURF_SUCCESS with res.data as the Payload
      dispatch(getSmurfs()); //* Dispatches the Function - getSmurfs to asynchronously re-render after changing(adding to) the database
    })
    .catch(err => {
      //* CATCH >
      dispatch({ type: ADD_SMURF_FAIL, payload: err }); //* Dispatches the Action - ADD_SMURF_FAIL with err as the Payload
      console.log(
        "%cAction > addSmurf_FAILURE!",
        "color: red; font-weight: bold;"
      );
      console.log(err);
    });
};
