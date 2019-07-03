import React from 'react';
import FilterMenu from '../FilterMenu/filterMenu';
import Catalog from '../Catalog/Catalog';
// import { store } from '../../actions/actionFilterMenu';
import { WrapperComponent } from '../FilterMenu/filterMenu';
import BurgerContainer from './BurgerContainer';
import basket from "../../img/basket.png";
import { connect } from 'react-redux';
import Basket from "../userChoice/modal";

class CatalogWithFilter extends React.Component {

    constructor () {
      super();

      //state for show and hide modal window
      this.state = {
        showModal: false
      };
      
      //bind function for changing modal state
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal () {
      this.setState({ showModal: true });
    }

    handleCloseModal () {
      this.setState({ showModal: false });
    }

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
        classNameFilterMenu = "main-container";
        navContainerClass = "nav-container";
      }
      
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
          <div className={navContainerClass}>
            <BurgerContainer clickBurger={this.drawerToggleClickHandler}/>;
            {showFilterMenu}
          </div>
            
          <main className={classNameFilterMenu}>
            <div className="wave-block">
            <WrapperComponent />
              <Catalog />
              
              {/* Basket button */}
                {this.props.loggedIn && <div className="align-basket">
                  <div className="basket" onClick={this.handleOpenModal}>
                    <img src={basket}/>
                    <div className="counter"><p>{this.props.userItems.length}</p></div>
                  </div>
                </div>
                }

            </div>
          </main>
          <Basket showModal={this.state.showModal} handleCloseModal={this.handleCloseModal}/>
        </div>
      )
    }
}

const mapStateToProps = state => ({
  userItems: state.data.userItems,
  loggedIn : state.authentication.loggedIn
});

export default connect(mapStateToProps)(CatalogWithFilter);