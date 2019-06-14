import React from 'react';

export default class ItemForCheck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      [this.props.content]: true,
      
    };

  }
  
  isChecked() {
    this.setState({
      [this.props.content]: !this.state[this.props.content]
    });
    
    if(this.state['Choose all']) {
      this.state.checkedAll = true;
    } else {
      this.state.checkedAll = false;
    }
    this.props.update(this.state, this.state.checkedAll);

  }

  render() {
    // console.log(this.props.checkedAll)
    console.log(this.props.name);
    
    return (
      
      <div>
        <label className="check-item">
        <input type="checkbox" onChange={() => {this.isChecked() }} className="checkbox"  defaultChecked={this.props.name} id="checkbox" />
        <span className="styled-checkbox"></span>
        <span className="selection-point">{this.props.content}</span>
        </label>
      </div>
    )
  }
}