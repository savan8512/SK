import cafe from "./img/cafe.jpg";
import React from "react";
import ss from "./img/ss.png";
import Header from "./Header";

const About = () => {
    return (
        <>

            <>
                <title></title>
                <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
                {/* Font Awesome icons (free version)*/}
                {/* Google fonts*/}
                <link
                    href="https://fonts.googleapis.com/css?family=Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i"
                    rel="stylesheet"
                />
                {/* Core theme CSS (includes Bootstrap)*/}
                <link href="css/styles.css" rel="stylesheet" />
                <div className="About">
                    <header>
                        <h1 className="site-heading text-center text-faded d-none d-lg-block">
                            <span className="site-heading-upper text-primary mb-3"><div className="Name">SK</div>
                                Starking
                            </span>
                        </h1>
                    </header>
                    {/* Navigation*/}
                    <Header/>

                    
                    <section className="page-section about-heading">
                        <div className="container">
                            <img
                                className="img-fluid rounded about-heading-img mb-3 mb-lg-0"
                                src={cafe}
                                alt="..."
                            />
                            <div className="about-heading-content">
                                <div className="row">
                                    <div className="col-xl-9 col-lg-10 mx-auto">
                                        <div className="bg-faded rounded p-5">
                                            <h2 className="section-heading mb-4">
                                                <span className="section-heading-upper">
                                                    Strong Coffee, Strong Roots
                                                </span>
                                                <span className="section-heading-lower">About Our Cafe</span>
                                            </h2>
                                            <p>
                                                Founded in 1987 by the Hernandez brothers, our establishment has
                                                been serving up rich coffee sourced from artisan farmers in
                                                various regions of South and Central America. We are dedicated
                                                to travelling the world, finding the best coffee, and bringing
                                                back to you here in our cafe.
                                            </p>
                                            <p className="mb-0">
                                                We guarantee that you will fall in
                                                <em>lust</em>
                                                with our decadent blends the moment you walk inside until you
                                                finish your last sip. Join us for your daily routine, an outing
                                                with friends, or simply just to enjoy some alone time.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <footer>
                        <section>

                            <div className="container">
                                <div className="row mb-5">
                                    <div className="col-md-2 mb-md-0 mb-4 ">
                                        <div>
                                            <h1 className="site-heading text-center text-faded d-none d-lg-block ">
                                                <span className="site-heading-upper text-primary mb-3"><div className="Name">SK</div>
                                                    Starking
                                                </span>
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="col-md-2 mb-md-0 mb-4 pd">
                                        <h3 className="footer-heading">About Us </h3>
                                        <ul className="box list-unstyled">
                                            <li><a href="#"> Our Company </a></li>
                                        </ul>
                                        <ul className="box list-unstyled">
                                            <li><a href="#"> Coffeehouse </a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-2 mb-md-0 mb-4 pd">
                                        <h3 className="footer-heading"> Responsibility </h3>
                                        <ul className="box list-unstyled">
                                            <li><a href="#"> Community </a></li>
                                        </ul>
                                        <ul className="box list-unstyled">
                                            <li><a href="#"> Ethical Sourcing</a></li>
                                        </ul>
                                        <ul className="box list-unstyled">
                                            <li><a href="#"> Environment</a></li>
                                        </ul>
                                        <ul className="box list-unstyled">
                                            <li><a href="#"> Diversity </a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-2 mb-md-0 mb-4 pd">
                                        <h3 className="footer-heading">Quick Links</h3>
                                        <ul className="box list-unstyled">
                                            <li><a href="#"> Careers </a></li>
                                        </ul>
                                        <ul className="box list-unstyled">
                                            <li><a href="#"> Season's Gifting </a></li>
                                        </ul>
                                        <ul className="box list-unstyled">
                                            <li><a href="#"> FAQs </a></li>
                                        </ul>
                                        <ul className="box list-unstyled">
                                            <li><a href="#"> Customer Service </a></li>
                                        </ul>
                                        <ul className="box list-unstyled">
                                            <li><a href="#"> Delivery </a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-2 mb-md-0 mb-4 pd">
                                        <h3 className="footer-heading"> Social Media </h3>
                                        <ul className="ft-social-list">
                                            <li >
                                                <a href="#" target="_blank">
                                                    <img src="https://www.starbucks.in/assets/icon/instagram.svg" alt="instagram" />
                                                </a>
                                            </li>
                                            <li >
                                                <a href="@" target="_blank">
                                                    <img src="https://www.starbucks.in/assets/icon/facebook.svg" alt="facebook" />
                                                </a>
                                            </li>
                                            <li >
                                                <a href="#" target="_blank" >
                                                    <img src="https://www.starbucks.in/assets/icon/twitter.svg" alt="twitter" />
                                                </a>
                                            </li>
                                        </ul>
                                        <div>
                                            <figure className="snip1566">
                                                <img src={ss} alt="sq-sample14"/>
                                                <figcaption>
                                                    <h1 className="site-heading text-center text-faded d-none d-lg-block">
                                                        <span className="site-heading-upper text-primary mb-3"><div className="Name">SK</div>
                                                            Starking
                                                        </span>
                                                    </h1>
                                                </figcaption>
                                                <a href="#" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className="container">
                            <section className="ft-legal">
                                <ul className="ft-legal-list">
                                    <li>
                                        <a routerlink="" title="Web Accessiblity" href="/">
                                            Web Accessiblity
                                        </a>
                                    </li>
                                    <li>
                                        <a

                                            routerlink=""
                                            title="Privacy Statement"
                                            href="/"
                                        >
                                            Privacy Statement
                                        </a>
                                    </li>
                                    <li>
                                        <a routerlink="" title="Terms of Use" href="/">
                                            Terms of Use
                                        </a>
                                    </li>
                                    <li>
                                        <a routerlink="" title="Contact Us" href="/">
                                            Contact Us
                                        </a>
                                    </li>
                                    <li>
                                        <a routerlink="" href="/">
                                            © 2023 StarKings Coffee Company. All rights reserved.
                                        </a>
                                    </li>
                                </ul>
                            </section>

                        </div>
                    </footer>
                </div>
                {/* Bootstrap core JS*/}
                {/* Core theme JS*/}
            </>


        </>
    );
};
export default About;