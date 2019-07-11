// import React from 'react';
// import Modal from 'react-modal';
// import {connect} from "react-redux";
// import { deleteUserChoice } from "../../actions/actionsData";

// Modal.setAppElement('#root');

// class Basket extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             deleting: false
//         };
//     }

//     handleDelete(id){
//       //set state for delete animation
//       this.setState(() => {
//           return {deleting: true};
//         });
//       console.log(this.state.deleting);
//       setTimeout(()=>this.props.dispatch(deleteUserChoice(id)), 1000);
//       setTimeout(()=>this.setState((state) => {
//           return {deleting: false};
//         }), 2000);
//     }

//     render () {
//       return (
//         <div>
//           <Modal 
//               isOpen={this.props.showModal}
//               contentLabel="Basket modal">
//               <div className="userCatalog">
//               <p className="nameOfBuilding">Your choice:</p>
//               <div className="hotels-offers">
//               {this.props.userItems.map(i => (
//                 <ItemOfCatalog key={i.id} id={i.id} description={i.description} destination={i.destination} smoking={i.smoking} WiFi={i.WiFi} 
//                 rating={i.rating} whatIsIt={i.whatIsIt} name={i.name} mobilePhone={i.mobilePhone} img={i.image} 
//                 handle={() => this.handleDelete(i.id)} deleting={this.state.deleting} selected={[this.props.deleting && 'is-delete'].join(' ')} classBtn="fa fa-close"/>     
//                 ))
//               }
//             </div>
            
//             <button className="filter-button" onClick={this.props.handleCloseModal}>Close</button><br />
//             </div>
//           </Modal>
//         </div>
//       );
//     }
//   }


import {connect} from "react-redux";
import React from 'react';
import Modal from 'react-modal';
import { WrapperComponent } from '../FilterMenu/filterMenu';
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 
Modal.setAppElement('#root')
 
class FilterMenuModal extends React.Component {
  constructor() {
    super();
 
    this.state = {
      modalIsOpen: false
    };
 
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
 
  openModal() {
    this.setState({modalIsOpen: true});
  }
 
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }
 
  render() {
    let FilterModalWindowOpen = "modal-window-filter-menu";
    let smallScreen = "small-screen";

    return (
      <div>
        {/* <button onClick={this.openModal}>Open Modal</button> */}
        <Modal
          isOpen={this.props.showFilterModal}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={() => this.props.showFilterModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

            <WrapperComponent showModalClass="showModalClass"/>
          <button onClick={this.props.closeFilterMenu} className="closeButtonFilterMenu"><i class="fas fa-times"></i></button>
        </Modal>
      </div>
    );
  }
}

export default FilterMenuModal;