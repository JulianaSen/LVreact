import React from 'react';
import ItemOfCatalog from './itemOfCatalog';
import {connect} from "react-redux";
import { addUserChoice } from "../../actions/actionsData";
import axios from 'axios';

class Catalog extends React.Component {

    postChoice(route, data) {
        axios
            .post(route, data)
            .then(res => {
                console.log(res)
                this.props.dispatch(addUserChoice(data));
            })
            .catch(error => {
                console.log(error)
            })
    
    }

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
        return (
            <div className="hotels-offers">
                {this.props.items.map((p) => (
                    <ItemOfCatalog  key={p.id} id={p.id} description={p.description} destination={p.destination} smoking={p.smoking} WiFi={p.WiFi} rating={p.rating} addEvent={() => this.handleClick(p.id)}/> 
                ))
                }
               
            </div>
        )
    }
}

// Map state to props for turning our items from db on props
const mapStateToProps = state => ({
    items: state.data.items,
    userItems: state.data.userItems
});

export default connect(mapStateToProps)(Catalog);
