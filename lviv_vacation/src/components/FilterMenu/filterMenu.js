import React from 'react';
import ItemForCheck from './itemForCheck';
import ButtonFilter from './buttonFilter';
import { connect } from 'react-redux';
import {changeCheckboxAll, changeCheckboxHotel, changeCheckboxMotel, changeCheckboxHostel, changeCheckboxFlat} from '../../actions/actionFilterMenu';



export default class FilterMenu extends React.Component {

  //  
  render() {
    const dispatch = this.props.dispatch;
    // console.log(this.props);
    let smallScreenClass = `preferences`;
  

    if(this.props.smallscreen) {
      smallScreenClass = `preferences ${this.props.smallscreen}`;
    }

    const {checkAll, checkFlat, checkHostel, checkHotel, checkMotel} = this.props;
   
    return (
      <div className={smallScreenClass}>
        <div className="form-preferences">
          <form className="form" action="">
            <div className="form-container">
              <div className="check-item ">
                <legend className="choose-pref">Choose your preferences:</legend>
              </div>
                <ItemForCheck content="Choose all" checked={checkAll} dispatch={dispatch} action={changeCheckboxAll}/>
                <ItemForCheck content="Hotel"  checked={checkHotel} dispatch={dispatch} action={changeCheckboxHotel}/>
                <ItemForCheck content="Motel"  checked={checkMotel} dispatch={dispatch} action={changeCheckboxMotel}/>
                <ItemForCheck content="Hostel" checked={checkHostel} dispatch={dispatch} action={changeCheckboxHostel}/>
                <ItemForCheck content="Flat" checked={checkFlat} dispatch={dispatch} action={changeCheckboxFlat}/>
            </div>
            <ButtonFilter checkedItems={this.state}/>
          </form>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {

  return {
    checkAll: state.filter.checkAll,
    checkHotel: state.filter.checkHotel,
    checkMotel: state.filter.checkMotel,
    checkHostel: state.filter.checkHostel,
    checkFlat: state.filter.checkFlat
    
  }
}


const WrapperComponent = connect(mapStateToProps)(FilterMenu)
export {WrapperComponent};