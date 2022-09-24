import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class NavMenuDeskTop extends Component {
    render() {
        return (
            <Fragment>

                    <Container fluid={true} className="p-3 fixed-top bg-light shadow-sm">

                        <Row>
                            <Col lg={4} md={4} sm={12} xs={12}>
                                <Link to="/"><img className="nav-logo" src="/images/logo.jpg"/></Link>
                                <Link to="/cart" className="cart-btn"><i className="fa fa-shopping-cart"></i>4 items</Link>
                            </Col>

                            <Col lg={4} md={4} sm={12} xs={12}>
                                <div className="input-group w-100">
                                    <input type="text" className="form-control" aria-label="Text Input"/>
                                  <button type="button"  className="btn site-btn"><i className="fa fa-search"></i></button>
                                </div>
                            </Col>

                            <Col lg={4} md={4} sm={12} xs={12}>
                                <Link to="/favourite" className="btn"><i className="fa h4 fa-heart"></i><sup><span className="badge bg-danger">4</span> </sup></Link>
                                <Link to="/notification" className="btn"><i className="fa h4 fa-bell"></i><sup><span className="badge bg-danger">4</span> </sup></Link>
                                <a href="" className="btn"><i className="fa-3x text-success fa  fa-mobile-alt"></i></a>
                                <Link to="/onboard"  className="h4 btn">LOGIN</Link>
                            </Col>
                        </Row>
                    </Container>



            </Fragment>
        );
    }
}

export default NavMenuDeskTop;