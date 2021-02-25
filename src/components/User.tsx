import React from 'react';
import './App.scss';
import {User} from '../interfaces/user';

interface UserProps {
    user: User;
}

// TODO: see how to pass fetched data to components
export const UserComponent: React.FC<UserProps> = (props) => {
    console.log(props.user)
    return (
        <div>Name:</div>
    );
}
