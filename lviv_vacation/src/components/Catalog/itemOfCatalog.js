import React from 'react';
import RatingStar from './rating';
import Description from './description';

export default class ItemOfCatalog extends React.Component {
  render() {
    return (
        <div className="hotel-container">
           <RatingStar />
            <div className="hotel">
              <div className="container-img container-img-hotels">
                <div className="additional-information">
                  <p>This restaurant is very famous its food, because it is very tasty.</p>
                </div>
              </div>
              <Description />
          </div>
        </div>
    )
  }
}