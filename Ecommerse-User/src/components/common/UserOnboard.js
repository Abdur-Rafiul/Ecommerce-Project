import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import {Link, Redirect} from "react-router-dom";
class UserOnboard extends Component {
    render() {
        return (
            <Fragment>
                 <Container className="TopSection">
                     <Row className="d-flex p-5  justify-content-center">
                         <Col className="card mt-4" md={10} lg={10} sm={12} xs={12}>
                             <Row>
                                 <Col className="text-center d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                                     <Form className="onboardForm">
                                     <h4 className="section-title">USER SIGN IN</h4>
                                         <h6 className="section-sub-title pb-3"></h6>
                                         <Form.Group className="mb-3" controlId="formBasicEmail">

                                    
                                             <Form.Control className='mb-2' type="text" placeholder="Enter Your Email" />
                                             <Form.Control type="text" placeholder="Enter Your Password" />
                                             
                                         </Form.Group>
                                         <Form.Group>
                                         <Button className="btn-block pure-material-button-contained site-btn m-2">Sign IN</Button>
                                         <Link to="/register"  className="h4 btn">Register</Link>

                                         </Form.Group>
                                     </Form>
                                 </Col>

                             <Col className="Desktop p-0 m-0" md={6} lg={6} sm={12} xs={12}>
                                 <img className="onboardBanner w-75" src="/images/phone1.jpg"/>
                             </Col>
                             </Row>
                         </Col>
                     </Row>
                 </Container>
            </Fragment>
        );
    }
}

export default UserOnboard;