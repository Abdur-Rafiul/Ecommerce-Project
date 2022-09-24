import React, {Component, Fragment} from 'react';
import NavMenuDeskTop from "../components/common/NavMenuDeskTop";
import HomeTop from "../components/home/HomeTop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import HomeTopMobile from "../components/home/HomeTopMobile";
import NewArrival from "../components/home/NewArrival";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Collection from "../components/home/Collection";
import Categories from "../components/home/Categories";
import FooterDeskTop from "../components/common/FooterDeskTop";
import UserOnboard from "../components/common/UserOnboard";

class UserOnboardPage extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
                <div className="Desktop">
                    <NavMenuDeskTop />

                </div>

                <div className="Mobile">
                    <NavMenuMobile />

                </div>

             <UserOnboard/>
        <div className="">
                <FooterDeskTop/>
        </div>
            </Fragment>
        );
    }
}

export default UserOnboardPage;