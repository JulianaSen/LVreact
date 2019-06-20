import { combineReducers } from "redux";
import data from "./dataReducer";
import forms from "./formReducer";

export default combineReducers({
  forms,
  data
});