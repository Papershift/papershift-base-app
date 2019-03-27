import React, {Component} from 'react';
import {Button, Form, Grid, Segment} from "semantic-ui-react";
import {connect} from "react-redux";
import cuid from 'cuid';
import {createEvent, updateEvent} from "../../../actions/eventActions";
import {Field, reduxForm} from "redux-form";
import TextInput from "../../common/TextInput";
import TextArea from "../../common/TextArea";
import DropDownInput from "../../common/DropDownInput";
import {combineValidators, composeValidators, isRequired, hasLengthGreaterThan} from 'revalidate'
import DateInput from "../../common/DateInput";
import moment from "moment";
import {getEvent} from "../../../actions/eventActions";
import {getLocations} from "../../../actions/locationActions";


const mapState = (state, ownProps) => {
    const eventId = ownProps.match.params.id;

    let event = {}

    if (eventId) {
        event = state.events.event
    }

    return {
        initialValues: event.attributes,
        locations: state.locations
    }
}

const actions = {
    getEvent,
    createEvent,
    updateEvent,
    getLocations
}
const category = [
    {key: 'ia', text: 'Artificial Intelligence', value: 'ia'},
    {key: 'gd', text: 'Game Development', value: 'gd'},
    {key: 'vr', text: 'Virtual Reality', value: 'vr'},
    {key: 'ar', text: 'Augmented Reality', value: 'ar'},
    {key: 'wd', text: 'Web Development', value: 'wd'},
    {key: 'ml', text: 'Machine Learning', value: 'ml'},
    {key: 'cl', text: 'Cloud Computing', value: 'cl'},
];
let locations = [
];
const validate = combineValidators({
    title: isRequired({message: 'The Event Title is Required'}),
    category: isRequired({message: 'The Event Category is Required'}),
    date: isRequired({message: 'The Event Date is Required'}),
    location: isRequired({message: 'The Event Location is Required'}),
    description: composeValidators(
        isRequired({message: 'Please Enter a Description'}),
        hasLengthGreaterThan(10)({message: 'Description needs to be at least 10 characters'})
    )()

})

class EventForm extends Component {

    componentDidMount() {
        this.props.getEvent(this.props.match.params.id);
        this.props.getLocations();
    }

    onFormSubmit = (values) => {
        values.date = moment(values.date).format("YYYY-MM-DD")
        if (this.props.initialValues.id) {
            this.props.updateEvent(values,this.props.history,this.props.match.params.id);
        } else {
            const newEvent = {
                ...values,
                id: cuid(),
                hostPhotoURL: '/assets/user.png'
            }
            this.props.createEvent(newEvent,this.props.history)

        }

    }

    render() {

        const {invalid, submitting, pristine} = this.props
        if(this.props.locations.locations !== undefined){
            locations = []
            this.props.locations.locations.map(lc=>locations.push({key:lc.id,text:lc.attributes.name,value:lc.id}));
        }

        return (
            <Grid>
                <Grid.Column width={10}>
                    <Segment>
                        <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
                            <Field name='title' type='text' component={TextInput} placeholder='Event Title' />
                            <Field name='description' type='text' component={TextArea} placeholder='Event Description' />
                            <Field name='category' type='text' component={DropDownInput} options={category} placeholder='Event Category' />
                            <Field name='location' type='text' component={DropDownInput} options={locations} placeholder='Event Location' />
                            <Field name='date' type='text' component={DateInput} dateFormat="YYYY-MM-DD" placeholder='Event Date' />
                            <Button disabled={invalid || submitting || pristine} positive type="submit">
                                Submit
                            </Button>
                            <Button onClick={this.props.history.goBack} type="button">Cancel</Button>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>

        );
    }
}

export default connect(mapState, actions)(reduxForm({form: 'eventForm', enableReinitialize: true, validate})(EventForm));