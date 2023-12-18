import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import styles from "./Auth.module.scss"
import { message } from 'antd';
import { useNavigate } from 'react-router';
import { useLoginMutation } from '../features/Login';
import { Link } from 'react-router-dom';

const Reset: React.FC = () => {
    const [loginUser, { isLoading, isError }] = useLoginMutation();
    const [showRegister, setShowRegister] = useState(false)
    const navigate = useNavigate()

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,12}$/;

    const onFinish = async (values: any) => {
        try {
            const { email } = values;
            if (!email.includes('@')) {
                message.error('Invalid email format. Please include "@" in your email.');
                return;
            }
            const result = await loginUser( email );
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
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' },
                        ]}
                        className={styles.inputCover}>
                        <Input
                            placeholder='email'
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
                            send
                        </Button>
                    </Form.Item>

                </Form>
            </div>
        </div>
    );
};

export default Reset;