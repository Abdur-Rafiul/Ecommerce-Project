import React, {Component, Fragment} from 'react';
import {Container} from "react-bootstrap";

class MegaMenu extends Component {

    // constructor() {
    //     super();
    //     this.MegaMenu();
    // }

    // componentDidMount() {
    //    // this.MegaMenu();
    // }

    // MegaMenu(){
    //    var acc = document.getElementsByClassName("accordion");
    //   // var panel = document.getElementsByClassName("panel");
    //
    //    var accNum = acc.length;
    //
    //    var i;



       // for(i = 0; i < accNum; i++){
       //     acc[i].addEventListener("click",function (){
       //
       //         this.classList.toggle("active");
       //          var panel = this.nextElementSibling;
       //         if(panel.style.maxHeight){
       //             panel.style.maxHeight = null;
       //         }else{
       //             panel.style.maxHeight = panel.scrollHeight+ "px";
       //         }
       //
       //     })
       // }
    // }
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
        return (
            <Fragment>
                <Container fluid={true}>


            <div className="accordionMenuDiv">
                <div className="accordionMenuDivInside">
                    <button onClick={this.MenuItemClick} className="accordion"><img className="accordionMenuIcon" src="/images/boss.png"/>  Men's Clothing</button>
                    <div className="panel">
                        <ul>
                        <li><a href="#" className="accordionItem">Man1 Shirt</a></li>
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        </ul>
                    </div>

                    <button onClick={this.MenuItemClick} className="accordion"><img className="accordionMenuIcon" src="/images/boss.png"/>  Men's Clothing</button>
                    <div className="panel">

                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                    </div>

                    <button onClick={this.MenuItemClick} className="accordion"><img className="accordionMenuIcon" src="/images/boss.png"/>  Men's Clothing</button>
                    <div className="panel">
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                    </div>

                    <button onClick={this.MenuItemClick} className="accordion"><img className="accordionMenuIcon" src="/images/boss.png"/>  Men's Clothing</button>
                    <div className="panel">
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                    </div>

                    <button onClick={this.MenuItemClick} className="accordion"><img className="accordionMenuIcon" src="/images/boss.png"/>  Men's Clothing</button>
                    <div className="panel">
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                    </div>

                    <button onClick={this.MenuItemClick} className="accordion"><img className="accordionMenuIcon" src="/images/boss.png"/>  Men's Clothing</button>
                    <div className="panel">
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                    </div>

                    <button onClick={this.MenuItemClick} className="accordion"><img className="accordionMenuIcon" src="/images/boss.png"/>  Men's Clothing</button>
                    <div className="panel">
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                    </div>

                    <button onClick={this.MenuItemClick} className="accordion"><img className="accordionMenuIcon" src="/images/boss.png"/>  Men's Clothing</button>
                    <div className="panel">
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                    </div>

                    <button onClick={this.MenuItemClick} className="accordion"><img className="accordionMenuIcon" src="/images/boss.png"/>  Men's Clothing</button>
                    <div className="panel">
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                    </div>

                    <button onClick={this.MenuItemClick} className="accordion"><img className="accordionMenuIcon" src="/images/boss.png"/>  Men's Clothing</button>
                    <div className="panel">
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                    </div>

                    <button onClick={this.MenuItemClick} className="accordion"><img className="accordionMenuIcon" src="/images/boss.png"/>  Men's Clothing</button>
                    <div className="panel">
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                    </div>

                    <button onClick={this.MenuItemClick} className="accordion"><img className="accordionMenuIcon" src="/images/boss.png"/>  Men's Clothing</button>
                    <div className="panel">
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                    </div>

                    <button onClick={this.MenuItemClick} className="accordion"><img className="accordionMenuIcon" src="/images/boss.png"/>  Men's Clothing</button>
                    <div className="panel">
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                    </div>

                    <button onClick={this.MenuItemClick} className="accordion"><img className="accordionMenuIcon" src="/images/boss.png"/>  Men's Clothing</button>
                    <div className="panel">
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                    </div>

                    <button onClick={this.MenuItemClick} className="accordion"><img className="accordionMenuIcon" src="/images/boss.png"/>  Men's Clothing</button>
                    <div className="panel">
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                    </div>

                    <button onClick={this.MenuItemClick} className="accordion"><img className="accordionMenuIcon" src="/images/boss.png"/>  Men's Clothing</button>
                    <div className="panel">
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        <li><a href="#" className="accordionItem">Man Shirt</a></li>
                    </div>
                </div>


            </div>
                </Container>
            </Fragment>
        );
    }
}

export default MegaMenu;