import React from 'react';
import Catalog from '../Catalog/Catalog';
import userCatalog from '../userChoice/userCatalog';
import Modal from 'react-modal';


Modal.setAppElement('#root');

export default class Basket extends React.Component {

    render () {
      return (
        <div>
          <Modal 
             isOpen={this.props.showModal}
             contentLabel="Basket modal"
          >
            <userCatalog />
            <button onClick={this.props.handleCloseModal}>Close Modal</button>
          </Modal>
        </div>
      );
    }
  }