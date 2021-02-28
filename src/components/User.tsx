import React from 'react';
import {IUserProps} from '../interfaces/IUserProps';
import {IUserSection} from '../interfaces/IUserSection';
import {Link} from 'react-router-dom';

export const User: React.FC<IUserProps> = ({user}) => {
    // console.log(user);

    // TODO: configure these
    const sections: IUserSection[] = [
        {
            placeholder: 'Name:',
            name: user?.name
        },
        // {
        //     placeholder: 'Status:',
        //     name: user?.status
        // },
        {
            placeholder: 'Species:',
            name: user?.species
        },
        {
            placeholder: 'Type: ',
            name: user?.type ? user?.type : 'Not specified'
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
            placeholder: 'Location: ',
            name: user?.location.name
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
            </div>
                <span className="user__button"><Link to={'/' + user?.id}>Info</Link></span>
        </div>
    );
}
