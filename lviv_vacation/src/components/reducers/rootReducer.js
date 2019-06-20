import { combineReducers } from "redux";
import data from "./dataReducer";
import filter from './filterMenuReducer';

export default combineReducers({
  data,
  filter
});