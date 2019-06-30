import React from 'react';
import RatingStar from './rating';
import Description from './description';

export default class ItemOfCatalog extends React.Component {
  render() {
    return (
        <div className="hotel-container">
           <RatingStar rating={this.props.rating}/>
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
        </div>
    )
  }
}