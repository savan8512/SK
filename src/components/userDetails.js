import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class UserDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: "",
        };
    }
    logOut=()=>{
        window.localStorage.clear();
        window.location.href ="./sign-in"
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
                console.log(data, "userData");
                this.setState({ userData: data.data });
            });
    }
    render() {
        return (
            //   <div>
            //     Name<h1>{this.state.userData.fname}</h1>
            //     Email <h1>{this.state.userData.email}</h1>
            //   </div>

            <>
                <section className="ppppp cta">
                    <div className="container">
                    <Link to="/" className='homee'>Back to Home ?</Link>
                        <div className="row">
                            <div className="col-xl-9 mx-auto">
                                <div className="cta-inner bg-faded text-center rounded">
                                    <h2 className="section-heading mb-5">
                                        <span className="section-heading-upper">Name</span>
                                        <span className="section-heading-lower">{this.state.userData.fname}</span>
                                    </h2>
                                    <h2 className="section-heading mb-5">
                                        <span className="section-heading-upper">Email</span>
                                        <span className="section-heading-lower">{this.state.userData.email}</span>
                                    </h2>
                                <button onClick={this.logOut}>Log out</button>
                                <button><Link to="/" className="bn">Home</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>


        );
    }
}
