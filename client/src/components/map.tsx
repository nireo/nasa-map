import React, { useCallback, useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { DataResponse } from '../interfaces/response.interface';
import { LoadData } from "../utils/loadData";
import { Markers } from './markers';

export const MapPage: React.FC = () => {
    const [data, setData] = useState<DataResponse | null>(null);
    const [loaded, setLoaded] = useState<Boolean>(false);

    const loadDataFromApi = useCallback(async () => {
        const tempData = await LoadData();
        setData(tempData);
    }, [])

    useEffect(() => {
        if (!loaded) {
            setLoaded(true);
            loadDataFromApi();
        }
    }, [loaded, data, setLoaded])

    console.log(data);

    return (
        <MapContainer center={[60.19, 24.94]} zoom={4} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {(data === null ? null : <Markers data={data} />)}
        </MapContainer>
    );
};
