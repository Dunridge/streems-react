import React from 'react';
import {EpisodeInterface} from '../interfaces/episode';
import {EpisodeProps} from '../interfaces/episode-props';

export const EpisodeComponent: React.FC<EpisodeProps> = ({episode}) => {

    return (
        <React.Fragment>
            <div>Episode</div>
        </React.Fragment>
    );
}

