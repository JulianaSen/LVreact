import React from 'react';
import ItemForCheck from './itemForCheck';
import ButtonFilter from './buttonFilter';

export default class FilterMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chooise: []
    }
  }
 

  updateInfo = (value) => {
    this.setState(function(state, props) {

      this.state.chooise.push(value);

      
      // state.chooise.push(value);
      
      // state.chooise.forEach((element, index) => {
      //   if(element.establish == value.establish) {
      //     state.chooise[index] = value;
      //   }
      // });
      // console.log(this.state);

    });
  }

  render() {
    let smallScreenClass = `preferences`;

    if(this.props.smallscreen) {
      smallScreenClass = `preferences ${this.props.smallscreen}`;
    }

    return (
      <div className={smallScreenClass} >
        <div className="form-preferences">
          <form className="form" action="">
            <div className="form-container">
              <div className="check-item ">
                <legend className="choose-pref">Choose your preferences:</legend>
              </div>
              <ItemForCheck content="Choose all" update={this.updateInfo}/>
              <ItemForCheck content="Hotel" update={this.updateInfo}/>
              <ItemForCheck content="Motel" update={this.updateInfo}/>
              <ItemForCheck content="Hostel" update={this.updateInfo}/>
              <ItemForCheck content="Flat" update={this.updateInfo}/>
            </div>
            <ButtonFilter />
          </form>
        </div>
      </div>
      
    )
  }
}