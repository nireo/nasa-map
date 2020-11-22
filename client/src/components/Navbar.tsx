import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';

export const Navbar: React.FC = () => {
    const [activeItem, setActiveItem] = useState<string>("home");

    const handleClick = (newPage: string) => {
        setActiveItem(newPage);
    }

    return (
        <Menu pointing secondary>
            <Menu.Item
                name='home'
                active={activeItem === 'home'}
                onClick={() => handleClick("home")}
            />
            <Menu.Item
                name='map'
                active={activeItem === 'map'}
                onClick={() => handleClick("map")}
            />
            <Menu.Item
                name='about'
                active={activeItem === 'about'}
                onClick={() => handleClick("about")}
            />
        </Menu>
    )
}