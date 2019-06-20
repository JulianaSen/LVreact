import React from 'react';
import FilterMenu from '../FilterMenu/filterMenu';
import Catalog from '../Catalog/Catalog';
import { Provider } from 'react-redux';
// import { store } from '../../actions/actionFilterMenu';
import { WrapperComponent } from '../FilterMenu/filterMenu'
import {store} from "../../index";


export default class CatalogWithFilter extends React.Component{
  render() {
    return (
      <div className="mainContent">
        <div className="nav-container">
          <label className="burger-cont">
            <span></span>
            <input type="checkbox" className="hamburger" />
            <div className="nav-icon">
              <div></div>
            </div>
          </label>
          <Provider store={store}><WrapperComponent smallscreen="small-screen"/></Provider>
        </div>
          
        <main className="main-container">
          <div className="wave-block">
           <Provider store={store}><WrapperComponent /></Provider>
            <Catalog />
          </div>
        </main>
      </div>
        
    )
  }
}