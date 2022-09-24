import React, {Component,Fragment} from 'react';
import {Breadcrumb, Col, Container, Modal, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class Notification extends Component {
    constructor() {
        super();
        this.state={
            NotificationData:[],
            isLoading:"",
            MainDiv:"d-none",
            NotificationModal:false,
            NotificationDate:"",
            NotificationTitle:"",
            NotificationMsg:"",
        }
        this.handleClose=this.handleClose.bind(this);
        this.handleShow=this.handleShow.bind(this);
    }
    handleClose(){
        this.setState({NotificationModal:false})
    }
    handleShow(event){
        this.setState({NotificationModal:true});
        let Ndate= event.target.getAttribute('data-date');
        let Nmsg= event.target.getAttribute('data-msg');
        let Ntitle= event.target.getAttribute('data-title');
        this.setState({NotificationDate:Ndate,NotificationMsg:Nmsg,NotificationTitle:Ntitle})
    }



    render() {
        return (
            <Fragment>
                <Container  className=" TopSection">
                    <Row  className="d-flex justify-content-center">
                        <Col  md={10} lg={10} sm={12} xs={12}>
                            <Container>

                            </Container>
                        </Col>
                    </Row>
                </Container>

                <Container className="TopSection">


                    <Row  className="d-flex justify-content-center">
                        <Col  md={10} lg={10}  sm={12} xs={12}>
                            <Breadcrumb className="shadow-sm mt-2 bg-white">
                                <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                                <Breadcrumb.Item><Link to="/notification">Notification</Link></Breadcrumb.Item>
                            </Breadcrumb>
                            <Container className="mt-1">
                                <Row className="shadow-sm animated slideInDown bg-white p-4">
                                  <p>A utility for converting HTML strings into React components. Avoids the use of dangerouslySetInnerHTML and converts standard HTML elements, attributes and inline styles into their React equivalents.</p>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>

                <Modal show={this.state.NotificationModal} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <h6> <i className="fa theme-text fa-bell"/> Date: {this.state.NotificationDate}</h6>
                    </Modal.Header>
                    <Modal.Body>
                        <h6 className="notification-title">{this.state.NotificationTitle}</h6>
                        <p>{this.state.NotificationMsg}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn site-btn" onClick={this.handleClose}>
                            Close
                        </button>
                    </Modal.Footer>
                </Modal>
            </Fragment>
        );
    }
}

export default Notification;