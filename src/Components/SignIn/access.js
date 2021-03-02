import React from 'react';
import './access.css';
import '../LeftCoin/Left.css'
import Logo from '../../images/logo.svg'
import CoinImage from '../../images/coins.png'
import {
    Link
  } from "react-router-dom";

function Screen4() {
    return (
        <div className="container-fluid full-height">
        <div className="row full-height">
            <div className="col-md-3 p-0 ">
                {/* <LeftCoin/> */}
            <div className="l-section">
                <div className="pad-32">
                <header>
                    <img className="logo" src={Logo} alt="Brand-logo"/>
                </header>
                {/* <div className="page-tab">

                </div> */}
                <div className="new-biz">
                <h1>Create multiple sub-account</h1>
                <p>Organise your business finances easily
                    with multiple accounts. No limits! </p>
                <img src={CoinImage} className="img-fluid" alt="Coin Safe" />
                <footer>
                    <p>&copy; 2020 Prospa Inc</p>
                </footer>
            </div>
            </div>
        </div>
            </div>
            <div className="col-md-9 full-height">
                <div className="d-flex justify-content-end login">
                    <p className="member">Don't have an account? <Link to="/"> <a className="sign-in">Sign Up</a></Link></p>
                </div>
            
                <div className="create d-flex">
                    <div class="col-md-5 welcome">
                        <h3>Welcome back to Prospa</h3>
                        <p>An account, with powerful, personalised tools all in one place</p>
                        <form>

                            <div className="form-floating info mb-3">
                                <input className="form-control form-input" id="email_address" placeholder="Email address"></input>
                                <label for="email_address">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input className="form-control form-input" id="last_name" autoComplete="off" placeholder="Enter Password"></input>
                                <label for="last_name">Enter password</label>
                            </div>
                            <div className="d-md-block">
                                <Link to="./dashboard">
                                    <button type="button" className="btn btn-next">Next</button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
               
            </div>
        </div>      
        </div>
    )
}

export default Screen4