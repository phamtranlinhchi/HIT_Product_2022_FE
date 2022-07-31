import React from 'react';
import './nicevideos.scss';

const NiceVideos = () => {
    return (
        <div className="nicevideos">
            <div className="videos">
                <div className="videos-row">
                    <iframe
                        className="video"
                        title="video"
                        src="https://www.youtube.com/embed/YG8ws3dfMM0"
                        allowFullScreen
                    ></iframe>
                    <iframe
                        className="video"
                        title="video"
                        src="https://www.youtube.com/embed/YG8ws3dfMM0"
                        allowFullScreen
                    ></iframe>
                    <iframe
                        className="video"
                        title="video"
                        src="https://www.youtube.com/embed/YG8ws3dfMM0"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="videos-row">
                    <iframe
                        className="video"
                        title="video"
                        src="https://www.youtube.com/embed/YG8ws3dfMM0"
                        allowFullScreen
                    ></iframe>
                    <iframe
                        className="video"
                        title="video"
                        src="https://www.youtube.com/embed/YG8ws3dfMM0"
                        allowFullScreen
                    ></iframe>
                    <iframe
                        className="video"
                        title="video"
                        src="https://www.youtube.com/embed/YG8ws3dfMM0"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default NiceVideos;
