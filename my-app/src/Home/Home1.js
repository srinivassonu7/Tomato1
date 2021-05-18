import React, { Component } from 'react';
import logo1 from "../images/logo1.svg";
import logo2 from "../images/undraw_knowledge_g5gf.svg";
import wallpaper2 from "../images/wallpaper2.png";
import p1 from "../images/p1.JPG"

//import "./Home1.css";
import HomeImages from"./homeImages.js"
import Urls from "./imageUrls.js"
import {Link} from 'react-router-dom'
import './Home1.css'


class Home1 extends Component {
    createImgcomp(props1) {
        return (
          <HomeImages
            key={props1.id}
            title={props1.title}
            imgUrl={props1.imgUrl}
            cTitle={props1.cTitle}
            cText={props1.cText}
            fadeOption={props1.fadeOption}
            alt={props1.alt}
          />
        );
      }
    render() {
        return (
            <div>
                
                {/*<!-- Masthead-->*/}
                <div class="" >
                <header class="masthead bg-secondary text-white text-center" >
                    {/*<img src={wallpaper2} alt="Placeholder-Image"/>*/}
                    <section>
                        <div class="container   ">
                            <div class="row">
                                <div class="col d-flex align-items-center justify-content-center" >
                                    <img
                                    class="masthead-avatar img-fluid "
                                    src={logo2}
                                    alt="..."
                                    />
                                </div>
                                <div class="col d-flex align-items-center justify-content-center">
                                    <div class="">
                                    <div class="row">
                                    <p class=" lead">For Plant Disease Prediction Click Here</p>
                                
                                    </div>
                                    <br></br>
                                    <div class="row-6 ">
                                    <Link to="/Prediction">
                                    <a href=""  class="btn btn-outline-primary btn-lg text-uppercase font-weight-bold " role="button">Get Started</a>
                                    </Link>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div id="/about"> </div>
                            </div>
                    </section>
                </header>
                
                </div>
                {/*Leaf Images Description*/}
               
               <div class="" >
                    <h1 class="main-title" >Sample Tomato Leaf Diseases</h1>
                    {Urls.map(i => (this.createImgcomp(i)))}
                </div>
                
                
                
            </div>
        );
    }
}

export default Home1;