import React from 'react';
import Catalog from '../Catalog/Catalog';
import userCatalog from './userCatalog';
import Modal from 'react-modal';
import {connect} from "react-redux";
import ItemOfCatalog from '../Catalog/itemOfCatalog';
import { deleteUserChoice } from "../../actions/actionsData";

Modal.setAppElement('#root');

class Basket extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            deleting: false
        };
    }

    handleDelete(id){
      //set state for delete animation
      this.setState(() => {
          return {deleting: true};
        });
      console.log(this.state.deleting);
      setTimeout(()=>this.props.dispatch(deleteUserChoice(id)), 1000);
      setTimeout(()=>this.setState((state) => {
          return {deleting: false};
        }), 2000);
    }

    render () {
      return (
        <div>
          <Modal 
              isOpen={this.props.showModal}
              contentLabel="Basket modal">
              <div className="userCatalog">
              <div className="hotels-offers">
              <p className="nameOfBuilding">Your choice:</p>
              {this.props.userItems.map(i => (
                <ItemOfCatalog key={i.id} id={i.id} description={i.description} destination={i.destination} smoking={i.smoking} WiFi={i.WiFi} 
                rating={i.rating} whatIsIt={i.whatIsIt} name={i.name} mobilePhone={i.mobilePhone} imgUrl={i.img} 
                handle={() => this.handleDelete(i.id)} deleting={this.state.deleting} selected={[this.props.deleting && 'is-delete'].join(' ')} classBtn="fa fa-close"/>     
                ))
              }
            </div>
            
            <button className="filter-button" onClick={this.props.handleCloseModal}>Close</button><br />
            </div>
          </Modal>
        </div>
      );
    }
  }

  const mapStateToProps = state => ({
    userItems: state.data.userItems
});

export default connect(mapStateToProps)(Basket);