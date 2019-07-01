import React from 'react';
import ItemOfCatalog from './itemOfCatalog';
import {connect} from "react-redux";
import { addUserChoice } from "../../actions/actionsData";
import axios from 'axios';

class Catalog extends React.Component {

    // postChoice(route, data) {
    //     axios
    //         .post(route, data)
    //         .then(res => {
    //             console.log(res)
    //             this.props.dispatch(addUserChoice(data));
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    
    // }

    handleClick(id){
        let alreadyAdded = new Set(this.props.userItems.map(i => i.id));
        this.props.items.map(item => {
                    if(item.id === id && !alreadyAdded.has(id)){
                        this.props.dispatch(addUserChoice(item));
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
                {this.props.items.map((p, index) => {

                        return <ItemOfCatalog key={p.id} description={p.description} destination={p.destination} 
                        smoking={p.smoking} WiFi={p.WiFi} rating={p.rating} whatIsIt={p.whatIsIt} name={p.name}
                        mobilePhone={p.mobilePhone} imgUrl={p.img}  handle={() => this.handleClick(p.id)}/>
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