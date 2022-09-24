import React, {Component, Fragment} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import {Container} from "react-bootstrap";

class SliderHome extends Component {
    render() {

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoPlay:true,
            autoplaySpeed:3000
        };

        return (
            <Fragment>
                <Container fluid={true} className="slider ">


            <div>

                <Slider  {...settings} >
                    <div>
                        <img className="slider-img" src="/images/cart_4.jpg" alt=""/>
                    </div>

                    <div>
                        <img className="slider-img" src="/images/ba -1.jpg" alt=""/>
                    </div>

                </Slider>
            </div>
                </Container>
            </Fragment>
        );
    }
}

export default SliderHome;