import React, {Component} from 'react';
import sleep from '../../img/sleep.svg';
import food from '../../img/food.svg';
import cinema from '../../img/cinema.svg';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchData } from '../../actions/actionsData';

class MainIcons extends Component {

    render() {
        return (
            <div className="icons">
                <Link className="images" to="/hotels" onClick={() => this.props.dispatch(fetchData("http://localhost:3001/op/hotels"))}>
                    <img src={sleep} alt="Sleep" />
                </Link>
                <Link className="images"  to="/hotels" onClick={() => this.props.dispatch(fetchData("http://localhost:3001/op/restaurants"))}>
                    <img src={food} alt="Eat" />
                </Link>
                <Link className="images"  to="/hotels" onClick={() => this.props.dispatch(fetchData("http://localhost:3001/op/entertainments"))}> 
                    <img src={cinema} alt="Hang_out" />
                </Link>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    route: state.data.route
});

export default connect(mapStateToProps)(MainIcons);