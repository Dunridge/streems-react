import React, {useEffect, useState} from 'react';
import {IUser} from '../interfaces/IUser';
import axios from 'axios';
import {User} from '../components/User';
import {Location} from '../components/Location';
import {Episode} from '../components/Episode';
import {IUserDetailsProps} from '../interfaces/IUserDetailsProps';

export const UserDetails: React.FC<IUserDetailsProps> = (props: IUserDetailsProps) => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then(response => {
                setUsers(response.data.results);
            });
    }, []);
    const user = users.find(user => user.id.toString() === props.match.params.id);
    const userEpisodes: string[] | undefined = user?.episode;
    // console.log(userEpisodes);

    // TODO: pass a boolean that will hide the Click me button + style it
    return (
        <div className="details">
            <User user={user}/>
            <div className="details__locations">Locations</div>
            <Location location={user?.location}/>
            <div className="details__episodes">Episodes</div>
            {userEpisodes?.map((episode) => <Episode episode={episode}/>)}
        </div>
    );
}
