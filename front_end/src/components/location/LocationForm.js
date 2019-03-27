import React from 'react';
import {Button, Form, Segment} from "semantic-ui-react";
import {Field, reduxForm} from "redux-form";
import TextInput from "../common/TextInput";
import {connect} from "react-redux";
import {createLocation} from "../../actions/locationActions";
import {combineValidators, isRequired} from "revalidate";

const actions = {
    createLocation
}

const validate = combineValidators({
    name: isRequired({message: 'Location Name is Required'}),

})
const LocationForm = ({createLocation, handleSubmit}) => {
    return (
        <Form error size="large" onSubmit={handleSubmit(createLocation)}>
            <Segment>
                <Field
                    name="name"
                    component={TextInput}
                    type="text"
                    placeholder="Location Name"
                />
                <Button fluid size="large" color="teal">
                    New Location
                </Button>
            </Segment>
        </Form>
    );
};

export default connect(null, actions)(reduxForm({form: 'locationForm',enableReinitialize: true, validate})(LocationForm));
