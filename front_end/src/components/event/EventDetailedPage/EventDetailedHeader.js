import React from 'react';
import {Button, Header, Image, Item, Segment} from "semantic-ui-react";

import {Link} from "react-router-dom";

const eventImageStyle = {
    filter: 'brightness(30%)'
};

const eventImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
};


const EventDetailedHeader = ({canJoin,user,event,join,cancel}) => {
    return (
        <Segment.Group>
            <Segment basic attached="top" style={{ padding: '0' }}>
                <Image src={process.env.PUBLIC_URL+`/assets/categoryImages/${event.attributes.category}.jpg`} fluid style={eventImageStyle} />

                <Segment basic style={eventImageTextStyle}>
                    <Item.Group>
                        <Item>
                            <Item.Content>
                                <Header
                                    size="huge"
                                    content={event.title}
                                    style={{ color: 'white' }}
                                />
                                <p>{event.date}</p>
                                <p>
                                    Hosted by <strong>{event.attributes.user.name}</strong>
                                </p>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
            </Segment>

            <Segment attached="bottom">
                {!canJoin&&<Button onClick={cancel}>Cancel My Place</Button>}
                {canJoin&&<Button onClick={join} color="teal">JOIN THIS EVENT</Button>}

                {user.id===event.attributes.user.id&&<Button as={Link} to={`/manage/${event.id}`} color="orange" floated="right">
                    Manage Event
                </Button>}
            </Segment>
        </Segment.Group>
    );
};

export default EventDetailedHeader;
