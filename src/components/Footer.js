import React from "react";
import ss from "./img/ss.png";
const Footer = () => {
    return (
        <>
        
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
                                        <img src={ss} alt="sq-sample14" />
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

        </>
    );
};
export default Footer;