export interface Event {
    id: string;
    title: string;
    link: string;
    description: string;
    Categories: Category[];
    Sources: Source[];
    Geometries: Geometry[];
}

export interface Category {
    id: string;
    title: string;
}

export interface Source {
    id: string;
    url: string;
}

export interface Geometry {
    date: string;
    type: string;
    coordinates: string[];
}

export interface DataResponse {
    title: string;
    description: string;
    link: string;
    Events: Event[];
}