import React from 'react';

export default class FilterMenu extends React.Component {
  render() {
    return (
      <div className="preferences">
        <div className="form-preferences">
          <form className="form" action="">
            <div className="form-container">
              <div className="check-item ">
                <legend className="choose-pref">Choose your preferences:</legend>
              </div>
              <div>
                <label className="check-item">
                  <input type="checkbox" className="checkbox" id="checkbox" />
                  <span className="styled-checkbox"></span>
                  <span className="selection-point">Choose all</span>
              </label>
              </div>
              <div>
                <label className="check-item">
                  <input type="checkbox" className="checkbox" id="checkbox" />
                  <span className="styled-checkbox"></span>
                  <span className="selection-point">Hotel</span>
              </label>
              </div>
              <div>
                <label className="check-item">
                  <input type="checkbox" className="checkbox" id="checkbox" />
                  <span className="styled-checkbox"></span>
                  <span className="selection-point">Motel</span>
              </label>
              </div>
              <div>
                <label className="check-item">
                  <input type="checkbox" className="checkbox" id="checkbox" />
                  <span className="styled-checkbox"></span>
                  <span className="selection-point">Hostel</span>
              </label>
              </div>
              <div>
                <label className="check-item">
                  <input type="checkbox" className="checkbox" id="checkbox" />
                  <span className="styled-checkbox"></span>
                  <span className="selection-point">Flat</span>
                </label>
              </div>
            </div>
            <div className="check-item filter-button-container" >
              <input type="submit" value="Filter" className="filter-button" />
            </div>
          </form>
        </div>
      </div>
      
    )
  }
}