import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
    const [activeItem, setActiveItem] = useState<string>("home");

    const handleClick = (newPage: string) => {
        setActiveItem(newPage);
    };

    return (
        <Menu pointing secondary>
            <Link to="/">
                <Menu.Item
                    name="home"
                    active={activeItem === "home"}
                    onClick={() => handleClick("home")}
                />
            </Link>
            <Link to="/map">
                <Menu.Item
                    name="map"
                    active={activeItem === "map"}
                    onClick={() => handleClick("map")}
                />
            </Link>
            <Link to="/about">
                <Menu.Item
                    name="about"
                    active={activeItem === "about"}
                    onClick={() => handleClick("about")}
                />
            </Link>
        </Menu>
    );
};
