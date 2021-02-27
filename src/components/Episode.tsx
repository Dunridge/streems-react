import React, {useEffect} from 'react';
import {IEpisodeProps} from '../interfaces/IEpisodeProps';
import axios from 'axios';
import {IEpisode} from '../interfaces/IEpisode';

export const Episode: React.FC<IEpisodeProps> = ({episode}) => {
    // @ts-ignore
    // const [episodeInfo, setEpisodeInfo] = useEffect<IEpisode>({
    //     air_date: '',
    //     characters: [],
    //     created: '',
    //     episode: '',
    //     id: 0,
    //     name: '',
    //     url: ''
    // })

    useEffect(() => {
        //@ts-ignore
       axios.get(episode.text).then(response => {
           console.log(response.data);
           // setEpisodeInfo(response.data);
       })
    });

    //@ts-ignore
    console.log(episode.text);
    return (
        <React.Fragment>
            <div className="episode">
                <div className="episode__title">
                    Episode
                </div>
            </div>
        </React.Fragment>
    );
}

