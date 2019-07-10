import React from 'react';
import { connect } from 'react-redux';
class ButtonFilter extends React.Component {
constructor(props) {
  super(props);

  this.clickButtonFilter = this.clickButtonFilter.bind(this);
}
 

  clickButtonFilter(e) {
    e.preventDefault();
    // console.log(this.props.filterCatalog());
    // console.log(this.props);
    // this.props.filterCatalog(this.pr);
    // console.log(this.props.dispach);
    console.log( "---------------------button---->>>>>", this.props);
    this.props.filterCheck(this.props);
    this.props.filterByPrice(this.props);
  }


  render() {
    // console.log("update");
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
    items: state.data.items,
    filterItems: state.data.filterItems,
    clickedHotels: state.click.clickedHotels,
    clickedEntertainment: state.click.clickedEntertainment,
    clickedRestaraunts: state.click.clickedRestaraunts,
    checkByIncrease: state.filter.checkByIncrease,
    checkByDecrease: state.filter.checkByDecrease

    // checkAll: state.filter.checkAll,
    // checkHotel: state.filter.checkHotel,
    // checkMotel: state.filter.checkMotel,
    // checkHostel: state.filter.checkHostel,
    // checkFlat: state.filter.checkFlat
  }
}

// const mapDispachToProps = dispach => {
//   return {
//     filterCatalog: (checkItems) => dispach({
//       type: 'FILTERITEMS',
//       checkItems: checkItems
//     })
//   }
// }

// const filterCheckedItems = () => {
//   return (dispach, getState) => {
//     let status = getState();
//       return dispach({
//       type: 'FILTER_ITEMS',
//       status: status
//     });
//   }
// }

let mapDispachToProps = (dispach) => {
  // return {
  //   filterCheck: (value) => {
  //     dispach(filterCheckedItems())
  //   }
  // }
    return {
      filterCheck: (value) => {
        dispach({
          type: "FILTER_ITEMS",
          value: value
        });
      },

      filterByPrice: (value) => {
        dispach({
          type: "FILTER_BY_PRICE",
          value: value
        });
      }
    }
}


export default connect(mapStateToProps, mapDispachToProps)(ButtonFilter);