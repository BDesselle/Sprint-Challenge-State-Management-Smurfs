//* Importing my Action Types
import {
  GET_SMURFS_START,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_FAIL,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAIL
} from "../actions";

//* Defining my Initial State
const initialState = {
  smurfs: [],
  isGetting: false,
  isPosting: false,
  newSmurf: {
    name: "",
    age: "",
    height: ""
  }
};

//* Creating my reducer - takes in state which is assigned to initialState, and action
export const reducer = (state = initialState, action) => {
  //* Using a switch statement to select which block of code gets executed via action type
  switch (action.type) {
    //* GET_SMURFS_START
    case GET_SMURFS_START:
      console.log(
        "%cReducer > getSmurfs_STARTING...",
        "color: orange; font-weight: bold;"
      );
      console.log("%cThis is blue", "color: blue;");
      return {
        ...state, //* Spread State
        isGetting: true //* Toggle isGetting
      };
    //* GET_SMURFS_SUCCESS
    case GET_SMURFS_SUCCESS:
      console.log(
        "%cReducer > getSmurfs_SUCCESSFUL!",
        "color: green; font-weight: bold;"
      );
      return {
        smurfs: action.payload, //* Change State
        isGetting: false //* Toggle isGetting
      };
    //* GET_SMURFS_FAIL
    case GET_SMURFS_FAIL:
      console.log(
        "%cReducer > getSmurfs_FAILURE!",
        "color: red; font-weight: bold;"
      );
      return {
        ...state, //* Spread State
        isGetting: false //* Toggle isGetting
      };
    //* ADD_SMURF_START
    case ADD_SMURF_START:
      console.log(
        "%cReducer > addSmurf_STARTING...",
        "color: orange; font-weight: bold;"
      );
      return {
        ...state, //* Spread State
        isPosting: true //* Toggle isPosting
      };
    //* ADD_SMURF_SUCCESS
    case ADD_SMURF_SUCCESS:
      console.log(
        "%cReducer > addSmurf_SUCCESSFUL!",
        "color: green; font-weight: bold;"
      );
      return {
        smurfs: [...state.smurfs, action.payload], //* Change State
        isPosting: false //* Toggle isPosting
      };
    //* ADD_SMURF_FAIL
    case ADD_SMURF_FAIL:
      console.log(
        "%cReducer > addSmurf_FAILURE!",
        "color: red; font-weight: bold;"
      );
      return {
        ...state, //* Spread State
        isPosting: false //* Toggle isPosting
      };
    //* Default
    default:
      return state; //* Return State
  }
};
