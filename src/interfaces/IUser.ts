import {IOrigin} from './IOrigin';
import {ILocation} from './ILocation';
import {IEpisode} from './IEpisode';

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
}
