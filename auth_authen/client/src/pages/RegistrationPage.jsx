import React, { Fragment } from 'react';
import Registration from '../components/Registration/Registration';
import { Col, Container, Row } from 'react-bootstrap';

const RegistrationPage = () => {
    return (
        <Container>
            <Row className='justify-content-md-center'>
                <Col lg={8}>
            <Registration/>
                </Col>
            </Row>
        </Container>
    );
};

export default RegistrationPage;