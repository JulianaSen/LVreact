import React from 'react';
import ItemOfCatalog from './itemOfCatalog';
import {connect} from "react-redux";

class Catalog extends React.Component {
    

  

    render() {

        console.log(this.props.renderFilterItems);

        // console.log(this.props.items);
        return (
            <div className="hotels-offers">
                {/* {console.log(this.props.items)} */}
                {this.props.items.filter((item) => {
                  
                 let ObjCheck = {
                    "Hotel": this.props.checkHotel,
                    "Flat": this.props.checkFlat,
                    "Motel": this.props.checkMotel,
                    "Hostel": this.props.checkHostel
                }                                                             
                    if(ObjCheck[item.whatIsIt]) {
                        return item;
                    } else if(this.props.checkAll) {
                        return item;
                    } else if(!this.props.checkFlat && !this.props.checkHostel && !this.props.checkHotel && !this.props.checkMotel) {
                        return item;
                    }          
                  
                })                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          


                .map((p, index) => {

                        return <ItemOfCatalog key={p.id} description={p.description} destination={p.destination} 
                        smoking={p.smoking} WiFi={p.WiFi} rating={p.rating} whatIsIt={p.whatIsIt} name={p.name}
                        mobilePhone={p.mobilePhone} />
                    }
                
                )}

                


            </div>
        )
    }
}

// Map state to props for turning our items from db on props
const mapStateToProps = state => ({

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