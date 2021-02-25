import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {User} from './interfaces/user';
import {UserComponent} from './components/UserComponent';

const App: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character') // you might have to put this into a useEffect
            .then(response => {
                setUsers(response.data.results);
            });
    }, []);

    console.log(users);

    return (
        <div className="app">
            <h1 className="app__header">Users</h1>
            <div className="app_users">
                {users.map((user: User, id) => <UserComponent user={user}/>)}
            </div>
        </div>
    );
}

export default App;
