import React from 'react';
import FilterMenu from '../FilterMenu/filterMenu';
import Catalog from '../Catalog/Catalog'

export default class CatalogWithFilter extends React.Component{
  render() {
    return (
      <body class="mainContent">
        <div class="nav-container">
          <label class="burger-cont">
            <span></span>
            <input type="checkbox" class="hamburger" />
            <div class="nav-icon">
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
      </body>
        
    )
  }
}