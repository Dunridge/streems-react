import React from 'react';
import {IEpisodeProps} from '../interfaces/IEpisodeProps';

export const Episode: React.FC<IEpisodeProps> = ({episode}) => {

    console.log(episode);
    return (
        <React.Fragment>
            <div>Episode</div>
        </React.Fragment>
    );
}

