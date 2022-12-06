import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import ApiURL from '../../api/AppURL';
import SessionHelper from '../../SessionHelper/SessionHelper';
import axios from "axios";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import cogoToast from "cogo-toast";
class NavMenuDeskTop extends Component {

    constructor() {
        super();
        this.state = {
            SearchKey: "",
            SearchRedirectStatus: false,
            userName: "Login",
            RedirectHome: false,
        }
        this.SearchChange = this.SearchChange.bind(this)
        this.SearchOnClick = this.SearchOnClick.bind(this)
        this.SearchRedirect = this.SearchRedirect.bind(this)
    }
    signOut=()=>{
        
        const token = SessionHelper.getUser()
        axios.delete(ApiURL.BaseUrl + "logout", { headers: { "Authorization": `Bearer ${token}` } })
        .then((response) => {

            if (response.status === 200) {

                //let userName = response.data.data.user.name;
                //console.log(response.data.data.user.name)

               // SessionHelper.setUserName(userName)
               cogoToast.success(response.data.data.message,{position:'bottom-center'});

                
            }
        })
        .catch((errors) => {

            console.log(errors)
        });
        SessionHelper.removeUser();
        this.setState({RedirectHome:true});
    }

    SearchChange(event) {
        let SearchKey = event.target.value;
        this.setState({ SearchKey: SearchKey });
    }

    SearchOnClick() {

        let SearchKey = this.state.SearchKey;
        if (SearchKey.length >= 2) {
            this.setState({ SearchRedirectStatus: true })
        }
    }

    SearchRedirect() {
        if (this.state.SearchRedirectStatus === true) {

            return <Redirect to={"/ProductListBySearch/" + this.state.SearchKey} />

        }
    }
    RedirectHome = () => {
        if (this.state.RedirectHome === true) {
            return <Redirect to="/" />
        }
    }
    componentDidMount() {
        let user = SessionHelper.getUserName();
        if (SessionHelper.getUser()) {

            const token = SessionHelper.getUser()
            //console.log(token)
            // const token = user.data.id; /*take only token and save in token variable*/
            axios.get(ApiURL.BaseUrl + "user", { headers: { "Authorization": `Bearer ${token}` } })
                .then((response) => {

                    if (response.status === 200) {

                        let userName = response.data.data.user.name;
                        //console.log(response.data.data.user.name)

                        SessionHelper.setUserName(userName)
                        
                    }
                })
                .catch((errors) => {

                    console.log(errors)
                });

        } else {


        }
    }
    render() {

        if (SessionHelper.getUser() === null) {
            return (


                <Container fluid={true} className="p-3 fixed-top bg-light shadow-sm">

                    <Row>
                        <Col lg={4} md={4} sm={12} xs={12}>
                            <Link to="/"><img className="nav-logo" src="/images/logo.jpg" /></Link>
                            <Link to="/cart" className="cart-btn"><i className="fa fa-shopping-cart"></i>4 items</Link>
                        </Col>

                        <Col lg={4} md={4} sm={12} xs={12}>
                            <div className="input-group w-100">
                                <input onChange={this.SearchChange} type="text" className="form-control" aria-label="Text Input" />
                                <button onClick={this.SearchOnClick} type="button" className="btn site-btn"><i className="fa fa-search"></i></button>
                            </div>
                        </Col>

                        <Col lg={4} md={4} sm={12} xs={12}>
                            <Link to="/favourite" className="btn"><i className="fa h4 fa-heart"></i><sup><span className="badge bg-danger">4</span> </sup></Link>
                            <Link to="/notification" className="btn"><i className="fa h4 fa-bell"></i><sup><span className="badge bg-danger">4</span> </sup></Link>
                            <a href="" className="btn"><i className="fa-3x text-success fa  fa-mobile-alt"></i></a>
                            <Link to="/onboard" className="h4 btn">Login</Link>

                        </Col>
                    </Row>
                    {this.SearchRedirect()}
                </Container>




            );

        } else {

            return (


                <Container fluid={true} className="p-3 fixed-top bg-light shadow-sm">

                    <Row>
                        <Col lg={4} md={4} sm={12} xs={12}>
                            <Link to="/"><img className="nav-logo" src="/images/logo.jpg" /></Link>
                            <Link to="/cart" className="cart-btn"><i className="fa fa-shopping-cart"></i>4 items</Link>
                        </Col>

                        <Col lg={4} md={4} sm={12} xs={12}>
                            <div className="input-group w-100">
                                <input onChange={this.SearchChange} type="text" className="form-control" aria-label="Text Input" />
                                <button onClick={this.SearchOnClick} type="button" className="btn site-btn"><i className="fa fa-search"></i></button>
                            </div>
                        </Col>

                        <Col lg={4} md={4} sm={12} xs={12}>
                            <Link to="/favourite" className="btn"><i className="fa h4 fa-heart"></i><sup><span className="badge bg-danger">4</span> </sup></Link>
                            <Link to="/notification" className="btn"><i className="fa h4 fa-bell"></i><sup><span className="badge bg-danger">4</span> </sup></Link>

                            <button  className="btn btn-light "></button>

                            <Dropdown className="d-inline mx-2" autoClose="outside">
                                <Dropdown.Toggle id="dropdown-autoclose-outside">
                                    {SessionHelper.getUserName()}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item >Order List</Dropdown.Item>
                                    <Dropdown.Item href="#">Favorite List</Dropdown.Item>
                                    <Dropdown.Item onClick={this.signOut}>SIGN OUT</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                        </Col>
                    </Row>
                    {this.SearchRedirect()}
                    {this.RedirectHome()}
                </Container>




            );
        }


    }
}

export default NavMenuDeskTop;