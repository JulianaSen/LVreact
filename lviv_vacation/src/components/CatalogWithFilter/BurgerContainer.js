import React, {Component} from 'react';

class BurgerContainer extends Component{
    render() {
        return (
        <label className="burger-cont">
            <span></span>
            <input type="checkbox" className="hamburger" onChange={this.props.clickBurger}/>
            <div className="nav-icon">
              <div></div>
            </div>
        </label>
        
        )
    }
}


export default BurgerContainer;