import React from 'react';
import './access.css';
import LeftCoin from '../LeftCoin/Left'
import {
    Link
  } from "react-router-dom";

function Screen4() {
    return (
        <div className="container-fluid full-height">
        <div className="row full-height">
            <div className="col-md-3 p-0 ">
                <LeftCoin/>
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