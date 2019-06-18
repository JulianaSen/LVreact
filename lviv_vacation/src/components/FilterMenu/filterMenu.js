import React from 'react';
import ItemForCheck from './itemForCheck';
import ButtonFilter from './buttonFilter';

export default class FilterMenu extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        all: false,
        hotel: false,
        motel: false,
        hostel: false,
        flat: false,
        
      }
  }

  // updateInfo = (value) => {
  //   if(value) {
  //     this.setState({all: true});
  //   } else {
  //     this.setState({all: false});
  //   }
    // console.log(value);
    // console.log(checkedAll);
    // this.setState(function(state, props) {
    //   state.chooise[Object.keys(value)[0]] = value[Object.keys(value)[0]];
      
    //   state.checkedAll = checkedAll;

    //   return state;

      
      
    // });
  // }

  isChecked = (value) => {
    // console.log(value);

    

    this.setState(function(state, props) {
      
      // let checkifAllChecked = (state) => {
      //   for(let key in state) {
      //     if(state[key] == false && key != "all") {
      //       // console.log(false);
      //       return false;
      //     } 
      //   }
      //   return true;
      //   // console.log(state);
      // }

      // console.log(value);
      if(value == "all" && state[value] == false) {
        let newState = Object.assign({}, state);
        for(let key in newState) {
          newState[key] = true;
        }
        return newState;
      } else if(value == "all" && state[value] == true) {
        let newState = Object.assign({}, state);
        for(let key in newState) {
          newState[key] = false;
        }
        return newState;
      }
      // console.log(checkifAllChecked(state));
      
      
      return {
        [value]: !state[value]
      }
    })
  }

  render() {
    let smallScreenClass = `preferences`;
    let checkAll;

    if(this.props.smallscreen) {
      smallScreenClass = `preferences ${this.props.smallscreen}`;
    }


    
    // console.log("render");
    // console.log(this.state.checkedAll);
    // 
    // if(this.state.checkedAll) {
    //   checkAll = true;
    // } else checkAll = "";
    // console.log(this.state);

    let checkifAllChecked = (state) => {
      for(let key in state) {
        if(state[key] == false && key != "all") {
          // console.log(false);
          return false;
        } 
      }
      return true;
      // console.log(state);
    }

   let chooseAll = false;
    if(checkifAllChecked(this.state)) {
      chooseAll  = true;
    } else {
      chooseAll = false;
    
    }


    console.log(this.state);
    return (
      <div className={smallScreenClass}>
        <div className="form-preferences">
          <form className="form" action="">
            <div className="form-container">
              <div className="check-item ">
                <legend className="choose-pref">Choose your preferences:</legend>
              </div>
                <ItemForCheck content="Choose all"  check="all"  isChecked={this.isChecked} checked={this.state.all || chooseAll}/>
                <ItemForCheck content="Hotel"  check="hotel"  isChecked={this.isChecked} checked={this.state.hotel || chooseAll}/>
                <ItemForCheck content="Motel"  check="motel"  isChecked={this.isChecked} checked={this.state.motel || chooseAll}/>
                <ItemForCheck content="Hostel"  check="hostel"  isChecked={this.isChecked} checked={this.state.hostel || chooseAll}/>
                <ItemForCheck content="Flat"  check="flat"  isChecked={this.isChecked} checked={this.state.flat || chooseAll}/>
            </div>
            <ButtonFilter checkedItems={this.state}/>
          </form>
        </div>
      </div>
    )
  }
}

