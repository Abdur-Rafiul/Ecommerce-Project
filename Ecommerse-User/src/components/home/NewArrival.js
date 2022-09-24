import React, {Component, Fragment} from 'react';
import {Card, Container, Row} from "react-bootstrap";
// Import css files
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

class NewArrival extends Component {

    constructor(props) {
        super();
        this.next = this.next.bind(this)
        this.prev = this.prev.bind(this)
    }

    next(){
         this.slider.slickNext();
    }

    prev(){
        this.slider.slickPrev();
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
                        <div>
                            <Card className="image-box1 card w-100 ">
                                <img className="" src="/images/shoes 2.jpg" alt="shoes"/>
                                <Card.Body>
                                    <p className="product-name-on-card">PUMA Men's Alphacat Palmer Iced Tea Golf Shoe</p>
                                    <p className="product-price-on-card">Price: 3000TK</p>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card className="image-box1 card w-100">
                                <img className="" src="/images/shoes 3.jpg" alt="shoes"/>
                                <Card.Body>
                                    <p className="product-name-on-card">PUMA Men's Alphacat Palmer Iced Tea Golf Shoe</p>
                                    <p className="product-price-on-card">Price: 3000TK</p>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card className="image-box1 card w-100">
                                <img className="" src="/images/shoes 6.jpg" alt="shoes"/>
                                <Card.Body>
                                    <p className="product-name-on-card">PUMA Men's Alphacat Palmer Iced Tea Golf Shoe</p>
                                    <p className="product-price-on-card">Price: 3000TK</p>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card className="image-box1 card w-100 ">
                                <img className="" src="/images/shoes 7.jpg" alt="shoes"/>
                                <Card.Body>
                                    <p className="product-name-on-card">PUMA Men's Alphacat Palmer Iced Tea Golf Shoe</p>
                                    <p className="product-price-on-card">Price: 3000TK</p>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card className="image-box1 card w-100 ">
                                <img className="" src="/images/shoes 8.jpg" alt="shoes"/>
                                <Card.Body>
                                    <p className="product-name-on-card">PUMA Men's Alphacat Palmer Iced Tea Golf Shoe</p>
                                    <p className="product-price-on-card">Price: 3000TK</p>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card className="image-box1 card w-100 ">
                                <img className="" src="/images/shoes 9.jpg" alt="shoes"/>
                                <Card.Body>
                                    <p className="product-name-on-card">PUMA Men's Alphacat Palmer Iced Tea Golf Shoe</p>
                                    <p className="product-price-on-card">Price: 3000TK</p>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card className="image-box1 card w-100 ">
                                <img className="" src="/images/shoes 10.jpg" alt="shoes"/>
                                <Card.Body>
                                    <p className="product-name-on-card">PUMA Men's Alphacat Palmer Iced Tea Golf Shoe</p>
                                    <p className="product-price-on-card">Price: 3000TK</p>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card className="image-box1 card w-100">
                                <img className="" src="/images/shoes 11.jpg" alt="shoes"/>
                                <Card.Body>
                                    <p className="product-name-on-card">PUMA Men's Alphacat Palmer Iced Tea Golf Shoe</p>
                                    <p className="product-price-on-card">Price: 3000TK</p>
                                </Card.Body>
                            </Card>
                        </div>
                    </Slider>
                </div>


            </Container>
            </Container>
        );
    }
}

export default NewArrival;