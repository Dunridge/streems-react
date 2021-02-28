import {IOrigin} from './IOrigin';
import {ILocation} from './ILocation';

export interface IUser {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string
    origin: IOrigin;
    created: string;
    episode: string[] | undefined;
    gender: string;
    image: string;
    location: ILocation;
    url: string;
    showLink?: boolean;
}
