import React from 'react';
import './Stream.css';

const Stream = () => {
    return (
        <div className="stream">
            <div className="stream__container">
                <div className="stream__status">
                    <div className="stream__statusContainer">
                        <div className="stream__statusContainerTop">
                            <div className="stream__statusIndicator">OFFLINE</div>
                            <h2>Check out the below streams from Sound It</h2>
                        </div>
                        <div className="stream__statusInfo">
                            <i className="fas fa-bell"></i>
                            <p>You will be notified when Sound It is Live</p>
                        </div>
                    </div>
                </div>
                <div className="stream__videoEmbed">
                    <iframe
                        width="500"
                        height="295"
                        src="https://www.youtube.com/embed/0pFqFGwL9mA"
                        frameborder="0"
                        allow="accelerator; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen={true}        
                    ></iframe>
                </div>
            </div>
        </div>
    )
}

export default Stream
