import React, {Component} from 'react';
import {Image, List} from "semantic-ui-react";

class EventListAttendee extends Component {
    render() {
        const {attendee} = this.props;

        const imgid = attendee.attributes.user.id.substring(0, 1).charCodeAt(0)+attendee.attributes.user.id.substring(1, 2).charCodeAt(0)-50;
        const img = "https://randomuser.me/api/portraits/men/"+imgid+".jpg"

        return (
            <List.Item>
                <Image as='a' size="mini" circular src={img}/>
            </List.Item>
        )
    }
}

export default EventListAttendee;