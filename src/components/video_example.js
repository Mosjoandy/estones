import React from 'react';
import { Player } from 'video-react';


function Video() {
    return (
        <div>
            <Player
                playsInline
                poster="/assets/poster.png"
                src="https://cdn.discordapp.com/attachments/1018012992316653638/1018016583748173865/VID_25130725_120731_372.mp4"
            />
        </div>
    );
};

export default Video