import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
    return (
        <Container fluid className='bg-dark mt-5'>
            <Row>
                <Col className='mx-auto' md={3}>
                    <p className='text-muted fw-bold fs-5'>You can call our front desk at</p>
                    <p className='text-muted fw-bold fs-5'>Karachi: 021-34380525, 34380526</p>
                    <p className='text-muted fw-bold fs-5'>Mon – Fri 09:30am – 6pm</p>
                    <p className='text-muted fw-bold fs-5'>email us at</p>
                    <p className='text-muted fw-bold fs-5'>email us at <span>abc@gmail.com</span>or fill contact form</p>

                </Col>
                <hr className='text-muted fw-bold fs-5' />
                <p className='text-muted fs-5 text-center'>Copyright © 2022 N.M Logistics Agency All Rights Reserved.</p>
            </Row>
        </Container>
    )
}

export default Footer