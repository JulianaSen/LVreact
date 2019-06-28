import React from 'react';
import ItemOfCatalog from './itemOfCatalog';
import {connect} from "react-redux";

class Catalog extends React.Component {


    render() {
        return (
            <div className="hotels-offers">
                {this.props.userItems.map((p) => (
                        <ItemOfCatalog key={p.id} id={p.id} description={p.description} destination={p.destination} smoking={p.smoking} WiFi={p.WiFi} rating={p.rating}/>      
                ))
                }
               
            </div>
        )
    }
}

// Map state to props for turning our items from db on props
const mapStateToProps = state => ({
    userItems: state.data.userItems
});

export default connect(mapStateToProps)(Catalog);
