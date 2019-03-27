import React from 'react';
import {Button, Menu} from "semantic-ui-react";

const LoggedOutMenu = ({signIn, register}) => {
    return (
        <Menu.Item position="right">
            <Button onClick={signIn} basic inverted content="Login"/>
            <Button onClick={register} basic inverted content="Sign Up" style={{marginLeft: '0.5em'}}/>
        </Menu.Item>
    );
};

export default LoggedOutMenu;
