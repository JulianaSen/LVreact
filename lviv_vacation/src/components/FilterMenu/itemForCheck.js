import React from 'react';

export default class ItemForCheck extends React.Component {
  constructor(props) {
    super(props);
    
  }
  

  render() {
    return (
      <div>
        <label className="check-item">
        <input type="checkbox" className="checkbox" id="checkbox" />
        <span className="styled-checkbox"></span>
        <span className="selection-point">{this.props.content}</span>
        </label>
      </div>
    )
  }
}