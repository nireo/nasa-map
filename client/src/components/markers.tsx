import React from "react";
import { Category, DataResponse, Event } from '../interfaces/response.interface';
import { Marker, Popup, FeatureGroup, Circle } from 'react-leaflet';

type Props = {
    data: DataResponse;
};

const fillRedOptions = { fillColor: 'red' }

export const Markers: React.FC<Props> = ({ data }) => {
    return <div>
        {data.events.map((event: Event) => (
            (event.geometries[0].type === "Point" ? (
                <FeatureGroup pathOptions={fillRedOptions}>
                    <Circle pathOptions={fillRedOptions} center={[event.geometries[0].coordinates[1], event.geometries[0].coordinates[0]]} radius={2000} />
                    <Popup>
                        {event.title} <br />
                        {"Categories: " + event.categories.map((category: Category) => category.title + " ")}
                    </Popup>
                </FeatureGroup>
            ) : null)
        ))
        }
    </div >;
}