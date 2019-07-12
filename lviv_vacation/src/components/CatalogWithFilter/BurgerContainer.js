import React, {Component} from 'react';
import userCatalog from '../userChoice/userCatalog'
import basket from "../../img/basket.png";

class BurgerContainer extends Component{
    render() {

       

        return (
        <div className="burger-cont">
            {/* <span></span> */}
            {/* <input type="checkbox" className="hamburger" onClick={this.props.clickBurger}/> */}
            <button onClick={this.props.clickBurger} className="showFilterMenu"><i class="fas fa-sliders-h"></i></button>
            {/* <button>jhjhjhjjhjjhjkgtmbk</button> */}
            
            {this.props.loggedIn && 
                <div className="align-basket">
                  <div className="basket" onClick={this.props.handleOpenModal}>
                    {/* <img src={basket} alt="basket"/> */}
                    <i class="fas fa-shopping-basket"></i>
                    <div className="counter"><p>{this.props.amntUsers}</p></div>
                  </div>
                </div>}
               
            {/* <div className="nav-icon">
              <div></div>
            </div> */}
        </div>
        )

        
    }
}


export default BurgerContainer;