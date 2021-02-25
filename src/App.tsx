import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {User} from './interfaces/user';
import {UserComponent} from './components/UserComponent';
import {HeaderComponent} from './components/HeaderComponent';
import {FooterComponent} from './components/FooterComponent';

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
        <React.Fragment>
            <HeaderComponent/>
            <div className="app">
                <div className="app_users">
                    {users.map((user: User, id) => <UserComponent user={user}/>)}
                </div>
            </div>
            <FooterComponent/>
        </React.Fragment>
    );
}

export default App;
