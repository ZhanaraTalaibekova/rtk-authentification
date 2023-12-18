import React from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import styles from "./Header.module.scss"
import { Button } from 'antd';

const Header = () => {
    const navigate = useNavigate();

    const logOut = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <header>
            <div className="container">
                <div className={styles.headerCover}>
                    <div className={styles.logoCover}>
                        LOGO
                        {
                            localStorage.getItem('token') ? (
                                <Button onClick={logOut}>Log out</Button>
                            ) : (

                                null
                            )
                        }
                    </div>
                    <div className={styles.buttons}>
                        <Link to="/login">
                            <Button>login</Button>
                        </Link>
                        <Link to="/auth">
                            <Button>register</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;