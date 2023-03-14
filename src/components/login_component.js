import { Link } from 'react-router-dom';
import React, { Component } from "react";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        const { email, password } = this.state;
        console.log(email, password);
        fetch("http://localhost:5000/login-user", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userRegister");
                if (data.status == "ok") {
                    alert("login successful");
                    window.localStorage.setItem("token", data.data);
                    window.localStorage.setItem("loggedIn", true);
                    window.location.href = "./userDetails";
                }
            });
    }
    render() {
        return (
            <>
                <section className="page-section1 cta ">
                    <form onSubmit={this.handleSubmit}>
                    <div className="container">
                    <Link to="/" className='homee'>Back to Home ?</Link>
                        <div className="row">
                            <div className="col-xl-9 mx-auto">
                                <div className="cta-inner1 bg-faded text-center rounded ">
                                    <h2 className="section-heading mb-4">
                                        <span className="section-heading-lower">Sign In</span>
                                    </h2>
                                    <label>Email address</label>
                                    <div className="inputBox">
                                        <input
                                            type="email"
                                            placeholder="Enter email"
                                            onChange={(e) => this.setState({ email: e.target.value })}
                                        />

                                    </div>                    
                                    <label>Password</label>
                                    <div className="inputBox">
                                        <input
                                            type="password"
                                            placeholder="Enter password"
                                            onChange={(e) => this.setState({ password: e.target.value })}
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-dark">
                                        Submit
                                    </button>
                                    <div className="nav-item px-lg-4 last">
                                        <Link to="/sign-up" className="nav-link text-uppercase">Sign Up</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </form>
                </section>
            </>
        );
    }
}
