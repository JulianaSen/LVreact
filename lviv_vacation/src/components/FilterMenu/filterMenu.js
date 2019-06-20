import React from 'react';
import ItemForCheck from './itemForCheck';
import ButtonFilter from './buttonFilter';






export default class FilterMenu extends React.Component {
  constructor(props) {
    super(props);
     
  }

  render() {
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
                <ItemForCheck content="Choose all"/>
                <ItemForCheck content="Hotel" />
                <ItemForCheck content="Motel" />
                <ItemForCheck content="Hostel" />
                <ItemForCheck content="Flat" />
            </div>
            <ButtonFilter checkedItems={this.state}/>
          </form>
        </div>
      </div>
    )
  }
}

