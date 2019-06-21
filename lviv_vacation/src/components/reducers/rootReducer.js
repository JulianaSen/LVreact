import { combineReducers } from "redux";
import data from "./dataReducer";
import filter from './filterMenuReducer';
import forms from "./formReducer";

export default combineReducers({
  forms,
  data,
  filter
});