import React from 'react'
import LeftCoin from '../LeftCoin/Left'
import './LastReg.css'
import {
    Link, Route
  } from "react-router-dom";

const Screen3 = () => {
    return(
        <div className="container-fluid full-height">
        <div className="row full-height">
            <div className="col-md-3 p-0 ">
                <LeftCoin/>
            </div>
            <div className="col-md-9">     
             <div class="row d-flex topbar">
                 <div className="col-md-8 justify-content-start">
                 <Link to="/signup2">
                <a><i className="fa fa-chevron-left back2 fa-md"></i></a>
                </Link>
                 </div>
                 <div className="col-md-4 justify-content-end">
                 <p className="member">Already a member? <Link to="/signin"><span className="sign-in"> <a> Sign In </a></span></Link></p>
                 </div>
            </div>
            
                <div className="create d-flex">
                <div class="col-md-5">
                    <div className="new-acc">
                        <h3>Open a new business account</h3>
                        <p className="">A short description about account types</p>
                    </div>
                    <form>
                        <div className="shadow-sm border-bottom box1 p-2 mb-2 rounded">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="cac"/>
                                <label className="form-check-label" for="cac">
                                    <p>I have a registered business/ charity with CAC</p>
                                </label>
                            </div>
                        </div>
                        <div className="shadow-sm border border-danger border-bottom box2 p-2 mb-2 rounded">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="no-reg"/>
                            <label className="form-check-label cac2" for="no-reg">
                                <p>My business is not yet registered, I would like to register</p>
                                    Everything you need to start your business
                            </label>
                        </div>
                        <div className="click2">
                                <p><i className="fa fa-check fa-md"></i > Registered business with the CAC</p>
                                <p><i className="fa fa-check fa-md"></i > Tax identification number</p>
                                <p><i className="fa fa-check fa-md"></i > Your account will be automatically opened on completion</p>
                            </div>
                        </div>
                        <div className="shadow-sm box3 border-bottom p-2 mb-2 rounded">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="freelance"/>
                            <label className="form-check-label" for="freelance">
                                <p>I'm a freelancer I do business in my personal name</p>
                            </label>
                        </div>
                        </div>
                        <div className="d-md-block">
                            <Link to="./Dashboard">
                                <button type="button" className="btn btn-next p-2">Next</button>
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


export default Screen3