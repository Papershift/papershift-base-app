import React, {Component} from 'react';
import EventDashboard from "./components/event/EventDashboard/EventDashboard";
import NavBar from "./components/layout/nav/NavBar";
import {Container} from "semantic-ui-react";
import {Route, Switch} from "react-router-dom";
import LandingPage from "./components/layout/Landing/LandingPage";
import EventDetailedPage from "./components/event/EventDetailedPage/EventDetailedPage";
import EventForm from "./components/event/EventForm/EventForm";
import ModalManager from "./components/common/modal/ModalManager";
import setAuthToken from "./util/setAuthToken";
import jwt_decode from 'jwt-decode'
import store from './store'
import { logout} from "./actions/authActions";
import {LOGIN_USER} from "./Constants/authConstants";
import PrivateRoute from "./components/common/PrivateRoute";
import LocationDashboard from "./components/location/LocationDashboard";

if(localStorage.jwtToken){
    setAuthToken(localStorage.jwtToken)
    // decode token to get user data
    const decoded = jwt_decode(localStorage.jwtToken)
    //set current user
    store.dispatch({type: LOGIN_USER, payload: decoded})
    // check for expired token
    const currentTime = Date.now() / 1000
    if(decoded.exp<currentTime){
        store.dispatch(logout());
        // redirect to login page
        window.location.href = '/login'
    }else {
        //socket.emit('connected',decoded.id)
    }
}


class App extends Component {
    render() {
        return (
            <div>
                <ModalManager/>
                <Switch>
                    <Route exact path="/" component={LandingPage}/>
                </Switch>

                <Route
                    path="/(.+)"
                    render={() => (
                        <div>
                            <NavBar/>
                            <Container className="main">
                                <Switch>
                                    <Route path="/events" component={EventDashboard}/>
                                    <Route path="/event/:id" component={EventDetailedPage} />
                                    <PrivateRoute path="/manage/:id" component={EventForm} />
                                    <PrivateRoute path="/createEvent" component={EventForm} />
                                    <PrivateRoute path="/locations" component={LocationDashboard} />
                                </Switch>
                            </Container>
                        </div>
                    )}
                />
            </div>
        );
    }
}

export default App;
