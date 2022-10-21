import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import axios from "axios";
import ApiURL from "../../api/AppURL";

class Collection extends Component {
    constructor() {
        super();
        this.state={
            ProductData:[]
        }
    }

    componentDidMount() {
        axios
            .get(ApiURL.ProductListByRemark("COLLECTION"))
            .then((response) => {

                this.setState({ ProductData: response.data});

            })
            .catch((error) => {});
    }

    render() {
        let MyList = this.state.ProductData;
        let MyView = MyList.map((ProductList,i)=> {

            if(ProductList.special_price == "NA"){
                return  <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>

                    <Card className="image-box1 card w-100">
                        <img className="" src={ProductList.images} alt="shoes"/>
                        <Card.Body>
                            <p className="product-name-on-card">{ProductList.title}</p>
                            <p className="product-price-on-card">Price: {ProductList.price}</p>

                        </Card.Body>
                    </Card>
                </Col>
            }else{
                return  <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>

                    <Card className="image-box1 card w-100">
                        <img className="" src={ProductList.images} alt="shoes"/>
                        <Card.Body>
                            <p className="product-name-on-card">{ProductList.title}</p>
                            <p className="product-price-on-card"><strike><span className="text-muted">Price: {ProductList.price}</span></strike> {ProductList.special_price}</p>
                        </Card.Body>
                    </Card>
                </Col>

            }



        })

        return (
            <Fragment>
                <Container className="text-center card p-3 mb-3" fluid={true}>

                    <h5 className="section-title">SPECIAL COLLECTIONS</h5>
                    <p className="section-sub-title">Some of Exclusive Collection, you May Like</p>
                    <Row>
                        {MyView}
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Collection;