import React from 'react';
import {ILocationProps} from '../interfaces/ILocationProps';

export const Location: React.FC<ILocationProps> = ({ location}) => {

    return (
        <div className="location">
            <div className="location__title">{location?.name}</div>
            <div className="location__url">{location?.url}</div>
        </div>
    );
}
