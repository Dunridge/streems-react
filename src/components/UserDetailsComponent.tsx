import React, {useEffect, useState} from 'react';
import {RouteComponentProps} from 'react-router-dom';
import {User} from '../interfaces/user';
import axios from 'axios';
import {UserComponent} from './UserComponent';

export const UserDetailsComponent: React.FC<UserDetailsProps> = (props: UserDetailsProps) => {
    const [users, setUsers] = useState<User[]>([]);
    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character') // you might have to put this into a useEffect
            .then(response => {
                setUsers(response.data.results);
            });
    }, []);
    console.log(users);
    const user = users.find(user => user.id.toString() === props.match.params.id);
    console.log(user);
    // TODO: pass a boolean that will hide the Click me button + style it
    return (
        <React.Fragment>
            <UserComponent user={user}/>
        </React.Fragment>
    );
}

interface UserDetailsProps extends RouteComponentProps<{ id: string }> {

}
