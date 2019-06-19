import React, {Component} from 'react';
import sample from '../../videos/video.mp4';

export default class VideoContainer extends Component {
    render() {
        return (
            <div className="color-overlay">
                <video className='video-container' playsInline autoPlay loop muted>
                    <source src={sample} type='video/mp4' />
                </video>
            </div>
        )
    }
}



