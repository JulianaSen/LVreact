import React from 'react';
import RatingStar from './rating';
import Description from './description';
import { connect } from 'react-redux';

class ItemOfCatalog extends React.Component {
  render() {
   
    return (
        <div className='hotel-container animation-enable'>
           <RatingStar rating={this.props.rating}/>
            <div className="hotel">
              <div className="container-img container-img-hotels">
                <div className="additional-information">
                  <p>{this.props.description}</p>
                <img src="../src/img/around.png" alt=""/>
                </div>
              </div>
              <Description id={this.props.id} stName={this.props.destination} isSmoking={this.props.smoking} isWiFi={this.props.WiFi}/>
          </div>
        </div>
    )
  }
}

const mapStateToProps = state => ({
  hotelClicked: state.click.clickedHotels,
  restClicked: state.click.clickedRestaraunts,
  entClicked: state.click.clickedEntertainment
});

export default connect(mapStateToProps)(ItemOfCatalog);