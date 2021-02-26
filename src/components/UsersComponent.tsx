import React, {useEffect, useState} from 'react';
import {IUser} from '../interfaces/IUser';
import {UserComponent} from './UserComponent';
import axios from 'axios';

interface UsersProps {
    users: IUser[];
}

export const UsersComponent: React.FC<UsersProps> = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character') // you might have to put this into a useEffect
            .then(response => {
                setUsers(response.data.results);
            });
    }, []);

    console.log(users);

    return (
        <div>
            {users.map((user: IUser) => <UserComponent key={user.id} user={user}/>)}
        </div>
    );
}
