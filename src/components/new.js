import React, { Component } from "react";

<>
{/* Hello world */}
<meta charSet="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title />
<link rel="stylesheet" type="text/css" href="style.css" />
<section className="login">
  <div className="login__content">
    <div className="login__img">
      <img
        src="https://i.pinimg.com/564x/20/41/99/2041995f89ba496e65e03a184bdd3904.jpg"
        alt="img"
      />
    </div>
    <div className="login__forms">
      {/* ============= Sign in page =================== */}
      <form action="" className="login__registre" id="login-in">
        <h1 className="login__title">Sign In</h1>
        <div className="login__box">
          <i className="bx bx-user login__icon" />
          <input
            type="text"
            placeholder="Username"
            className="login__input"
          />
        </div>
        <div className="login__box">
          <i className="bx bx-lock login__icon" />
          <input
            type="password"
            placeholder="Password"
            className="login__input"
          />
        </div>
        <a href="#" className="login__forget">
          Forget password?
        </a>
        <a href="#" className="login__button">
          Sign In
        </a>
        <div className="">
          <span className="login__acount">Don't have an Account?</span>
          <span className="login__signin" id="sign-up">
            Sign Up
          </span>
        </div>
      </form>
      {/* ============= Sign Up page =================== */}
      <form action="" className="login__create none" id="login-up">
        <h1 className="login__title">Create Account</h1>
        <div className="login__box">
          <i className="bx bx-user login__icon" />
          <input
            type="text"
            placeholder="Username"
            className="login__input"
          />
        </div>
        <div className="login__box">
          <i className="bx bx-at login__icon" />
          <input type="email" placeholder="Email" className="login__input" />
        </div>
        <div className="login__box">
          <i className="bx bx-lock login__icon" />
          <input
            type="password"
            placeholder="Passoword"
            className="login__input"
          />
        </div>
        <a href="#" className="login__forget">
          Forget password?
        </a>
        <a href="#" className="login__button">
          Sign Up
        </a>
        <div>
          <span className="login__acount">Already have an Account?</span>
          <span className="login__signup" id="sign-in">
            Sign In
          </span>
        </div>
        <div className="login__social">
          <a href="#" className="login__social-icon">
            <i className="bx bxl-facebook" />
          </a>
          <a href="#" className="login__social-icon">
            <i className="bx bxl-twitter" />
          </a>
          <a href="#" className="login__social-icon">
            <i className="bx bxl-google" />
          </a>
        </div>
      </form>
    </div>
  </div>
</section>
</>
