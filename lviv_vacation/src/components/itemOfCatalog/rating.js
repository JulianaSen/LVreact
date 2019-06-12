import React from 'react';

export default class Rating extends React.Component {
    render() {
        return (
            <div className="rating">
                <label><input type="checkbox" className="rating-star" /><i className="fa fa-star" /></label>
                <label><input type="checkbox" className="rating-star" /><i className="fa fa-star" /></label>
                <label><input type="checkbox" className="rating-star" /><i className="fa fa-star" /></label>
                <label><input type="checkbox" className="rating-star" /><i className="fa fa-star" /></label>
                <label><input type="checkbox" className="rating-star" /><i className="fa fa-star" /></label>
            </div>
        )
    }
}

