import React from 'react';

export default class Description extends React.Component {
    render() {
      let mobilePhone = null;
      let mobileField = null;
      let iconOfPhone = null;
      if(this.props.whatIsIt === "Flat") {
        mobilePhone = this.props.mobilePhone;
        mobileField = "Phone number";
        iconOfPhone = <i className="fa fa-mobile"></i> 
      }
        return (
            <div className="description ">
                <div className="name-hotel">
                  <p className="nameOfBuilding">{this.props.name}</p>
                  <p className="building">{this.props.whatIsIt}</p>
                </div>
                <div className="servises">
                  <div>
                    <p><i className="fa fa-map-marker"></i> Destination</p>
                    <p>{(this.props.whatIsIt === "Flat") ? null : "Smoking rm."}</p>
                    <p><i className="fa fa-wifi"></i> Wi-fi</p>
                    <p>{iconOfPhone} {mobileField}</p>
                  </div>
                  <div>
                    <p>{this.props.stName}</p>
                    {(this.props.isSmoking) ? <p><i className="fa fa-check-circle"></i></p> : (this.props.whatIsIt === "Flat") ? null : <p><i className="fa fa-times-circle"></i></p>} 
                    {(this.props.isWiFi) ? <p><i className="fa fa-check-circle"></i></p> : <p><i className="fa fa-times-circle"></i></p>}
                    <p className="mobile">{mobilePhone}</p>
                  </div>
                </div>
            </div>
        )
    }
}