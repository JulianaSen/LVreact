import React from 'react';
import FilterMenu from '../FilterMenu/filterMenu';
import Catalog from '../Catalog/Catalog';
// import { store } from '../../actions/actionFilterMenu';
import { WrapperComponent } from '../FilterMenu/filterMenu'


export default class CatalogWithFilter extends React.Component{
  render() {
    // console.log(this.props);
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
            <WrapperComponent smallscreen="small-screen"/>
        </div>
          
        <main className="main-container">
          <div className="wave-block">
            <WrapperComponent />
            <Catalog />
          </div>
        </main>
      </div>
        
    )
  }
}