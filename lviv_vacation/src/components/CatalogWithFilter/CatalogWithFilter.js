import React from 'react';
import FilterMenu from '../FilterMenu/filterMenu';
import Catalog from '../Catalog/Catalog';
// import { store } from '../../actions/actionFilterMenu';
import { WrapperComponent } from '../FilterMenu/filterMenu';
import BurgerContainer from './BurgerContainer';
import basket from "../../img/basket.png";
import { connect } from 'react-redux';
import Basket from "../userChoice/modal";
import FilterMenuModal from '../FilterMenu/modalWindowFilter';

class CatalogWithFilter extends React.Component {

    constructor () {
      super();

      //state for show and hide modal window
      this.state = {
        showModal: false,
        drawerOpen: false,
        closeBurger: false
      };
      
      //bind function for changing modal state
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal = () => {
      this.setState({ showModal: true });
    }

    handleCloseModal = () => {
      this.setState({ showModal: false });
    }

   

    drawerToggleClickHandler = () => {
      this.setState(function(prevState) {
        return {
          drawerOpen: !prevState.drawerOpen,
          closeBurger: !prevState.closeBurger
          };
      })
    };

    closeFilterMenu = () => {
      this.setState(function(prevState) {
        return {
          drawerOpen: !prevState.drawerOpen,
          closeBurger: !prevState.closeBurger
        }
      });
    }

    render() {
      let classNameFilterMenu = "delete-margin";
      let smallScreen = "small-screen";
      // let navContainerClass = "nav-cont-without-filter-menu";
      let FilterModalWindowOpen = "";
      if(!this.state.drawerOpen) {
        classNameFilterMenu = "main-container";
        FilterModalWindowOpen = "modal-window-filter-menu";
        smallScreen = "small-screen";
        
      }
      
      return (
        <div className="mainContent">
         
          {/* <div className={navContainerClass}>
            <BurgerContainer clickBurger={this.drawerToggleClickHandler}/>
            
          </div> */}
          <BurgerContainer clickBurger={this.drawerToggleClickHandler} closeBurger={this.state.closeBurger} 
            loggedIn={this.props.loggedIn} handleOpenModal={this.handleOpenModal} amntUsers={this.props.userItems.length}
          />
      
          <FilterMenuModal showFilterModal={this.state.drawerOpen} closeFilterMenu={this.closeFilterMenu}/>
          <div className={FilterModalWindowOpen}>
            <WrapperComponent smallscreen={smallScreen}/>
          </div>
          <main className={classNameFilterMenu}>
            <div className="wave-block">
            <WrapperComponent />
              <Catalog />
              
{/*             
                {this.props.loggedIn && 
                <div className="align-basket">
                  <div className="basket" onClick={this.handleOpenModal}>
                    <img src={basket} alt="basket"/>
                    <div className="counter"><p>{this.props.userItems.length}</p></div>
                  </div>
                </div>} */}
                

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