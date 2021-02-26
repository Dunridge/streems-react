import React from 'react';
import {Location} from '../interfaces/location';

export const LocationComponent: React.FC<LocationProps> = ({ location}) => {

    return (
        <div className="location">
            <div className="location__title">{location?.name}</div>
            <div className="location__url">{location?.url}</div>
        </div>
    );
}

export interface LocationProps {
    location: Location | undefined;
}
