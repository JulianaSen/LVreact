import React from 'react';

export default class Description extends React.Component {
    render() {
        return (
            <div className="description ">
                <div className="name-hotel">
                  <p>restaurant 1</p>
                </div>
                <div className="servises">
                  <div>
                    <p><i className="fa fa-map-marker"></i> Destination</p>
                    <p>Smoking rm.</p>
                    <p><i className="fa fa-wifi"></i> Wi-fi</p>
                  </div>
                  <div>
                    <p>st. "Name"</p>
                    <p><i className="fa fa-check-circle"></i></p>
                    <p><i className="fa fa-check-circle"></i></p>
                  </div>
                </div>
            </div>
        )
    }
}