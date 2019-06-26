import React, {Component} from 'react';
import VideoContainer from '../video/video';
import MainContent from '../mainPage/mainInform';
import MainIcons from '../mainPage/icons';
import Navbar from '../Navbar/Navbar';
import CatalogWithFilter from '../CatalogWithFilter/CatalogWithFilter';
import { connect } from 'react-redux';
import { userActions } from '../../actions/userActions';

class MainBlock extends Component {
    render() {
        const { user, users } = this.props;
        return (
            <>
            <div  className={['main_page', this.props.clicked && 'is-inf-open'].join(' ')}>
                <VideoContainer />
                <Navbar />

                <section id='choice' className="choice"> 
                    <MainContent />
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