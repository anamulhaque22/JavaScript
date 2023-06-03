import React from 'react';
import Menu from '../components/shared/Menu';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Layout = () => {
    return (
        <Container>
            <Menu/>
            <Outlet/>
        </Container>
    );
};

export default Layout;