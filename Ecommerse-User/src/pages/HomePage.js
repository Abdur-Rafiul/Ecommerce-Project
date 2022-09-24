import React, {Component, Fragment} from 'react';
import FeaturedProducts from "../components/home/FeaturedProducts";
import Categories from "../components/home/Categories";
import Collection from "../components/home/Collection";
import NewArrival from "../components/home/NewArrival";
import HomeTop from "../components/home/HomeTop";
import {Container} from "react-bootstrap";
import NavMenuDeskTop from "../components/common/NavMenuDeskTop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import HomeTopMobile from "../components/home/HomeTopMobile";
import FooterDeskTop from "../components/common/FooterDeskTop";

class HomePage extends Component {

    componentDidMount() {
        window.scroll(0,0);
    }

    render() {
        return (
            <Fragment>


                <div className="Desktop">
                    <NavMenuDeskTop />
                    <HomeTop />
                </div>

                <div className="Mobile">
                    <NavMenuMobile />
                    <HomeTopMobile/>
                </div>

                <NewArrival />
                <FeaturedProducts />
                <Collection />
                <Categories />

                <FooterDeskTop/>




            </Fragment>
        );
    }
}

export default HomePage;