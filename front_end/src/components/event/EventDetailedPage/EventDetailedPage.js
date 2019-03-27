import React, {Component} from 'react';
import {Grid} from "semantic-ui-react";
import EventDetailedHeader from "./EventDetailedHeader";
import EventDetailedInfo from "./EventDetailedInfo";
import EventDetailedSidebar from "./EventDetailedSidebar";
import {connect} from "react-redux";
import {cancelJoinEvent, getEvent, joinEvent} from "../../../actions/eventActions";
import {openModal} from "../../../actions/modalActions";

const mapState = (state) => ({
    event: state.events.event,
    auth: state.auth
})
const actions = {
    getEvent,
    joinEvent,
    cancelJoinEvent,
    openModal
};


class EventDetailedPage extends Component {
    handleJoin = () => {
        if (this.props.auth.authenticated)
            this.props.joinEvent({event_id: this.props.event.id})
        else
            this.props.openModal('LoginModal')
    }

    handleCancel = () => {
        this.props.cancelJoinEvent(this.props.event.id)
    }

    componentDidMount() {
        this.props.getEvent(this.props.match.params.id);
    }


    render() {
        const {auth} = this.props
        let can_join = false
        if (this.props.event !== undefined && this.props.event.id !== undefined) {
            can_join = this.props.event.attributes.attendees.data.find(ev => ev.attributes.user.id === auth.currentUser.id) === undefined ? true : false
        }

        return (
            <Grid>
                <Grid.Column width={10}>
                    {this.props.event !== undefined && this.props.event.id !== undefined ?
                        <EventDetailedHeader canJoin={can_join} user={auth.currentUser} join={this.handleJoin}
                                             cancel={this.handleCancel} event={this.props.event}/> : null}
                    {this.props.event !== undefined && this.props.event.id !== undefined ?
                        <EventDetailedInfo event={this.props.event}/> : null}


                </Grid.Column>
                <Grid.Column width={6}>
                    {this.props.event !== undefined && this.props.event.id !== undefined ?
                        <EventDetailedSidebar attendees={this.props.event.attributes.attendees.data}/> : null}
                </Grid.Column>
            </Grid>
        );
    }
}

export default connect(mapState, actions)(EventDetailedPage);