import React, {Component} from 'react';
import {Button, Icon, Item, List, Segment} from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";
import {Link} from "react-router-dom";
import moment from "moment";



class EventListItem extends Component {
    render() {
        const {event} = this.props
        const imgid = event.attributes.user.id.substring(0, 1).charCodeAt(0)+event.attributes.user.id.substring(1, 2).charCodeAt(0)-50;
        const img = "https://randomuser.me/api/portraits/men/"+imgid+".jpg"
        return (
            <Segment.Group>
                <Segment>
                    <Item.Group>
                        <Item>
                            <Item.Image size="tiny" circular src={img}/>
                            <Item.Content>
                                <Item.Header as="a">{event.attributes.title}</Item.Header>
                                <Item.Description>
                                    Hosted by <a>{event.attributes.user.name}</a>
                                </Item.Description>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
                <Segment>
          <span>
            <Icon name="clock"/> {moment(event.attributes.date).format("YYYY-MM-DD")}
            <Icon name="marker"/> {event.attributes.location.name}
          </span>
                </Segment>
                <Segment secondary>
                    <List horizontal>
                        {event.attributes.attendees.data && event.attributes.attendees.data.map((attendee) => (
                            <EventListAttendee  key={attendee.id} attendee={attendee}/>
                        ))}

                    </List>
                </Segment>
                <Segment clearing>
                    <span>{event.attributes.description}</span>
                    <Button as={Link} to={`/event/${event.id}`} color="teal" floated="right" content="View"/>
                </Segment>
            </Segment.Group>
        );
    }
}

export default EventListItem;