import React from 'react';

export default class ItemForCheck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true,
      establish: this.props.content
    };

  }
  
  isChecked() {
    this.setState({
      checked: !this.state.checked
    });

    // console.log(this.state.checked, this.state.establish);
  }

  render() {
    return (
      <div>
        <label className="check-item">
        <input type="checkbox" onChange={() => {this.isChecked(); this.props.update(this.state)}} className="checkbox" id="checkbox" />
        <span className="styled-checkbox"></span>
        <span className="selection-point">{this.props.content}</span>
        </label>
      </div>
    )
  }
}