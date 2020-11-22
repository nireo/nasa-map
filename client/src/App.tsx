import React, { useState } from "react";
import "./App.css";
import { PageHeader } from "./components/Header";
import { Navbar } from './components/Navbar';

interface Props {
    text: string;
    lat: number;
    lng: number;
}
const AnyReactComponent: React.FC<Props> = ({ text }) => <div>{text}</div>;

const App: React.FC = () => {
    return (
        <div>
            <Navbar />
            <PageHeader />
        </div>
    );
};

export default App;
