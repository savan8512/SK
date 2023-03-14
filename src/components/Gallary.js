import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

const Gallary = () => {
    return (
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
            <header>
                <h1 className="site-heading text-center text-faded d-none d-lg-block">
                    <a>
                        <span className="site-heading-upper text-primary mb-3"><div className="Name">SK</div>
                            Starking
                        </span>
                    </a>
                </h1>
            </header>
            <Header />

            {/* box */}

            <div className="product-item-title d-flex container ">
                <div className="bg-faded p-5 box1 ms-auto rounded">
                    <h2 className="section-heading mb-0">
                        <span className="section-heading-upper">
                            Blended to Perfection
                        </span>
                        <span className="section-heading-lower">Coffees &amp; Teas</span>
                    </h2>
                </div>
            </div>
            <section>
                <link
                    href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Roboto:wght@300&display=swap"
                    rel="stylesheet"
                />
                <div className="container wrap">
                    
                    <div className="card">
                        <figure className="card__thumb">
                            <img
                                src="https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Small/100433.jpg"
                                alt="Picture by Kyle Cottrell"
                                className="card__image"
                            />
                            <figcaption className="card__caption">
                                
                                <p className="card__snippet">
                                </p>
                                <a href="" className="card__button cardmm">
                                    View Photo
                                </a>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="card">
                        <figure className="card__thumb">
                            <img
                                src="https://i.pinimg.com/736x/43/7e/00/437e0003240d46e3b98391c6411cc0b4--valentine-treats-ideas-for-valentines-day.jpg"
                                alt="Picture by Kyle Cottrell"
                                className="card__image"
                            />
                            <figcaption className="card__caption">
                                
                                <p className="card__snippet">
                                </p>
                                <a href="" className="card__button cardmm">
                                    View Photo
                                </a>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="card">
                        <figure className="card__thumb">
                            <img
                                src="https://i.pinimg.com/736x/1e/15/35/1e1535d0ced8c6b654c7d13e7c212c2d--spinach-alfredo-chicken-alfredo-pizza.jpg"
                                alt="Picture by Kyle Cottrell"
                                className="card__image"
                            />
                            <figcaption className="card__caption">
                                
                                <p className="card__snippet">
                                </p>
                                <a href="" className="card__button cardmm">
                                    View Photo
                                </a>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="card">
                        <figure className="card__thumb">
                            <img
                                src="https://avatars.mds.yandex.net/i?id=49fbe3a42f1f9d7896c4e041a4a844977ba0fab1-8183104-images-thumbs&n=13"
                                alt="Picture by Kyle Cottrell"
                                className="card__image"
                            />
                            <figcaption className="card__caption">
                                
                                <p className="card__snippet">
                                </p>
                                <a href="" className="card__button cardmm">
                                    View Photo
                                </a>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="card">
                        <figure className="card__thumb">
                            <img
                                src="https://avatars.mds.yandex.net/i?id=12a66abbde9c02134aa771e3ab014f30b462d0f1-7545493-images-thumbs&n=13"
                                alt="Picture by Kyle Cottrell"
                                className="card__image"
                            />
                            <figcaption className="card__caption">
                                
                                <p className="card__snippet">
                                </p>
                                <a href="" className="card__button cardmm">
                                    View Photo
                                </a>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="card">
                        <figure className="card__thumb">
                            <img
                                src="https://avatars.mds.yandex.net/i?id=51b8f2499666315f64b65f2cad2cfc55d1d50425-6209271-images-thumbs&n=13"
                                alt="Picture by Kyle Cottrell"
                                className="card__image"
                            />
                            <figcaption className="card__caption">
                                
                                <p className="card__snippet">
                                </p>
                                <a href="" className="card__button cardmm">
                                    View Photo
                                </a>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="card">
                        <figure className="card__thumb">
                            <img
                                src="https://cdn.100sp.ru/cache_pictures/081762812/thumb300"
                                alt="Picture by Kyle Cottrell"
                                className="card__image"
                            />
                            <figcaption className="card__caption">
                                
                                <p className="card__snippet">
                                </p>
                                <a href="" className="card__button cardmm">
                                    View Photo
                                </a>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="card">
                        <figure className="card__thumb">
                            <img
                                src="https://img-0.journaldunet.com/QLjoCddo_qMjUS_LdVURw0agdAo=/300x/smart/44ba794c4f1e4c75879e773e5a30c401/ccmcms-jdn/2033657.jpg"
                                alt="Picture by Kyle Cottrell"
                                className="card__image"
                            />
                            <figcaption className="card__caption">
                                
                                <p className="card__snippet">
                                </p>
                                <a href="" className="card__button cardmm">
                                    View Photo
                                </a>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </section>
            <Footer />
        </>

    );
};
export default Gallary;