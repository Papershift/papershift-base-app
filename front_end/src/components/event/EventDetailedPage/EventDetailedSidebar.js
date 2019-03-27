import React from 'react';
import {Item, Label, List, Segment} from "semantic-ui-react";

const EventDetailedSidebar = ({attendees}) => {
    return (
        <div>
            <Segment
                textAlign="center"
                style={{border: 'none'}}
                attached="top"
                secondary
                inverted
                color="teal"
            >
                {attendees && attendees.length} {attendees && attendees.length === 1 ? 'Person' : 'People'} Going
            </Segment>
            <Segment attached>
                <List relaxed divided>
                    {attendees &&
                    attendees.map(attendee => (
                        <Item key={attendee.id} style={{position: 'relative'}}>
                            {
                            <Label
                                style={{position: 'absolute'}}
                                color="orange"
                                ribbon="right"
                            >
                                I'm In
                            </Label>}
                            <Item.Image size="tiny" src={"https://randomuser.me/api/portraits/men/"+(attendee.attributes.user.id.substring(0, 1).charCodeAt(0)+attendee.attributes.user.id.substring(1, 2).charCodeAt(0)-50)+".jpg"}/>*
                            <Item.Content verticalAlign="middle">
                                <Item.Header as="h3">
                                    <a>{attendee.attributes.user.name}</a>
                                </Item.Header>
                            </Item.Content>
                        </Item>
                    ))}
                </List>
            </Segment>
        </div>
    );
};

export default EventDetailedSidebar;
