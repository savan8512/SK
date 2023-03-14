import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Product1 from './img/Product1.jpeg';
import Product2 from './img/Product2.jpeg';
import Product3 from './img/Product3.jpeg';

const Product = () => {
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
            {/* Navigation*/}
            <Header />
            <section className="page-section">
                <div className="container">
                    <div className="product-item">
                        <div className="product-item-title d-flex">
                            <div className="bg-faded p-5 d-flex ms-auto rounded">
                                <h2 className="section-heading mb-0">
                                    <span className="section-heading-upper">
                                        Blended to Perfection
                                    </span>
                                    <span className="section-heading-lower">Coffees &amp; Teas</span>
                                </h2>
                            </div>
                        </div>
                        <img
                            className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
                            src={Product1}
                            alt="..."
                        />
                        <div className="product-item-description d-flex me-auto">
                            <div className="bg-faded p-5 rounded">
                                <p className="mb-0">
                                    We take pride in our work, and it shows. Every time you order a
                                    beverage from us, we guarantee that it will be an experience worth
                                    having. Whether it's our world famous Venezuelan Cappuccino, a
                                    refreshing iced herbal tea, or something as simple as a cup of
                                    speciality sourced black coffee, you will be coming back for more.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="page-section">
                <div className="container">
                    <div className="product-item">
                        <div className="product-item-title d-flex">
                            <div className="bg-faded p-5 d-flex me-auto rounded">
                                <h2 className="section-heading mb-0">
                                    <span className="section-heading-upper">
                                        Delicious Treats, Good Eats
                                    </span>
                                    <span className="section-heading-lower">
                                        Bakery &amp; Kitchen
                                    </span>
                                </h2>
                            </div>
                        </div>
                        <img
                            className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
                            src={Product2}
                            alt="..."
                        />
                        <div className="product-item-description d-flex ms-auto">
                            <div className="bg-faded p-5 rounded">
                                <p className="mb-0">
                                    Our seasonal menu features delicious snacks, baked goods, and even
                                    full meals perfect for breakfast or lunchtime. We source our
                                    ingredients from local, oragnic farms whenever possible, alongside
                                    premium vendors for specialty goods.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="page-section">
                <div className="container">
                    <div className="product-item">
                        <div className="product-item-title d-flex">
                            <div className="bg-faded p-5 d-flex ms-auto rounded">
                                <h2 className="section-heading mb-0">
                                    <span className="section-heading-upper">
                                        From Around the World
                                    </span>
                                    <span className="section-heading-lower">
                                        Bulk Speciality Blends
                                    </span>
                                </h2>
                            </div>
                        </div>
                        <img
                            className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
                            src={Product3}
                            alt="..."
                        />
                        <div className="product-item-description d-flex me-auto">
                            <div className="bg-faded p-5 rounded">
                                <p className="mb-0">
                                    Travelling the world for the very best quality coffee is something
                                    take pride in. When you visit us, you'll always find new blends
                                    from around the world, mainly from regions in Central and South
                                    America. We sell our blends in smaller to large bulk quantities.
                                    Please visit us in person for more details.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            {/* Bootstrap core JS*/}
            {/* Core theme JS*/}
        </>

    );
};
export default Product;