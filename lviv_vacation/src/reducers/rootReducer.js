import { combineReducers } from "redux";
import data from "./dataReducer";
import filter from './filterMenuReducer';
<<<<<<< HEAD:lviv_vacation/src/reducers/rootReducer.js
import click from './clickReducer'
=======
>>>>>>> e725dceade7c05b429720ea21f87a082a7bbcd48:lviv_vacation/src/components/reducers/rootReducer.js
import forms from "./formReducer";

export default combineReducers({
  forms,
  data,
  filter,
  click
});