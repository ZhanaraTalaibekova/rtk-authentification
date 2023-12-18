import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import styles from "./Auth.module.scss"
import { useRegisterMutation } from '../features/Registration';
import { message } from 'antd';
import { Navigate, useNavigate } from 'react-router';

const Auth: React.FC = () => {
    const [registerUser, { isLoading, isError }] = useRegisterMutation();
    const [showRegister, setShowRegister] = useState(false)
    const navigate = useNavigate()

    // useEffect(() => {
    //     const token = localStorage.getItem('token');
    //     if (token) {
    //         navigate('/home');
    //     }
    // }, []);

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,12}$/;

    const onFinish = async (values: any) => {
        try {
            const { email, password, lastName, firstName} = values;
            if (!email.includes('@')) {
                message.error('Invalid email format. Please include "@" in your email.');
                return;
            }
            const result = await registerUser({ email, password, lastName, firstName });
            console.log('Registration successful:', result);

            const token = localStorage.getItem('token');
            if (token) {
                navigate('/home');
            }
        } catch (error) {
            console.error('Registration error:', error);
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="container">
            <div className={styles.form}>
                {/* <h1 className={styles.title}>{!showRegister ? 'Register' : 'Login'}</h1> */}
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    className={styles.formCover}>

                    <Form.Item
                        label="firstName"
                        name="firstname"
                        rules={[{ required: true, message: 'Please input your name!' },
                            // { max: 15, message: 'Password must not exceed 8 characters!' }
                        ]}
                        className={styles.inputCover}>
                        <Input
                            placeholder='firstName'
                            className={styles.input} />
                    </Form.Item>

                    <Form.Item
                        label="lastName"
                        name="lastname"
                        rules={[{ required: true, message: 'Please input your surname!' },
                            // { max: 15, message: 'Password must not exceed 8 characters!' }
                        ]}
                        className={styles.inputCover}>
                        <Input
                            placeholder='lastName'
                            className={styles.input} />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' },
                            // { max: 15, message: 'Password must not exceed 8 characters!' }
                        ]}
                        className={styles.inputCover}>
                        <Input
                            placeholder='email'
                            className={styles.input} />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            { required: true, message: 'Please input your password!' },
                            // { min: 6, message: 'Password must be at least 6 characters!' },
                            // { max: 12, message: 'Password must not exceed 12 characters!' },
                            // { pattern: passwordPattern, message: 'Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be 6-12 characters long!' }
                        ]}
                        className={styles.inputCover}>
                        <Input.Password
                            placeholder='password'
                            className={styles.input} />
                    </Form.Item>

    

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        className={styles.inputCover}
                        wrapperCol={{ offset: 8, span: 16 }}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{ offset: 8, span: 16 }}
                        className={styles.inputCover}>
                        <Button type="primary" htmlType="submit">
                            sign up
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Auth;




