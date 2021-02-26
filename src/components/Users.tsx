import React, {useEffect, useState} from 'react';
import {IUser} from '../interfaces/IUser';
import {User} from './User';
import axios from 'axios';

interface UsersProps {
    users: IUser[];
}

export const Users: React.FC<UsersProps> = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then(response => {
                setUsers(response.data.results);
            });
    }, []);

    console.log(users);

    return (
        <div>
            {users.map((user: IUser) => <User key={user.id} user={user}/>)}
        </div>
    );
}
