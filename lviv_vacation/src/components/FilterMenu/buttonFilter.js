import React from 'react';

export default class ButtonFilter extends React.Component {
  render() {
    return (
        <div className="check-item filter-button-container" >
            <input type="submit" value="Filter" className="filter-button" />
        </div>
    )
  }
}