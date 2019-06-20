import React, {Component} from 'react';
import video1 from '../../videos/video.mp4';
import video2 from '../../videos/video.webm';

export default class VideoContainer extends Component {
    render() {
        return (
            <div className="color-overlay">
                <video className='video-container' playsInline autoPlay loop muted>
                    <source src={video1} type='video/mp4' />
                    <source src={video2} type='video/webm' />
                </video>
            </div>
        )
    }
}



