import React from 'react';
import './nicevideos.scss';

function NiceVideos() {
    return (
        <div className="nicevideos">
            <div className="home-title">Video hay</div>
            <div className="videos">
                <div className="videos-row">
                    <iframe
                        className="video"
                        title="video"
                        src="https://www.youtube.com/embed/YG8ws3dfMM0"
                        allowfullscreen
                    ></iframe>
                    <iframe
                        className="video"
                        title="video"
                        src="https://www.youtube.com/embed/YG8ws3dfMM0"
                        allowfullscreen
                    ></iframe>
                    <iframe
                        className="video"
                        title="video"
                        src="https://www.youtube.com/embed/YG8ws3dfMM0"
                        allowfullscreen
                    ></iframe>
                </div>
                <div className="videos-row">
                    <iframe
                        className="video"
                        title="video"
                        src="https://www.youtube.com/embed/YG8ws3dfMM0"
                        allowfullscreen
                    ></iframe>
                    <iframe
                        className="video"
                        title="video"
                        src="https://www.youtube.com/embed/YG8ws3dfMM0"
                        allowfullscreen
                    ></iframe>
                    <iframe
                        className="video"
                        title="video"
                        src="https://www.youtube.com/embed/YG8ws3dfMM0"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
            <div className="home-box">Xem thêm</div>
        </div>
    );
}

export default NiceVideos;
