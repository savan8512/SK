import { Component } from "react";
import React from "react";
import { Link } from 'react-router-dom';
var t,ans;
// const Header = () => {
    export default class Header extends Component { 

        constructor(props) {
            super(props);
            this.state = {
                userData: "",
            };
        }
        componentDidMount() {
            fetch("http://localhost:5000/userData", {
                method: "POST",
                crossDomain: true,
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify({
                    token: window.localStorage.getItem("token"),
                }),
            })
                .then((res) => res.json())
                .then((data) => {
                    // console.log(data, "userData");
                    this.setState({ userData: data.data });
                    t = this.state.userData.fname;
                    ans = t.substring(0, 1);
                    console.log(ans);
                });
        }
        render() {
            return (
        <>

            

            <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
                <div className="container">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item px-lg-4">
                                <Link to="/" className="nav-link text-uppercase">Home</Link>
                            </li>
                            <li className="nav-item px-lg-4">
                                <Link to="/about" className="nav-link text-uppercase">About</Link>
                            </li>
                            <li className="nav-item px-lg-4">
                                <Link to="/Product" className="nav-link text-uppercase">Products</Link>
                            </li>
                            <li className="nav-item px-lg-4">
                                <Link to="/Store" className="nav-link text-uppercase">Store</Link>
                            </li>
                            <li className="nav-item px-lg-4">
                                <Link to="/gallary" className="nav-link text-uppercase">Gallary</Link>
                            </li>
                            <li className="nav-item px-lg-4">
                                <Link to="/sign-in" className="nav-link text-uppercase">Connect</Link>
                            </li>
                            <li className="nav-item px-lg-4">
                            <span className="section-heading-lower">{this.state.userData.fname}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    );
};
    }