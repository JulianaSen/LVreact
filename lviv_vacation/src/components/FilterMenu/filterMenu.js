import React from 'react';
import ItemForCheck from './itemForCheck';
import ButtonFilter from './buttonFilter';

export default class FilterMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chooise: {},
      checkedAll: false
    }
  }

  updateInfo = (value, checkedAll) => {
    
    this.setState(function(state, props) {
      state.chooise[Object.keys(value)[0]] = value[Object.keys(value)[0]];
      
      state.checkedAll = checkedAll;

      return state;

      
      
    });
  }



  render() {
    let smallScreenClass = `preferences`;
    let checkAll;

    if(this.props.smallscreen) {
      smallScreenClass = `preferences ${this.props.smallscreen}`;
    }
    // console.log("render");
    // console.log(this.state.checkedAll);
    
    if(this.state.checkedAll) {
      checkAll = true;
    } else checkAll = "";
    
    return (
      <div className={smallScreenClass}>
        <div className="form-preferences">
          <form className="form" action="">
            <div className="form-container">
              <div className="check-item ">
                <legend className="choose-pref">Choose your preferences:</legend>
              </div>
                <ItemForCheck  name={checkAll} content="Choose all" update={this.updateInfo}/>
                <ItemForCheck  name={checkAll} content="Hotel" update={this.updateInfo}/>
                <ItemForCheck  name={checkAll}  content="Motel" update={this.updateInfo}/>
                <ItemForCheck  name={checkAll}  content="Hostel" update={this.updateInfo}/>
                <ItemForCheck   name={checkAll} content="Flat" update={this.updateInfo}/>
            </div>
            <ButtonFilter stateButton={this.state.chooise}/>
          </form>
        </div>
      </div>
    )
  }
}