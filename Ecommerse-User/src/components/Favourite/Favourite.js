import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class Favourite extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center" fluid={true}>
                    <h5 className="section-title">My Fevourite Item</h5>
                    <p className="section-sub-title">Some of Exclusive Collection, you May Like</p>
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










                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Favourite;