import React from 'react';
import ItemOfCatalog from './itemOfCatalog';
import {connect} from "react-redux";
import { userService } from '../../services/userService'

class Catalog extends React.Component {


    handleClick(id){
        let alreadyAdded = new Set(this.props.userItems.map(i => i.id));
        this.props.items.map(item => {
                    if(item.id === id && !alreadyAdded.has(id)){
                        this.props.dispatch(userService.postChoice(item));
                    }
                }
        )
    }

    render() {
        // console.log(this.props.renderFilterItems);
        // console.log("frfrgrgr !!!!!!", this.props.filterItems == this.props.items);
      
        // console.log(this.props.items);
        return (
            <div className="hotels-offers">
                {console.log("here here here",this.props)}
                {this.props.filterItems.map((p, index) => {
                        return <ItemOfCatalog key={p.id} id = {p.id} description={p.description} destination={p.destination} 
                        smoking={p.smoking} WiFi={p.WiFi} rating={p.rating} whatIsIt={p.whatIsIt} name={p.name}
                        mobilePhone={p.mobilePhone} img={p.image}  handle={() => this.handleClick(p.id)} classBtn="fa fa-plus"/>
                    }
                )}
            </div>
        )
    }
}

// Map state to props for turning our items from db on props
const mapStateToProps = state => ({

    userItems: state.data.userItems,
    filterItems: state.data.filterItems,
    items: state.data.items,
    checkAll: state.filter.checkAll,
    checkHotel: state.filter.checkHotel,
    checkMotel: state.filter.checkMotel,
    checkHostel: state.filter.checkHostel,
    checkFlat: state.filter.checkFlat

});


export default connect(mapStateToProps)(Catalog);


// console.log(item)
// if(this.props.checkFlat && item.whatIsIt == "Flat") {
//     return item;
// } else if(this.props.checkFlat) {

// }