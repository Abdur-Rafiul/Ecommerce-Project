import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

class Contact extends Component {
    render() {
        return (
            <Fragment>
                <Container className="TopSection">
                    <Row className="d-flex p-5  justify-content-center">
                        <Col className="card mt-4" md={10} lg={10} sm={12} xs={12}>
                            <Row>
                                <Col className="text-center d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                                    <Form className="onboardForm">
                                        <h4 className="section-title">CONTACT WITH US</h4>
                                        <h6 className="section-sub-title pb-3">Please Enter Your Mobile No & Go Next</h6>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">

                                            <Form.Control type="text" placeholder="Your Name" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">

                                            <Form.Control type="text" placeholder="Your Phone Number" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">

                                            <Form.Control type="text" placeholder="Your Message" />
                                        </Form.Group>
                                        <Form.Group>
                                            <Button className="btn-block pure-material-button-contained site-btn">Send</Button>
                                        </Form.Group>
                                    </Form>
                                </Col>

                                <Col className="  p-0 m-0" md={6} lg={6} sm={12} xs={12}>
                                    <iframe className="GoogleMap"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14594.128776004296!2d90.3132099!3d23.87074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c213b785c80f%3A0x160471c997db5233!2sManarat%20International%20University!5e0!3m2!1sen!2sbd!4v1663783908783!5m2!1sen!2sbd"
                                        width="600" height="450"  allowFullScreen="" loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Contact;