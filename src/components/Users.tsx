import React, {useEffect, useState} from 'react';
import {IUser} from '../interfaces/IUser';
import {User} from './User';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroller';
import {SearchBar} from './SearchBar';

interface UsersProps {
    users: IUser[];
}

export const Users: React.FC<UsersProps> = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [usersDefault, setUsersDefault] = useState<IUser[]>([]);
    const [input, setInput] = useState('');

    const fetchData = async () => {
        return await fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => {
                setUsers(data.results)
                setUsersDefault(data.results)
            });
    }

    const updateInput = async (input: string) => {
        const filtered = usersDefault.filter((user: IUser) => {
            return user.name.toLowerCase().includes(input.toLowerCase())
        })
        setInput(input);
        setUsers(filtered);
    }

    useEffect(() => {
        fetchData()
    }, []);

    const loadFunc = () => {

    }

    return (
        <React.Fragment>
            <div className="searchbar">
                <SearchBar
                    keyword={input}
                    setKeyword={updateInput}
                />
            </div>
            <InfiniteScroll
                pageStart={0}
                loadMore={loadFunc}
                hasMore={true}
            >
                {users.map(user => <User key={user.id} user={user}/>)}
            </InfiniteScroll>
        </React.Fragment>
    );
}
