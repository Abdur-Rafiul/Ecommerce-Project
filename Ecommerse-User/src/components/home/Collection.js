import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";

class Collection extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center card p-3 mb-3" fluid={true}>

                    <h5 className="section-title">SPECIAL COLLECTIONS</h5>
                    <p className="section-sub-title">Some of Exclusive Collection, you May Like</p>
                    <Row>
                        <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className="image-box1 card w-100">
                                <img className="" src="/images/shoes 10.jpg" alt="shoes"/>
                                <Card.Body>
                                    <p className="product-name-on-card">PUMA Men's Alphacat Palmer Iced Tea Golf Shoe</p>
                                    <p className="product-price-on-card">Price: 3000TK</p>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className="image-box1 card w-100">
                                <img className="" src="/images/shoes 13.jpg" alt="shoes"/>
                                <Card.Body>
                                    <p className="product-name-on-card">PUMA Men's Alphacat Palmer Iced Tea Golf Shoe</p>
                                    <p className="product-price-on-card">Price: 3000TK</p>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className="image-box1 card w-100">
                                <img className="" src="/images/bag 7.jpg" alt="shoes"/>
                                <Card.Body>
                                    <p className="product-name-on-card">PUMA Men's Alphacat Palmer Iced Tea Golf Shoe</p>
                                    <p className="product-price-on-card">Price: 3000TK</p>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className="image-box1 card w-100">
                                <img className="" src="/images/phone 3.jpg" alt="shoes"/>
                                <Card.Body>
                                    <p className="product-name-on-card">PUMA Men's Alphacat Palmer Iced Tea Golf Shoe</p>
                                    <p className="product-price-on-card">Price: 3000TK</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Collection;