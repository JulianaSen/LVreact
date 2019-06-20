import React from 'react';

export default class Description extends React.Component {
    render() {

        return (
            <div className="description ">
                <div className="name-hotel">
                  <p>hotel</p>
                </div>
                <div className="servises">
                  <div>
                    <p><i className="fa fa-map-marker"></i> Destination</p>
                    <p>Smoking rm.</p>
                    <p><i className="fa fa-wifi"></i> Wi-fi</p>
                  </div>
                  <div>
                    <p>{this.props.stName}</p>
                    {this.props.isSmkoing && <p><i className="fa fa-check-circle"></i></p>}
                    {this.props.isWiFi && <p><i className="fa fa-check-circle"></i></p>}
                  </div>
                </div>
            </div>
        )
    }
}