import React from 'react';
import FilterMenu from '../FilterMenu/filterMenu';
import Catalog from '../Catalog/Catalog'

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
          <FilterMenu smallscreen="small-screen"/>
        </div>
          
        <main className="main-container">
          <div className="wave-block">
            <FilterMenu />
            <Catalog />
          </div>
        </main>
      </div>
        
    )
  }
}