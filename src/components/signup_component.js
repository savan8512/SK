import { Link } from 'react-router-dom';
import React, { Component } from "react";
import app from "./firebase_config";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
const auth = getAuth(app);


export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: "",
            lname: "",
            email: "",
            phoneNo: "",
            password: "",
            verifyButton: false,
            verifyotp: false,
            otp: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onSignInSubmit = this.onSignInSubmit.bind(this);
        this.verifyCode = this.verifyCode.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        const { fname, lname, email, phoneNo, password } = this.state;
        console.log(fname, lname, email, phoneNo, password);
        fetch("http://localhost:5000/register", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                fname,
                email,
                lname,
                password,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userRegister");
            });
    }
    onCaptchVerify() {
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',
            'callback': (response) => {
                this.onSignInSubmit();
            },
        }, auth);
    }
    onSignInSubmit() {
        this.onCaptchVerify();
        const phoneNumber = "+91" + this.state.phoneNo;
        const appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
            .then((confirmationResult) => {  
                window.confirmationResult = confirmationResult;
                alert("otp sended");
                this.setState({ verifyotp: true })
                // ...
            }).catch((error) => {
                // Error; SMS not sent
                // ...
            });
    }
    verifyCode() {
        window.confirmationResult.confirm(this.state.otp).then((result) => {
            // User signed in successfully.
            const user = result.user;
            console.log(user);
            alert("verification Done")
            // ...
        }).catch((error) => {
            alert("invalid otp")
            // User couldn't sign in (bad verification code?)
            // ...
        });
    }
    changeMobile(e) {
        this.setState({ phoneNo: e.target.value }, function () {
            if (this.state.phoneNo.length == 10) {
                this.setState({
                    verifyButton: true,
                })
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
                                            <span className="section-heading-lower">Sign Up</span>
                                        </h2>
                                        <label>First name</label>
                                        <div className="inputBox">
                                            <input
                                                type="text"
                                                placeholder="First name"
                                                onChange={(e) => this.setState({ fname: e.target.value })}
                                            />
                                        </div>
                                        <label>Last name</label>
                                        <div className="inputBox">
                                            <input
                                                type="text"
                                                placeholder="Last name"
                                                onChange={(e) => this.setState({ lname: e.target.value })}
                                            />
                                        </div>
                                        <label>Email address</label>
                                        <div className="inputBox">
                                            <input
                                                type="email"
                                                placeholder="Enter email"
                                                onChange={(e) => this.setState({ email: e.target.value })}
                                            />
                                        </div>
                                        <label>Phone No</label>
                                        <div className="inputBox">
                                            <input
                                                type="number"
                                                placeholder="Enter your PhoneNO"
                                                onChange={(e) => this.changeMobile(e)}
                                            />
                                        </div>
                                        {
                                            this.state.verifyButton ?
                                                <input
                                                    className='homee'
                                                    onClick={this.onSignInSubmit}
                                                    type="button"
                                                    value="verify"
                                                    placeholder="verify"
                                                /> : null
                                        }
                                        {this.state.verifyotp ?
                                            <div>
                                                <div className="inputBox">
                                                    <input
                                                        type="number"
                                                        placeholder="Enter Otp"
                                                        onChange={(e) => this.changeMobile(e)}  
                                                    />
                                                </div>
                                                <input
                                                    className='homee'
                                                    type="button"
                                                    value="submit"
                                                    placeholder="verify"
                                                    onClick={this.verifyCode}
                                                />
                                            </div>
                                            : null}
                                        {/* <div className="inputBox">
                                            <input
                                                type="button"
                                                placeholder="verify"
                                                onChange={(e) => this.changeMobile(e)}
                                            />
                                        </div>
                                            { this.setState.verifyButton?<input onClick={this.onCaptchVerify} placeholder="value" type="button" value="verify" ></input>:null}
                                            <br></br>
                                            <div className="inputBox">
                                            <input
                                                type="Otp"
                                                placeholder="Enter your otp"
                                                onClick={this.verifyCode}
                                                onChange={(e)=> this.setState({ otp: e.target.value})}
                                            />
                                        </div>
                                            { this.setState.verifyotp?<input onClick={this.verifyCode} type="button" value="otp" 
                                             >

                                            </input>:null} */}
                                        <br></br>
                                        <label>Password</label>
                                        <div className="inputBox">
                                            <input
                                                type="password"
                                                placeholder="Enter password"
                                                onChange={(e) => this.setState({ password: e.target.value })}
                                            />
                                        </div>
                                        <button type="submit" className="btn btn-dark">
                                            Sign Up
                                        </button>
                                        <div className="nav-item px-lg-4 last">
                                            <li className="nav-item px-lg-4">
                                                <Link to="/sign-in" className="nav-link text-uppercase">Sign in?</Link>
                                            </li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id='recaptcha-container'></div>
                        </div>
                    </form>
                </section></>
        );
    }
}
