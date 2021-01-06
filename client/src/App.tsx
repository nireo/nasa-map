import React, { useState } from "react";
import "./App.css";
import { PageHeader } from "./components/Header";
import { MapPage } from "./components/map";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <Route exact path="/" render={() => <PageHeader />} />
            <Route exact path="/map" render={() => <MapPage />} />
        </Router>
    );
};

export default App;
