import React from 'react';
import RatingStar from './rating';
import Description from './description';
import { connect } from 'react-redux';

class ItemOfCatalog extends React.Component {

  render() {
    return (
        <div className='hotel-container animation-enable'>
           <RatingStar key={this.props.id} rating={this.props.rating}/>
            <div className="hotel">
              <div className="container-img container-img-hotels">
                <div className="additional-information">
                  <p>{this.props.description}</p>
                </div>
                <img src={this.props.imgUrl} className="test" alt=""/>
              </div>


              <Description id={this.props.id} stName={this.props.destination} 
              isSmoking={this.props.smoking} isWiFi={this.props.WiFi} 
              whatIsIt={this.props.whatIsIt} name={this.props.name}
              mobilePhone={this.props.mobilePhone}/>

          </div>

          {this.props.loggedIn && <div className='btn-user'>
            <button className={this.props.classBtn} onClick={this.props.handle}></button>
          </div>}

        </div>
    )
  }
}

const mapStateToProps = state => ({
  userItems: state.data.userItems,
  items: state.data.items,
  loggedIn: state.authentication.loggedIn
});

export default connect(mapStateToProps)(ItemOfCatalog);