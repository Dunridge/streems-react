import {Origin} from './origin';
import {Location} from './location';
import {EpisodeInterface} from './episode';

export interface User {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string
    origin: Origin;
    created: string;
    episode: string[] | undefined;
    gender: string;
    image: string;
    location: Location;
    url: string;
}
