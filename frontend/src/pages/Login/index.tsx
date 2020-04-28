import React from 'react';
import {Formik, Field} from 'formik';
import * as Yup from 'yup';

import {useHistory} from 'react-router-dom';

import './styles.css';
import {Button, Form, Typography} from 'antd';

import {MailOutlined, LockOutlined} from '@ant-design/icons';

import axios from 'axios';
import {FormikHelpers} from 'formik/dist/types';
import FormInput from '../../components/FormInput';

const {Title} = Typography;

interface LoginInterface {
    email: string;
    password: string;
}

const validationSchema = Yup.object({
    email: Yup.string().email('enter correct email address').required('enter email'),
    password: Yup.string()
        .min(6, 'password must contain at least 6 characters')
        .max(12, 'password must be 12 characters maximum')
        .matches(/^(?=.*[a-z])[a-z\d]{6,12}$/, 'password must contain letters and numbers')
        .required('enter password'),
});

const Login = (): JSX.Element => {
    const history = useHistory();
    const initialValues: LoginInterface = {
        email: '',
        password: '',
    };

    const submit = (value: LoginInterface, formikBag: FormikHelpers<LoginInterface>) => {
        axios
            .post('/api/login', value)
            .then((result) => {
                history.push('/bid-list');
            })
            .catch((err) => {
                formikBag.setSubmitting(false);
                formikBag.setFieldError('email', 'check your email');
                formikBag.setFieldError('password', 'check your password');
            });
    };

    return (
        <div className="login-page">
            <Title level={2}>Welcome to Dispatchland Bid Rates</Title>
            <Title level={4}>enter your email and password to log in</Title>
            <Formik
                initialValues={initialValues}
                onSubmit={submit}
                validationSchema={validationSchema}
                validateOnChange={false}
                validateOnBlur={false}
            >
                {({handleSubmit}) => {
                    return (
                        <Form>
                            <Field
                                name="email"
                                type="input"
                                placeholder="Email"
                                prefix={<MailOutlined className="site-form-item-icon" />}
                                as={FormInput}
                            />
                            <Field
                                name="password"
                                type="password"
                                placeholder="Password"
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                as={FormInput}
                            />

                            <div className="form-footer">
                                <Button type="primary" onClick={() => handleSubmit()} className="login-form-button">
                                    Log in
                                </Button>
                            </div>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
};

export default Login;
