import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

export const MapPage: React.FC = () => {
    return (
        <MapContainer center={[60.19, 24.94]} zoom={4} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    );
};
