import React from 'react';
import {UserProps} from '../interfaces/user-props';

export const UserComponent: React.FC<UserProps> = ({ user }) => {

    return (
        <div className="user">Name: { user?.name }</div>
    );
}
