import {
  GET_SMURFS_START,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_FAIL,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAIL
} from "../actions";

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

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS_START:
      console.log(
        "%cReducer > getSmurfs_STARTING...",
        "color: orange; font-weight: bold;"
      );
      return {
        ...state,
        isGetting: true
      };
    case GET_SMURFS_SUCCESS:
      console.log(
        "%cReducer > getSmurfs_SUCCESSFUL!",
        "color: green; font-weight: bold;"
      );
      return {
        smurfs: action.payload,
        isGetting: false
      };
    case GET_SMURFS_FAIL:
      console.log(
        "%cReducer > getSmurfs_FAILURE!",
        "color: red; font-weight: bold;"
      );
      return {
        ...state,
        isGetting: false
      };
    case ADD_SMURF_START:
      console.log(
        "%cReducer > addSmurf_STARTING...",
        "color: orange; font-weight: bold;"
      );
      return {
        ...state,
        isPosting: true
      };
    case ADD_SMURF_SUCCESS:
      console.log(
        "%cReducer > addSmurf_SUCCESSFUL!",
        "color: green; font-weight: bold;"
      );
      return {
        smurfs: [...state.smurfs, action.payload],
        isPosting: false
      };
    case ADD_SMURF_FAIL:
      console.log(
        "%cReducer > addSmurf_FAILURE!",
        "color: red; font-weight: bold;"
      );
      return {
        ...state,
        isPosting: false
      };
    default:
      return state;
  }
};
