import React, {Component} from 'react';
import {Container, Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class FooterDesktop extends Component {


    render() {
        return (
            <Container fluid={true} className="card p-0 footer">

            <Container fluid={true} className="p-0">
            <div className="m-0 p-0 bg-white mt-5  shadow-sm">
                <div className="ms-5" id="google_translate_element"></div>
                <div className="">
                    {/* <div className="ph-item">
                        <div className="ph-col-12">
                            <div className="ph-row">
                                <div className="ph-col-12"/>
                                <div className="ph-col-12"/>
                                <div className="ph-col-12"/>
                                <div className="ph-col-12"/>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="p-0">
                    <Container>
                        <Row className="px-0 my-5">
                            <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                                <h5 className="footer-menu-title">ABOUT COMPANY</h5>
                                <p> </p>
                                <h5 className="footer-menu-title">SOCIAL LINK</h5>
                                <a target="_blank" ><i className="fab m-1 h4 fa-facebook"/></a>
                                <a target="_blank" ><i className="fab m-1 h4 fa-instagram"/></a>
                                <a target="_blank" ><i className="fab m-1 h4 fa-twitter"/></a>
                            </Col>
                            <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                                <h5 className="footer-menu-title">THE COMPANY</h5>
                                <Link to="/about" className="footer-link">About Us</Link><br/>
                                <Link to="/contact" className="footer-link">Contact Us</Link><br/>
                                <h5 className="footer-menu-title mt-3">OFFICE ADDRESS</h5>
                                <p></p>
                            </Col>
                            <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                                <h5 className="footer-menu-title">MORE INFO</h5>
                                <Link to="/purchase" className="footer-link">How To Purchase</Link><br/>
                                <Link to="/policy" className="footer-link">Privacy Policy</Link><br/>
                                <Link  to="/refund" className="footer-link">Refund Policy</Link><br/>
                            </Col>
                            <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                                <h5 className="footer-menu-title">DOWNLOAD APP</h5>
                                <a target="_blank" ><img className="" src="/Images/apple.png" alt="ios logo"/></a><br/>
                                <a target="_blank" ><img className="mt-2" src="/Images/playstore.png" alt="android logo"/></a>
                            </Col>
                        </Row>
                    </Container>
                    <Container fluid={true} className="m-0 ps-0 pe-0 pt-3 pb-1 bg-dark ">
                        <Container className="">
                            <Row className="px-0 text-white">
                                <p></p>
                            </Row>
                        </Container>
                    </Container>
                </div>
            </div>
            </Container>

            </Container>

        );
    }
}
export default FooterDesktop;