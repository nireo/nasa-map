import React, { useState } from "react";
import "./App.css";
import { PageHeader } from "./components/Header";
import { MapPage } from "./components/map";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AboutPage } from "./components/About";

const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <Route exact path="/" render={() => <PageHeader />} />
            <Route exact path="/map" render={() => <MapPage />} />
            <Route exact path="/about" render={() => <AboutPage />} />
        </Router>
    );
};

export default App;
