import React from 'react';
import styles from "./Layout.module.css"

import Header from '../components/Header';
import { Outlet } from 'react-router';

export const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};
