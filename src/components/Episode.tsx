import React, {useEffect, useState} from 'react';
import {IEpisodeProps} from '../interfaces/IEpisodeProps';
import axios from 'axios';
import {IEpisode} from '../interfaces/IEpisode';
import {IEpisodeSection} from '../interfaces/IEpisodeSection';

export const Episode: React.FC<IEpisodeProps> = ({episode}) => {
    const [episodeInfo, setEpisodeInfo] = useState<IEpisode>({
        air_date: '',
        characters: [], // TODO: redirect to a link where you're going to load more characters + remove from the interface
        created: '',
        episode: '',
        id: 0,
        name: '',
        url: ''
    })

    useEffect(() => {
        //@ts-ignore
        axios.get(episode.text).then(response => {
            setEpisodeInfo(response.data);
            console.log(response.data);
        })
    });

    const sections: IEpisodeSection[] = [
        {
            placeholder: 'Name',
            name: episodeInfo.name
        },
        {
            placeholder: 'Air date',
            name: episodeInfo.air_date
        },
        {
            placeholder: 'Created',
            name: episodeInfo.created
        },
        {
            placeholder: 'Episode',
            name: episodeInfo.episode
        }
    ];

    return (
        <React.Fragment>
            <div className="episode">
                {sections.map(section => (
                    <div className="episode__info-section">
                        <div className="episode__section-placeholder">{section.placeholder}: </div>
                        <div className="episode__section-value">{section.name}</div>
                    </div>
                ))}
            </div>
        </React.Fragment>
    );
}

