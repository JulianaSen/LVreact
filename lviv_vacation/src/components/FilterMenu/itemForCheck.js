import React from 'react';

export default class ItemForCheck extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
      // [this.props.content]: true,
      
      //  [this.props.check]: false,
      
    // };  

  }
  
 

    // this.setState({
      // [this.props.content]: !this.state[this.props.content]
    // });
    
    // if(this.state['Choose all']) {
    //   this.state.checkedAll = true;
    // } else {
    //   this.state.checkedAll = false;
    // }
    // this.props.update(this.state, this.state.checkedAll);

  

  render() {
    // console.log(this.state);
    // console.log(this.props.checkedAll)
    // console.log(this.props.name);

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

