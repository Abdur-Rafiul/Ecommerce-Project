import React, {Component, Fragment} from 'react';
import {Container,Row,Col,Card} from "react-bootstrap";
import {Link} from "react-router-dom";

class SuggestedProduct extends Component {


    render() {


            return (
                <Fragment>
                    <Container fluid={true} className="text-center BetweenTwoSection">
                        <h4 className="section-title">YOU MAY LIKE</h4>
                        <h6 className="section-sub-title">Some Of Our Exclusive Collection, You May Like</h6>
                        <Row>

                            <Col className="p-1" xl={2} lg={2} md={2} sm={4} xs={6}>
                                <Link to="/productDetails">
                                    <Card className="image-box card w-100">
                                        <img className="" src="/images/shoes 1.jpg" alt="shoes"/>
                                        <Card.Body>
                                            <p className="product-name-on-card">PUMA Men's Alphacat Palmer Iced Tea Golf Shoe</p>
                                            <p className="product-price-on-card">Price: 3000TK</p>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>

                            <Col className="p-1" xl={2} lg={2} md={2} sm={4} xs={6}>
                                <Link to="/productDetails">
                                    <Card className="image-box card w-100">
                                        <img className="" src="/images/shoes 1.jpg" alt="shoes"/>
                                        <Card.Body>
                                            <p className="product-name-on-card">PUMA Men's Alphacat Palmer Iced Tea Golf Shoe</p>
                                            <p className="product-price-on-card">Price: 3000TK</p>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                </Fragment>
            );
        }

}

export default SuggestedProduct;