import { combineReducers } from "redux";

const CountReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const EditReducer = (state = false, action) => {
  switch (action.type) {
    case "EDIT_COUNT":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({ count: CountReducer, edit: EditReducer });
