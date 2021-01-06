export interface Event {
    id: string;
    title: string;
    link: string;
    description: string;
    categories: Category[];
    sources: Source[];
    geometries: Geometry[];
}

export interface Category {
    id: number;
    title: string;
}

export interface Source {
    id: string;
    url: string;
}

export interface Geometry {
    date: string;
    type: string;
    coordinates: number[];
}

export interface DataResponse {
    title: string;
    description: string;
    link: string;
    events: Event[];
}
