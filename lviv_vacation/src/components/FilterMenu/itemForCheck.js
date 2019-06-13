import React from 'react';

export default class ItemForCheck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    };
    this.isChecked = this.isChecked.bind(this)
  }
  
  isChecked() {
    console.log(this);
  }

  render() {
    return (
      <div>
        <label className="check-item">
        <input type="checkbox" onChange={this.isChecked} className="checkbox" id="checkbox" />
        <span className="styled-checkbox"></span>
        <span className="selection-point">{this.props.content}</span>
        </label>
      </div>
    )
  }
}