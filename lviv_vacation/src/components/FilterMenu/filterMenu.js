import React from 'react';
import ItemForCheck from './itemForCheck';
import ButtonFilter from './buttonFilter';
import { connect } from 'react-redux';



export default class FilterMenu extends React.Component {

  //  
  render() {
    console.log(this.props);
    let smallScreenClass = `preferences`;


    if(this.props.smallscreen) {
      smallScreenClass = `preferences ${this.props.smallscreen}`;
    }


   
    return (
      <div className={smallScreenClass}>
        <div className="form-preferences">
          <form className="form" action="">
            <div className="form-container">
              <div className="check-item ">
                <legend className="choose-pref">Choose your preferences:</legend>
              </div>
                <ItemForCheck content="Choose all"  check="all"/>
                <ItemForCheck content="Hotel"  check="hotel"/>
                <ItemForCheck content="Motel"  check="motel"/>
                <ItemForCheck content="Hostel"  check="hostel" />
                <ItemForCheck content="Flat"  check="flat" />
            </div>
            <ButtonFilter checkedItems={this.state}/>
          </form>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  console.log(state)
  return {
    test: 1
  }
}


const WrapperComponent = connect(mapStateToProps)(FilterMenu)
export {WrapperComponent};