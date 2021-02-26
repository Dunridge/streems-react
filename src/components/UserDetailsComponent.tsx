import React, {useEffect, useState} from 'react';
import {RouteComponentProps} from 'react-router-dom';
import {IUser} from '../interfaces/IUser';
import axios from 'axios';
import {UserComponent} from './UserComponent';
import {LocationComponent} from './LocationComponent';
import {IEpisode} from '../interfaces/IEpisode';
import {Episode} from '../components/Episode';

export const UserDetailsComponent: React.FC<UserDetailsProps> = (props: UserDetailsProps) => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character') // you might have to put this into a useEffect
            .then(response => {
                setUsers(response.data.results);
            });
    }, []);
    const user = users.find(user => user.id.toString() === props.match.params.id);
    const userEpisodes: string[] | undefined = user?.episode;
    console.log(userEpisodes);

    // TODO: pass a boolean that will hide the Click me button + style it
    return (
        <div className="details">
            <UserComponent user={user}/>
            <div className="details__locations">Locations</div>
            <LocationComponent location={user?.location}/>
            <div className="details__episodes">Episodes</div>
            {userEpisodes?.map((episode) => <Episode episode={user?.episode}/>)}
        </div>
    );
}

interface UserDetailsProps extends RouteComponentProps<{ id: string }> {

}
