import React, {Component} from 'react';
import {Button, Container, Menu} from "semantic-ui-react";
import logo from '../../../logo.svg';
import {Link, NavLink, withRouter} from "react-router-dom";
import LoggedInMenu from "./LoggedInMenu";
import LoggedOutMenu from "./LoggedOutMenu";
import {connect} from "react-redux";
import {openModal} from "../../../actions/modalActions";
import {logout} from "../../../actions/authActions";


const actions = {
    openModal,
    logout
}

const mapState = (state) => ({
    auth: state.auth
})

class NavBar extends Component {

    handleSignIn = () => {
        this.props.openModal('LoginModal')
    };

    handleRegister = () => {

        this.props.openModal('RegisterModal')
    }

    handleSignOut = () => {
        this.props.logout();
        this.props.history.push('/')
    };



    render() {
        const {auth} = this.props
        const authen =  auth.authenticated
        return (
            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item header>
                        <img src={logo} alt="logo"/>
                        Re-vents
                    </Menu.Item>
                    <Menu.Item as={NavLink} to='/events' name="Events"/>
                    <Menu.Item>
                        {authen&&<Button as={Link} to="/createEvent" floated="right" positive inverted content="Create Event"/>}
                    </Menu.Item>
                    {authen? <LoggedInMenu currentUser={auth.currentUser} signOut={this.handleSignOut} />:<LoggedOutMenu register={this.handleRegister} signIn={this.handleSignIn}/>}
                </Container>
            </Menu>
        );
    }
}

export default withRouter(connect(mapState, actions)(NavBar));