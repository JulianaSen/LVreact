import React from 'react';

export default class ItemForCheck extends React.Component {
 
  render() {
    

    return (
      
      <div>
        <label className="check-item">
        <input type="checkbox" className="checkbox" onChange={() => { this.props.isChecked(this.props.check) }}  id="checkbox" checked={this.props.checked}/>
        <span className="styled-checkbox"></span>
        <span className="selection-point">{this.props.content}</span>
        </label>
      </div>
    )
  }
}

