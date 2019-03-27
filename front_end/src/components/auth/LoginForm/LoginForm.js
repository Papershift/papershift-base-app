import React from 'react';
import { Form, Segment, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import TextInput from "../../common/TextInput";
import {connect} from "react-redux";
import {login} from "../../../actions/authActions";
import {combineValidators, isRequired} from "revalidate";


const actions = {
    login
}

const validate = combineValidators({
    email: isRequired({message: 'Email is Required'}),
    password: isRequired({message: 'Password is Required'})
})

const LoginForm = ({login, handleSubmit}) => {
    return (
        <Form error size="large" onSubmit={handleSubmit(login)}>
            <Segment>
                <Field
                    name="email"
                    component={TextInput}
                    type="text"
                    placeholder="Email Address"
                />
                <Field
                    name="password"
                    component={TextInput}
                    type="password"
                    placeholder="password"
                />
                <Button fluid size="large" color="teal">
                    Login
                </Button>
            </Segment>
        </Form>
    );
};

export default connect(null, actions)(reduxForm({form: 'loginForm',enableReinitialize: true, validate})(LoginForm));