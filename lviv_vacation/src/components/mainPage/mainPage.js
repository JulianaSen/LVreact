import React, {Component} from 'react';
import VideoContainer from '../video/video';
import MainContent from '../mainPage/mainInform';
import MainIcons from '../mainPage/icons';
import Navbar from '../Navbar/Navbar';

class MainBlock extends Component {
    render() {
        return (
            <>
                <VideoContainer />
                <Navbar />

                <section className="choice"> 
                    <MainContent enter="Enter your budget for one day:"
                        submit="Submit"
                        activity="Choose your activity:" />
                    <MainIcons />
                </section>  
            </>
        )
    }
}

export default MainBlock;