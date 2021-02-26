import React from 'react';
import {IUserProps} from '../interfaces/IUserProps';
import {IUserSection} from '../interfaces/IUserSection';
import {Link} from 'react-router-dom';

export const UserComponent: React.FC<IUserProps> = ({user}) => {
    console.log(user);

    // TODO: configure these
    const sections: IUserSection[] = [
        {
            placeholder: 'Name:',
            name: user?.name
        },
        {
            placeholder: 'Status:',
            name: user?.status
        },
        {
            placeholder: 'Species:',
            name: user?.species
        },
        {
            placeholder: 'Type: ',
            name: user?.type ? user?.type : 'Not specified'
        },
        {
            placeholder: user?.origin.name,
            name: user?.origin.url
        },
        {
            placeholder: 'Created at: ',
            name: user?.created
        },
        {
            placeholder: 'Gender: ',
            name: user?.gender
        },
        {
            placeholder: user?.location.name,
            name: user?.location.url
        },
        {
            placeholder: 'Url: ',
            name: user?.url
        }
    ];

    return (
        <div className="user">
            <img className="user__picture" src={user?.image} alt="user"/>
            <div className="user__info">
                {sections.map(section => (
                    <div className="user__info-section">
                        <div className="user__section-placeholder">{section.placeholder}</div>
                        <div className="user__section-value">{section.name}</div>
                    </div>
                ))}
                <Link to={'/' + user?.id}>Click me</Link>
            </div>
        </div>
    );
}
