import React from 'react';
import ItemOfCatalog from './itemOfCatalog';
import {connect} from "react-redux";
import { addUserChoice, addPrices, minusPrices } from "../../actions/actionsData";
import axios from 'axios';

class Catalog extends React.Component {
    postChoice(data) {
        let item = {'user_id': 1, 'content_id': data.id}
        axios
            .post("http://127.0.0.1:5000/api/basket/items", item)
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
            if(this.props.budget - (this.props.price + item.price) >= 0)
            {
                if(item.id === id && !alreadyAdded.has(id)){
                    this.postChoice(item);
                    this.props.addPrices();
                }
            } else {
                console.log("error");
            } 
        })
    }

    render() {
<<<<<<< HEAD
        // console.log(this.props.renderFilterItems);
        // console.log("frfrgrgr !!!!!!", this.props.filterItems == this.props.items);
      
        console.log("-----frgtg---->>>>",this.props.filterItems);
=======
>>>>>>> 3886af5ce470cd1dd732a508b0b2bde04f30f0b1
        return (
            <div className="hotels-offers">
                {console.log("here here here",this.props.filterItems)}
                {this.props.filterItems.map((p, index) => {
                    // console.log(p.wi_fi);
                        return <ItemOfCatalog key={p.id} description={p.description} destination={p.destination} 
<<<<<<< HEAD
                        smoking={p.smoking} WiFi={p.wi_fi} rating={p.rating} whatIsIt={p.whatIsIt} name={p.name}
                        mobilePhone={p.mobile_phone} img={p.image} price={p.price} handle={() => this.handleClick(p.id)} classBtn="fa fa-plus"/>
=======
                        smoking={p.smoking} WiFi={p.wi_fi} rating={p.rating} whatIsIt={p.type_content} name={p.name}
                        mobilePhone={p.mobilePhone} img={p.image} price={p.price} handle={() => this.handleClick(p.id)} classBtn="fa fa-plus"/>
>>>>>>> 3886af5ce470cd1dd732a508b0b2bde04f30f0b1
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
    checkFlat: state.filter.checkFlat,
    budget: state.form.budget,
    price: state.data.price
});

export default connect(mapStateToProps)(Catalog);