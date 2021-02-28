import React, {useEffect, useState} from 'react';
import {IUser} from '../interfaces/IUser';
import axios from 'axios';
import {User} from '../components/User';
import {Location} from '../components/Location';
import {Episode} from '../components/Episode';
import {IUserDetailsProps} from '../interfaces/IUserDetailsProps';
import {IEpisodeURL} from '../interfaces/IEpisodeURL';
import InfiniteScroll from 'react-infinite-scroller';

export const UserDetails: React.FC<IUserDetailsProps> = (props: IUserDetailsProps) => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then(response => {
                setUsers(response.data.results);
            });
    }, []);
    const user = users.find(user => user.id.toString() === props.match.params.id);
    const userEpisodes: IEpisodeURL[] | undefined = user?.episode?.map(url => {
        return {text: url} as IEpisodeURL;
    });

    const loadFunc = () => {

    }

    return (
        <div className="details">
            <User user={user} showLink={false}/>
            <div className="details__locations">Locations</div>
            <Location location={user?.location}/>
            <div className="details__episodes">Episodes</div>
            <InfiniteScroll
                pageStart={0}
                loadMore={loadFunc}
                hasMore={true}
            >
                {userEpisodes?.map((episode) => <Episode episode={episode}/>)}
            </InfiniteScroll>
        </div>
    );
}
