import React from 'react';
import ItemOfCatalog from './itemOfCatalog';
import {connect} from "react-redux";


class Catalog extends React.Component {
    render() {
        return (
            <div className="hotels-offers">

                {/* {console.log(this.props.items)} */}
                {this.props.items.map((p) => (
                    <ItemOfCatalog key={p.id} description={p.description} destination={p.destination} smoking={p.smoking} WiFi={p.WiFi} rating={p.rating} whatIsIt={p.whatIsIt} name={p.name}/>
                ))
                }
               
            </div>
        )
    }
}

// Map state to props for turning our items from db on props
const mapStateToProps = state => ({
    items: state.data.items
});

export default connect(mapStateToProps)(Catalog);
