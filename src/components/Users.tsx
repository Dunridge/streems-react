import React, {useEffect, useState} from 'react';
import {IUser} from '../interfaces/IUser';
import {User} from './User';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroller';

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

    const loadFunc = () => {

    }

    return (
        <InfiniteScroll
            pageStart={0}
            loadMore={loadFunc}
            hasMore={true}
            loader={<div className="loader" key={0}>Loading...</div>}
        >
            {users.map((user: IUser) => <User key={user.id} user={user}/>)}
        </InfiniteScroll>
    );
}
