import React, {useState} from 'react'
import LeftCoin from '../LeftCoin/Left'
import './OpenBizA.css'
import {
    Link
  } from "react-router-dom";

const Screen2 = () => {
    // const [showResults, setShowResults] = useState(true)
    return(
        <div className="container-fluid full-height">
        <div className="row full-height">
            <div className="col-md-3 p-0 ">
                <LeftCoin/>
            </div>
            <div className="col-md-9">     
             <div class="row d-flex topbar">
                 <div className="col-md-8 justify-content-start">
                 <Link to="/">
                <a><i className="fa fa-chevron-left back fa-md"></i></a>
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
                        <p>A short description about account types</p>
                    </div>
                    <form>
                        <div className="shadow-sm border border-danger border-bottom box1 p-2 mb-2 rounded">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="cac" />
                                <label className="form-check-label cac1" for="cac">
                                    <p>I have a registered business/ charity with CAC</p>
                                        As a registered business you'll get:
                                </label>
                            </div>
                                <div className="click1" id="results" >
                                {/* showResults? */}
                                <p><i className="fa fa-check fa-md"></i > Account in your business name</p>
                                {/* : null */}
                                <p><i className="fa fa-check fa-md"></i > Send to and receive transfers from all Nigerian banks</p>
                                <p><i className="fa fa-check fa-md"></i > Send to and receive transfers from all Nigerian banks</p>
                                </div>
                            
                            {/* <button onClick={()=>setShowResults(true)}>show</button>
                            <button onClick={()=>setShowResults(false)}>hide</button> */}

                        </div>
                        <div className="shadow-sm border-bottom box2 p-2 mb-2 rounded">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="no-reg"/>
                            <label className="form-check-label" for="no-reg">
                                <p>My business is not yet registered, I would like to register</p>
                            </label>
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
                        <Link to="/signup3">
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


export default Screen2