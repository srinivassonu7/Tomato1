import React, { Component } from 'react';
import "./styles.css";
import logo1 from "./images/logo1.svg"
import p1 from "./images/p1.JPG";
class Home extends Component {

    render() {
        return (
        <div>
            <nav
            class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
            id="mainNav"
            >
            <div class="container">
                <a class="navbar-brand js-scroll-trigger" href="#page-top"
                >Project Name</a
                >
                <button
                class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded"
                type="button"
                data-toggle="collapse"
                data-target="#navbarResponsive"
                aria-controls="navbarResponsive"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                Menu
                <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item mx-0 mx-lg-1">
                    <a
                        class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                        href="#portfolio"
                        >Portfolio</a
                    >
                    </li>
                    <li class="nav-item mx-0 mx-lg-1">
                    <a
                        class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                        href="#about"
                        >About</a
                    >
                    </li>
                    <li class="nav-item mx-0 mx-lg-1">
                    <a
                        class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                        href="#contact"
                        >Contact</a
                    >
                    </li>
                </ul>
                </div>
            </div>
            </nav>
            {/*<!-- Masthead-->*/}
            <header class="masthead bg-primary text-white text-center">
                <div class="container d-flex align-items-center flex-column">
                    <img
                    class="masthead-avatar mb-2"
                    src={logo1}
                    alt="..."
                    />
                </div>
            </header>
            {/*<!-- Portfolio Section-->*/}
            <section class="page-section portfolio" id="portfolio">
                <div class="container">
                    {/*<!-- Portfolio Section Heading-->*/}
                    <h2
                    class="page-section-heading text-center text-uppercase text-secondary mb-0"
                    >
                    Portfolio
                    </h2>
                    {/*<!-- Icon Divider-->*/}
                    <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                    </div>
                    {/*<!-- Portfolio Grid Items-->*/}
                    <div class="row justify-content-center">
                    {/*<!-- Portfolio Item 1-->*/}
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div
                        class="portfolio-item mx-auto"
                        data-toggle="modal"
                        data-target="#portfolioModal1"
                        >
                        <div
                            class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"
                        >
                            <div
                            class="portfolio-item-caption-content text-center text-white"
                            >
                            <i class="fas fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img
                            class="img-fluid"
                            src={p1}
                            alt="..."
                        />
                        </div>
                    </div>
                    {/*<!-- Portfolio Item 2-->*/}
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div
                        class="portfolio-item mx-auto"
                        data-toggle="modal"
                        data-target="#portfolioModal2"
                        >
                        <div
                            class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"
                        >
                            <div
                            class="portfolio-item-caption-content text-center text-white"
                            >
                            <i class="fas fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img
                            class="img-fluid"
                            src={p1}
                            alt="..."
                        />
                        </div>
                    </div>
                    {/*<!-- Portfolio Item 3-->*/}
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div
                        class="portfolio-item mx-auto"
                        data-toggle="modal"
                        data-target="#portfolioModal3"
                        >
                        <div
                            class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"
                        >
                            <div
                            class="portfolio-item-caption-content text-center text-white"
                            >
                            <i class="fas fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img
                            class="img-fluid"
                            src={p1}
                            alt="..."
                        />
                        </div>
                    </div>
                    {/*<!-- Portfolio Item 4-->*/}
                    <div class="col-md-6 col-lg-4 mb-5 mb-lg-0">
                        <div
                        class="portfolio-item mx-auto"
                        data-toggle="modal"
                        data-target="#portfolioModal4"
                        >
                        <div
                            class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"
                        >
                            <div
                            class="portfolio-item-caption-content text-center text-white"
                            >
                            <i class="fas fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img
                            class="img-fluid"
                            src={p1}
                            alt="..."
                        />
                        </div>
                    </div>
                    {/*<!-- Portfolio Item 5-->*/}
                    <div class="col-md-6 col-lg-4 mb-5 mb-md-0">
                        <div
                        class="portfolio-item mx-auto"
                        data-toggle="modal"
                        data-target="#portfolioModal5"
                        >
                        <div
                            class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"
                        >
                            <div
                            class="portfolio-item-caption-content text-center text-white"
                            >
                            <i class="fas fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img
                            class="img-fluid"
                            src={p1}
                            alt="..."
                        />
                        </div>
                    </div>
                    {/*<!-- Portfolio Item 6-->*/}
                    <div class="col-md-6 col-lg-4">
                        <div
                        class="portfolio-item mx-auto"
                        data-toggle="modal"
                        data-target="#portfolioModal6"
                        >
                        <div
                            class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"
                        >
                            <div
                            class="portfolio-item-caption-content text-center text-white"
                            >
                            <i class="fas fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img
                            class="img-fluid"
                            src={p1}
                            alt="..."
                        />
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </div>
        );
        }
}

export default Home;