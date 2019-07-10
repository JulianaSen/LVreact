import React from 'react';
import Modal from 'react-modal';
import {connect} from "react-redux";
import ItemOfCatalog from '../Catalog/itemOfCatalog';
import {handleDelete} from './deleteChoice'
import userCatalog from './userCatalog'

Modal.setAppElement('#root');

class Basket extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            deleting: false
        };
    }

    render () {
      return (
        <div>
          <Modal 
              isOpen={this.props.showModal}
              contentLabel="Basket modal">
              <div className="userCatalog">
              {/* <div className="hotels-offers">
              <p className="nameOfBuilding">Your choice:</p>
              {this.props.userItems.map(i => (
                <ItemOfCatalog key={i.id} id={i.id} description={i.description} destination={i.destination} smoking={i.smoking} WiFi={i.WiFi} 
                rating={i.rating} whatIsIt={i.whatIsIt} name={i.name} mobilePhone={i.mobilePhone} imgUrl={i.imgage} 
                handle={() => handleDelete(i.id)} deleting={this.state.deleting} selected={[this.props.deleting && 'is-delete'].join(' ')} classBtn="fa fa-close"/>     
                ))
              }
            </div> */}

            <userCatalog />
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