import React from 'react';
import { Form, Segment, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import TextInput from "../../common/TextInput";
import { registerUser} from "../../../actions/authActions";
import {connect} from "react-redux";
import {combineValidators, isRequired} from "revalidate";

const actions = {
    registerUser
}


const validate = combineValidators({
    name: isRequired({message: 'Name is Required'}),
    email: isRequired({message: 'Email is Required'}),
    password: isRequired({message: 'Password is Required'})
})

const RegisterForm = ({registerUser, handleSubmit}) => {
    return (
        <div>
            <Form size="large" onSubmit={handleSubmit(registerUser)}>
                <Segment>
                    <Field
                        name="name"
                        type="text"
                        component={TextInput}
                        placeholder="Known As"
                    />
                    <Field
                        name="email"
                        type="text"
                        component={TextInput}
                        placeholder="Email"
                    />
                    <Field
                        name="password"
                        type="password"
                        component={TextInput}
                        placeholder="Password"
                    />
                    <Button fluid size="large" color="teal">
                        Register
                    </Button>
                </Segment>
            </Form>
        </div>
    );
};

export default connect(null, actions)(reduxForm({form: 'registerForm',enableReinitialize: true, validate})(RegisterForm));