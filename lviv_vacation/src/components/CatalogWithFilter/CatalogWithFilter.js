import React from 'react';
import FilterMenu from '../FilterMenu/filterMenu';
import Catalog from '../Catalog/Catalog';
import { Provider } from 'react-redux';
// import { store } from '../../actions/actionFilterMenu';
import { WrapperComponent } from '../FilterMenu/filterMenu'
import {store} from "../../index";
import BurgerContainer from './BurgerContainer'


export default class CatalogWithFilter extends React.Component {


  state = {
    drawerOpen: false
  }

  drawerToggleClickHandler = () => {
    this.setState(function(prevState) {
      return {drawerOpen: !prevState.drawerOpen};
    })
  };



  render() {

    let showFilterMenu = null;
    let classNameFilterMenu = "delete-margin";
    let navContainerClass = "nav-cont-without-filter-menu";
    if(this.state.drawerOpen) {
      showFilterMenu = <Provider store={store}><WrapperComponent smallscreen="small-screen"/></Provider>
      classNameFilterMenu = "main-container";
      navContainerClass = "nav-container";
    }
    
    return (
      <div className="mainContent">

        <div className={navContainerClass}>
          <BurgerContainer clickBurger={this.drawerToggleClickHandler}/>;
          {showFilterMenu}
        </div>
          
        <main className={classNameFilterMenu}>
          <div className="wave-block">
           <Provider store={store}><WrapperComponent /></Provider>
            <Catalog />
          </div>
        </main>
      </div>

    )
  }
}