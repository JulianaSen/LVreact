import React, {Component} from 'react';
import VideoContainer from '../video/video';
import MainContent from '../mainPage/mainInform';
import MainIcons from '../mainPage/icons';
import Navbar from '../Navbar/Navbar';
import Catalog from '../CatalogWithFilter/CatalogWithFilter';
import CatalogWithFilter from '../CatalogWithFilter/CatalogWithFilter';
import { connect } from 'react-redux';

class MainBlock extends Component {


    render() {
        return (
            <>
            <div  class={['main_page', this.props.clicked && 'is-inf-open'].join(' ')}>
                <VideoContainer />
                <Navbar />

                <section id='choice' className="choice"> 
                    <MainContent enter="Enter your budget for one day:"
                        submit="Submit"
                        activity="Choose your activity:" />
                    <MainIcons />
                </section>

                {this.props.clicked && <div className='inf-content'>
                    <CatalogWithFilter />
        </div> }
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

export default connect(mapStateToProps)(MainBlock);