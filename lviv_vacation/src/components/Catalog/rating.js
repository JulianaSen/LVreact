import React, {Component} from 'react';

function Star({
    value,
    color,
    handleHover,
    handleHoverLeave,
    handleClick,
    isFilled
  }) {
    return (
      <span
        className="Star"
        style={{ color }}
        onMouseEnter={() => handleHover(value)}
        onMouseLeave={() => handleHoverLeave(value)}
        onClick={() => handleClick(value)}
      >
        {isFilled ? "★" : "☆"}
      </span>
    );
  }

class Rating extends Component {
    static defaultProps = { max: 5 };
    constructor(props) {
      super(props);
      this.state = {
        dynamicValue: props.stars,
        value: 0
      };
      this._colors = {
        1: "#f44336",
        2: "#FF5722",
        3: "#FF9800",
        4: "#FFC107",
        5: "#FFEB3B"
      };
  
      this.handleClick = this.handleClick.bind(this);
      this.handleMouseEnter = this.handleMouseEnter.bind(this);
      this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }
    handleClick(newValue) {
      this.setState({
        value: newValue,
        dynamicValue: newValue
      });
    }
    handleMouseEnter(newValue) {
      this.setState({ dynamicValue: newValue });
    }
  
    handleMouseLeave(newValue) {
      this.setState({ dynamicValue: this.state.value });
    }
  
    render() {
      console.log(this.props.max)
      const { dynamicValue, value } = this.state;
      const starSpans = [];
      const max = this.props.max;
      let count = 0;
      for (let v = 1; v <= max; v++) {
        if (v <= dynamicValue) {
          count++;
        }
      }
      for (let v = 1; v <= max; v++) {
        starSpans.push(
          <Star
            key={v}
            color={this._colors[count]}
            isFilled={v <= dynamicValue}
            value={v}
            handleHover={this.handleMouseEnter}
            handleHoverLeave={this.handleMouseLeave}
            handleClick={this.handleClick}
          />
        );
      }
  
      return <div>{starSpans}</div>;
    }
  }
  
export default class RatingStar extends React.Component {
    render() {
        return (
            <div className="rating">
                 <Rating stars={0} />
            </div>
        )
    }
}





  // let checkifAllChecked = (state) => {
      //   for(let key in state) {
      //     if(state[key] == false && key != "all") {
      //       return false;
      //     } 
      //   }
      //   return true;
      // }



    //   if(value == "all" && state[value] == false) {
    //     let newState = Object.assign({}, state);
    //     for(let key in newState) {
    //       newState[key] = true;
    //     }
    //     return newState;
    //   }




//   isChecked = (value) => {
//     // console.log(value);
//     this.setState(function(state, props) {
      
    
    

//       // console.log(value);
     
      
//       return {
//         [value]: !state[value]
//       }
    
//     })

  
// }



// let checkifAllChecked = (state) => {
//     for(let key in state) {
//       if(state[key] == false && key != "all") {
//         // console.log(false);
//         return false;
//       } 
//     }
//     return true;
//     // console.log(state);
//   }