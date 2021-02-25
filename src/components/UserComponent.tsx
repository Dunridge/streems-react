import React from 'react';
import {UserProps} from '../interfaces/user-props';
import {UserSection} from '../interfaces/user-section';

export const UserComponent: React.FC<UserProps> = ({user}) => {
    console.log(user);

    const sections: UserSection[] = [
        {
            placeholder: 'Name',
            name: user?.name
        },
        {
            placeholder: 'Status',
            name: user?.status
        }
    ];

    return (
        <div className="user">
            <img className="user__picture" src={user?.image}/>
            <div className="user__info">
                {sections.map(section => (
                    <div className="user__info-section">
                        <div className="user__section-placeholder">{section.placeholder}</div>
                        <div className="user__section-value">{section.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
