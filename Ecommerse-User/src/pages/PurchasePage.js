import React, {Component, Fragment} from 'react';
import NavMenuDeskTop from "../components/common/NavMenuDeskTop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import Contact from "../components/common/Contact";
import FooterDeskTop from "../components/common/FooterDeskTop";
import Purchase from "../components/Others/Purchase";

class PurchasePage extends Component {

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


                <div className="mt-5">
                   <Purchase/>
                </div>
                <div className="mt-5">

                </div>
                <FooterDeskTop/>
            </Fragment>
        );
    }
}

export default PurchasePage;