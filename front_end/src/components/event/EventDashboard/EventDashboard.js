import React, {Component} from 'react';
import {Grid} from "semantic-ui-react";
import EventList from "../EventList/EventList";
import {getEvents} from "../../../actions/eventActions";
import {connect} from "react-redux";

const mapState = state => ({
    events: state.events
});

const actions = {
    getEvents
};

class EventDashboard extends Component {
    componentDidMount() {
        this.props.getEvents();
    }

    render() {
        const { events } = this.props.events;
        return (
            <Grid>
                <Grid.Column width={10}>
                    <EventList  events={events} />
                </Grid.Column>
                <Grid.Column width={6} />
            </Grid>
        );
    }
}

export default connect(mapState, actions)(EventDashboard);