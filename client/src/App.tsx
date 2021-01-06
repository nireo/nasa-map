import React, { useState } from "react";
import "./App.css";
import { PageHeader } from "./components/Header";
import { MapPage } from "./components/map";
import { Navbar } from "./components/Navbar";

interface Props {
    text: string;
    lat: number;
    lng: number;
}

const App: React.FC = () => {
    return <MapPage />;
};

export default App;
