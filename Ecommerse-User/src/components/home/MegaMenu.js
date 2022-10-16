import React, {Component, Fragment} from 'react';
import {Container} from "react-bootstrap";

class MegaMenu extends Component {





    MenuItemClick=(event)=>{
        event.target.classList.toggle('active');
        let panel = event.target.nextElementSibling;
        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
        }else{
            panel.style.maxHeight = panel.scrollHeight+ "px";
        }
    }



    render() {

        let ParentList = this.props.data;
       let MyView = ParentList.map((ParentList,i)=>{
            return <div key={i.toString()}>

                <button onClick={this.MenuItemClick} className="accordion"><img className="accordionMenuIcon"  src={'http://'+ParentList.ParentCategoryImg} />{ParentList.ParentCategoryName}</button>

                <div className="panel">
                    <ul>


                        {
                            (ParentList.Subcategory).map((ChildList, i)=>{
                                return <li><a href="" className="accordionItem">{ChildList.cat2_name}</a> </li>
                            })
                        }

                    </ul>
                </div>

            </div>
        })
        return (
            <Fragment>
                <Container fluid={true}>


            <div className="accordionMenuDiv">
                <div className="accordionMenuDivInside">

                    {MyView}

            </div>
            </div>
                </Container>
            </Fragment>
        );
    }
}

export default MegaMenu;