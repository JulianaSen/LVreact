import React from 'react';
import RatingStar from './rating';
import Description from './description';
import { connect } from 'react-redux';
import { addUserChoice } from "../../actions/actionsData";

class ItemOfCatalog extends React.Component {


  handleClick(id){
    let alreadyAdded = new Set(this.props.userItems.map(i => i.id));
    this.props.items.map(item => {
                console.log(alreadyAdded)
                if(item.id === id && !alreadyAdded.has(id)){
                    this.props.dispatch(addUserChoice(item));
                }
            }
    )
}


  render() {
   
    return (
        <div className='hotel-container animation-enable' onClick={() => this.handleClick(this.props.id)}>
           <RatingStar key={this.props.id} rating={this.props.rating}/>
            <div className="hotel">
              <div className="container-img container-img-hotels">
                <div className="additional-information">
                  <p>{this.props.description}</p>
                <img src="../src/img/around.png" alt=""/>
                </div>
              </div>
              <Description key={this.props.id} stName={this.props.destination} isSmoking={this.props.smoking} isWiFi={this.props.WiFi}/>
          </div>
        </div>
    )
  }
}

const mapStateToProps = state => ({
  userItems: state.data.userItems,
  items: state.data.items
});

export default connect(mapStateToProps)(ItemOfCatalog);