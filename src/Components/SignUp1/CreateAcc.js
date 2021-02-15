import React from 'react';
import './CreateAcc.css';
import LeftCoin from '../LeftCoin/Left'
import {
    Link, Route
  } from "react-router-dom";


function Screen1() {
    return (
        <div className="container-fluid full-height">
        <div className="row full-height">
            <div className="col-md-3 p-0 ">
                <LeftCoin/>
            </div>
            <div className="col-md-9 full-height">
                <div className="d-flex justify-content-end login">
                <p className="member">Already a member? <Link to="/signin"> <a className="sign-in">Sign In</a></Link></p>
                </div>
            
                <div className="create d-flex">
                    <div class="col-md-5">
                        <h3>Create your account</h3>
                        <p>A short description about account types</p>
                        <form>
                            <div className="form-floating mb-3">
                                <input className="form-control first form-input" autoComplete="off" id="first_name" placeholder="First name"></input>
                                <label for="first_name">First name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input className="form-control form-input" id="last_name" autoComplete="off" placeholder="Last name"></input>
                                <label for="last_name">Last name</label>
                            </div>

                            <div className="row mb-3">
                            <div className="form-floating col-md-3">
                                <input className="form-control form-input" id="country" autoComplete="off" placeholder="Country"></input>
                                <label for="country">Country</label>
                            </div>
                            <div className="form-floating col-md-9">
                                <input className="form-control form-input" id="mobile_number" autoComplete="off" placeholder="Mobile number"></input>
                                <label for="mobile_number">Mobile Number</label>
                            </div>
                            </div>

                            <div className="form-floating mb-3">
                                <input className="form-control form-input" id="email_address" placeholder="Email address"></input>
                                <label for="email_address">Email address</label>
                            </div>
                            <div className="d-md-block">
                            <Link to="/signup2">
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

export default Screen1