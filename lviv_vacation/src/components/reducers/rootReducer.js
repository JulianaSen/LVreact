import { combineReducers } from "redux";
import data from "./dataReducer";
import filter from './filterMenuReducer';
import forms from "./formReducer";
import filterItemsReducer from "./filterItemsReducer";

export default combineReducers({
  forms,
  data,
  filter,
  filterItemsReducer
});