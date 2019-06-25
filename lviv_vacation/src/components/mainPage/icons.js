import React, {Component} from 'react';
import sleep from '../../img/sleep.svg';
import food from '../../img/food.svg';
import cinema from '../../img/cinema.svg';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchData } from '../../actions/actionsData';
import {clickedEntertainments, clickedHotels, clickedRestaraunts, justClick} from '../../actions/actionClicked';

class MainIcons extends Component {

    //Function for enable animation and fetch hotels
    handleHotels(){
        if(this.props.hotelClicked || !this.props.clicked){
            this.props.dispatch(justClick());
        }

        if(this.props.entClicked){
            this.props.dispatch(clickedEntertainments());
        }

        if(this.props.restClicked){
            this.props.dispatch(clickedRestaraunts());
        }

        this.props.dispatch(clickedHotels())
        this.props.dispatch(fetchData("http://localhost:3001/op/hotels"));
    }


    //Function for enable animation and fetch restaurants
    handleRest(){
        if(this.props.restClicked || !this.props.clicked){
            this.props.dispatch(justClick());
        }

        if(this.props.hotelClicked){
            this.props.dispatch(clickedHotels());
        }

        if(this.props.entClicked){
            this.props.dispatch(clickedEntertainments());
        }

        this.props.dispatch(clickedRestaraunts())
        this.props.dispatch(fetchData("http://localhost:3001/op/restaurants"));
    }


    handleEnt(){
        if(this.props.entClicked || !this.props.clicked){
            this.props.dispatch(justClick());
        }
        
        if(this.props.hotelClicked){
            this.props.dispatch(clickedHotels());
        }

        if(this.props.restClicked){
            this.props.dispatch(clickedRestaraunts());
        }

        this.props.dispatch(clickedEntertainments());
        this.props.dispatch(fetchData("http://localhost:3001/op/entertainments"));
    }

    render() {
        return (
            <>
                    <div className="icons">
                        <div  onClick={()=>this.handleHotels()} className={['images', this.props.clicked && 'is-inf-images', this.props.hotelClicked && 'is-element-choose'].join(' ')} >
                            <img src={sleep} alt="Sleep" />
                        </div>

                        <div onClick={()=>this.handleRest()} className={['images', this.props.clicked && 'is-inf-images'].join(' ')} >
                            <img src={food} alt="Eat" />
                        </div>
                        <div onClick={()=>this.handleEnt()} className={['images', this.props.clicked && 'is-inf-images'].join(' ')}> 
                            <img src={cinema} alt="Hang_out" />
                        </div>
                    </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
        clicked: state.click.clicked,
        hotelClicked: state.click.clickedHotels,
        restClicked: state.click.clickedRestaraunts,
        entClicked: state.click.clickedEntertainment
});


export default connect(mapStateToProps)(MainIcons);