import React, { useState } from "react";
import "./App.css";
import GoogleMapReact from "google-map-react";

interface Props {
    text: string;
    lat: number;
    lng: number;
}
const AnyReactComponent: React.FC<Props> = ({ text }) => <div>{text}</div>;

const App: React.FC = () => {
    const [center] = useState({
        lat: 59.95,
        lng: 30.33,
    });
    return (
        <div style={{ height: "100vh", width: "100%" }}>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: process.env.GOOGLE_MAPS_API as string,
                }}
                defaultCenter={center}
                defaultZoom={11}
            >
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    );
};

export default App;
