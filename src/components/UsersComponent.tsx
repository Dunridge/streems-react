import React, {useEffect, useState} from 'react';
import {User} from '../interfaces/user';
import {UserComponent} from './UserComponent';
import axios from 'axios';

interface UsersProps {
    users: User[];
}

export const UsersComponent: React.FC<UsersProps> = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character') // you might have to put this into a useEffect
            .then(response => {
                setUsers(response.data.results);
            });
    }, []);

    console.log(users);

    return (
        <div>
            {users.map((user: User) => <UserComponent key={user.id} user={user}/>)}
        </div>
    );
}
