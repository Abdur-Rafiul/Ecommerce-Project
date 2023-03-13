import React, {Component, Fragment} from 'react';
import NavMenuDesktop from "../components/common/NavMenuDeskTop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import FooterDesktop from "../components/common/FooterDeskTop";
import FooterMobile from "../components/common/FooterMobile";
import OrderList from "../components/Order/OrderList";
import {Redirect} from "react-router-dom";

import sessionHelper from "../SessionHelper/SessionHelper";

class OrderListPage extends Component {

    constructor() {
        super();
        this.state={
            RedirectStatus:false,
        }
    }

    pageRedirect=()=>{
        if(this.state.RedirectStatus===true){
            return(
                <Redirect to="/onboard"/>
            )
        }
    }

    componentDidMount() {
        window.scroll(0,0)
        let email= sessionHelper.getUserEmail();
        if(email===null){
            this.setState({RedirectStatus:true})
        }
    }


    render() {
        return (
            <Fragment>
                <div className="Desktop">
                    <NavMenuDesktop/>
                </div>
                <div className="Mobile">
                    <NavMenuMobile/>
                </div>

                <OrderList/>

                <div className="Desktop">
                    <FooterDesktop/>
                </div>
                <div className="Mobile">
                    <FooterMobile/>
                </div>

                {this.pageRedirect()}
            </Fragment>
        );
    }
}

export default OrderListPage;