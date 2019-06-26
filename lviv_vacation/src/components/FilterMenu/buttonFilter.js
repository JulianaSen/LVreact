import React from 'react';
import { connect } from 'react-redux';
class ButtonFilter extends React.Component {
constructor(props) {
  super(props);

  this.clickButtonFilter = this.clickButtonFilter.bind(this);
}
 

  clickButtonFilter(e) {
    e.preventDefault();
    console.log(this.props);
  }

  render() {
    console.log("cdfrvrvrrvr",this.props);
    // console.log(this.props);

    return (
        <div className="check-item filter-button-container" >
            <input type="submit" value="Filter" className="filter-button" onClick={this.clickButtonFilter}/>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return   {
    items: state.data.items
  }
}

export default connect(mapStateToProps)(ButtonFilter);