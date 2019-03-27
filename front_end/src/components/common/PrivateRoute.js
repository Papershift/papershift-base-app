import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import {openModal} from "../../actions/modalActions";


const actions = {
    openModal
}

const PrivateRoute = ({ openModal,component: Component, auth, ...rest}) => (

    <Route
        {...rest}
        render = { props =>
            auth.authenticated === true ? (
                <Component {...props} />
            ):(

                <Redirect to="/events" />
            )
        }
    />
)


const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, actions )(PrivateRoute);
