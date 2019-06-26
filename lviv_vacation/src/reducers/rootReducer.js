import { combineReducers } from "redux";
import data from "./dataReducer";
import filter from './filterMenuReducer';
import click from './clickReducer'
//import forms from "./formReducer";
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  form : formReducer,
  // forms,
  data,
  filter,
  click
});