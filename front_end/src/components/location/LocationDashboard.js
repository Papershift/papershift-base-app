import React, {Component} from 'react';
import {Grid} from "semantic-ui-react";
import {connect} from "react-redux";
import LocationList from "./LocationList";
import {getLocations} from "../../actions/locationActions";
import LocationForm from "./LocationForm";

const mapState = state => ({
    locations: state.locations
});


const actions = {
    getLocations
};

class LocationDashboard extends Component {
    handleCreateLocation = eventId => () => {
        //this.props.deleteEvent(eventId);
    };
    componentDidMount() {
        this.props.getLocations();
    }

    render() {
        let locations = []
        if(this.props.locations.locations !== undefined){
            locations = this.props.locations.locations;
        }
        return (
            <Grid>
                <Grid.Column width={10}>
                    <LocationForm createLocation={this.handleCreateLocation()}/>
                    <LocationList  locations={locations} />
                </Grid.Column>
                <Grid.Column width={6} />
            </Grid>
        );
    }
}

export default connect(mapState, actions)(LocationDashboard);