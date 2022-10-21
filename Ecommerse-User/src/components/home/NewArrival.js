import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
// Import css files
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import axios from "axios";
import ApiURL from "../../api/AppURL";

class NewArrival extends Component {

    constructor(props) {
        super();
        this.next = this.next.bind(this)
        this.prev = this.prev.bind(this)

        this.state={
            ProductData:[]
        }
    }

    next(){
         this.slider.slickNext();
    }

    prev(){
        this.slider.slickPrev();
    }

    componentDidMount() {
        axios
            .get(ApiURL.ProductListByRemark("NEW"))
            .then((response) => {

                this.setState({ ProductData: response.data});

            })
            .catch((error) => {});
    }
    render() {


        var settings = {
            dots: false,
            infinite: true,
            autoPlay: true,
            autoplaySpeed: 3000,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        let MyList = this.state.ProductData;
        let MyView = MyList.map((ProductList,i)=> {

            if(ProductList.special_price == "NA"){
                return <div>
                            <Card className="image-box1 card w-100 ">
                                <img className="" src={ProductList.images} alt="shoes"/>
                                <Card.Body>
                                    <p className="product-name-on-card">{ProductList.title}</p>
                                    <p className="product-price-on-card">Price: {ProductList.price}</p>
                                </Card.Body>
                            </Card>
                        </div>



            }else{
                return <div>
                            <Card className="image-box1 card w-100 ">
                                <img className="" src={ProductList.images} alt="shoes"/>
                                <Card.Body>
                                    <p className="product-name-on-card">{ProductList.title}</p>
                                    <p className="product-price-on-card"><strike><span className="text-muted">Price: {ProductList.price}</span></strike> {ProductList.special_price}</p>

                                </Card.Body>
                            </Card>
                        </div>




            }



        })
        return (
            <Container className="text-center" fluid={true}>
            <Container className="text-center" fluid={true}>
                <h5 className="section-title">NEW ARRIVAL</h5>
                <p className="section-sub-title">Some of Our Exclusive Collection, You May Like</p>

                <a className="btn btn-sm ms-2 site-btn" onClick={this.prev}>

                    <i className="fa fa-angle-left"></i>
                </a>

                <a className="btn btn-sm ms-2 site-btn" onClick={this.next}>
                    <i className="fa fa-angle-right"></i>
                </a>

                    <div className="mt-3 mb-4 p-0">
                    <Slider ref={c=>(this.slider=c)} {...settings}>
                        {MyView}
                    </Slider>
                </div>


            </Container>
            </Container>
        );
    }
}

export default NewArrival;