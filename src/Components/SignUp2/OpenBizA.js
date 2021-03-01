import React, {useState} from 'react'
import LeftCoin from '../LeftCoin/Left'
import SubContent from './SubContent'
import SubContent2 from './SubContent2'
import SubContent3 from './SubContent3'
import './OpenBizA.css'
import {
    Link
  } from "react-router-dom";

const Screen2 = () => {
    
    const [showResults, setShowResults] = useState(false)
    const showSubContent = () => {
        setShowResults(true)
        setShowResults2(false)
        setShowResults3(false)
    }

    const [showResults2, setShowResults2] = useState(false)
    const showSubContent2 = () => {
        setShowResults2(true)
        setShowResults(false)
        setShowResults3(false)
    }

    const [showResults3, setShowResults3] = useState(false)
    const showSubContent3 = () => {
        setShowResults3(true)
        setShowResults(false)
        setShowResults2(false)
    }

    return(
        <div className="container-fluid full-height">
        <div className="row full-height">
            <div className="col-md-3 p-0 ">
                <LeftCoin/>
            </div>
            <div className="col-md-9">     
                <div class="row topbar">
                    <div className="col-md-6">
                        <Link to="/">
                            <span className="fa-stack fa-1x">
                                <i className="fa fa-square name bank-transfer fa-stack-2x"></i>
                                <i className="fa fa-chevron-left name2 fa-inverse fa-stack-1x"></i>
                            </span>
                        </Link>
                    </div>
                    <div className="col-md-6 d-flex justify-content-sm-end justify-content-md-end">
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
                            <div className="shadow-sm border border-bottom box1 p-2 mb-2 rounded">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="registered" name="cac" onClick={showSubContent} />
                                    <label className="form-check-label cac1" for="registered">
                                        <p>I have a registered business/ charity with CAC</p>
                                    </label>
                                </div>  
                                    {showResults ? <SubContent /> : null}
                            </div>
                            <div className="shadow-sm border-bottom box2 p-2 mb-2 rounded">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" id="no-reg" name="cac" onClick={showSubContent2} />
                                <label className="form-check-label" for="no-reg">
                                    <p>My business is not yet registered, I would like to register</p>
                                </label>
                            </div>
                                {showResults2 ? <SubContent2 /> : null}
                            </div>
                            <div className="shadow-sm box3 border-bottom p-2 mb-2 rounded">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" id="freelance" name="cac" onClick={showSubContent3} />
                                <label className="form-check-label" for="freelance">
                                    <p>I'm a freelancer I do business in my personal name</p>
                                </label>
                            </div>
                                {showResults3 ? <SubContent3 /> : null}
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