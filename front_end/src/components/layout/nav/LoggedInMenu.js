import React from 'react';
import {Menu, Dropdown, Image} from "semantic-ui-react";
import {Link} from "react-router-dom";

const LoggedInMenu = ({signOut, currentUser}) => {
    const imgid = currentUser.id.substring(0, 1).charCodeAt(0)+currentUser.id.substring(1, 2).charCodeAt(0)-50;
    const img = "https://randomuser.me/api/portraits/men/"+imgid+".jpg"
    return (
        <Menu.Item position="right">
            <Image avatar spaced="right" src={img}  />
            <Dropdown pointing="top left" text={currentUser.name}>
                <Dropdown.Menu>
                    <Dropdown.Item text="Create Event" icon="plus" />
                    <Dropdown.Item as={Link} to='/locations' text="My Locations" icon="map" />
                    <Dropdown.Item onClick={signOut} text="Sign Out" icon="power" />
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    );
};

export default LoggedInMenu;
