import React, {useState} from 'react'
import './Dashboard.css'
import RecentBiz from './Transactions'
import ProfileImage from '../../images/Sonia.jpg'
import Chart from './chart'

import {
    Link, Route
  } from "react-router-dom";
import SideBar from './SideBar'
import { ChatRight } from 'react-bootstrap-icons';

function DashPage() {

  const [content, setContent] = useState(false)
  const showMore = () => {setContent(true)}

    return(
      
      <div>
        <div className="row">
          <div className="col-md-3">
            <div className="sticky-top">
            <SideBar />
            </div>
          </div>
          

          <div class=" main-panel p-0 col-md-9 col-lg-9">

            <div className="bg-white">
              <nav class="navbar navbar-expand-md p-3 navbar-light">
              <div className="container">
                <span class="navbar-brand nav-nav mb-0 h1">Dashboard</span>

                

                <div class="collapse navbar-collapse d-flex justify-content-md-end" id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item me-4">
                    <span className="fa-stack fa-1x">
                      <i className="fa fa-square up fa-inverse fa-stack-2x"></i>
                      <i className="fa fa-bell up2 fa-stack-1x"></i>
                    </span>
                    </li>
                    <li class="nav-item mr-0">
                      <img src={ProfileImage} className="rounded-circle img-fluid article-img" alt="Profile Image" />
                    </li>
                    
                  </ul>
                </div>
              
              </div>
            </nav>
            </div>
            
        
        
          <div class="container">
            <div className="container me-5">

              <div className="row mt-4">
                  <div className="col-md-9 kathy mt-4">
                      <h3 className="mb-0">Welcome back, Kathy</h3>
                      <p>Here's what has been happening in the last <Link to="#"><span className="text-danger"> <a> 7 days </a></span></Link></p>
                  </div>
                  <div className="col-md-3 d-flex justify-content-sm-end justify-content-md-end ml-0">
                    <div>
                      
                      <button type="button" className="btn btn-danger sub-btn p-2">Add a sub account</button>
                    </div>
                  </div>
              </div>




             {/* <div class="row">
              <div class="col-md-12 grid-margin"> */}
                <div className="">
                    <div class="d-flex justify-content-between">

                      <div class="col-md-5 curr p-3">
                        {/* <div class="d-flex"> */}
                          <div class="row d-flex">
                            <div className="col-md-8">
                              <h5 class="mb-0 dash-acc mt-2 ">CURRENT ACCOUNT</h5>
                              <p class="mb-0 dash-acc2 text-muted">PROVIDUS BANK - 9906533917</p>
                            </div>
                            <div className="col-md-4 d-flex justify-content-sm-end justify-content-md-end">
                              <p>
                                <span className="fa-stack fa-2x">
                                  <i className="fa fa-circle curr-icon fa-stack-2x"></i>
                                  <i className="fa fa-square curr-icon2 fa-stack-1x fa-inverse"></i>
                                </span>
                              </p>
                            </div>
                          </div>
                          <div>
                            <p class="mt-4 naira">N814,800<span className="kobo">.45</span></p>
                            </div>
                            {/* <div></div> */}
                          {/* <div class="wrapper my-auto ml-auto ml-lg-4">
                            <canvas height="50" width="100" id="stats-line-graph-1"></canvas>
                          </div> */}
                      </div> 
                      <div class="col-md-5 curr p-3">
                        {/* <div class="d-flex"> */}
                          <div class="row d-flex">
                            <div className="col-md-7">
                              <h5 class="mb-0 dash-acc mt-2">SAVINGS ACCOUNT</h5>
                              <p class="mb-0 dash-acc2 text-muted">SUB ACCOUNT - 12346789</p>
                            </div>
                            <div className="col-md-5 d-flex justify-content-sm-end justify-content-md-end">
                              <span className="fa-stack fa-2x">
                                <i className="fa fa-circle curr-i fa-stack-2x"></i>
                                <i className="fa fa-square curr-icons fa-stack-1x fa-inverse"></i>
                              </span>
                            </div>
                          </div>
                          <div>
                            <p class="mt-4 naira">N39,342<span className="kobo">.45</span></p>
                            </div>
                          {/* <div class="wrapper my-auto ml-auto ml-lg-4">
                            <canvas height="50" width="100" id="stats-line-graph-1"></canvas>
                          </div> */}
                      </div> 

                    </div>
                </div>

                <div>

                <div className="d-flex justify-content-between">
                  <div className="col-md-6 rounded curr p-3">

                    <div className="col-md-12 mb-4 mt-2 june-cash">
                        <h4>June summary</h4>
                    </div>
                    <div className="row">
                          <div className="col-md-3">
                            <p className="text-muted mb-0 money-in">Money in</p>
                            <p className="zeros">N 5,650,000</p>
                          </div>
                          <div className="col-md-3">
                            <p className="text-muted mb-0 money-in">Money out</p>
                            <p className="zeros">N 5,650,000</p>
                          </div>
                          <div className="col-md-3">
                            <p className="text-muted mb-0 money-in">Difference</p>
                            <p className="zeros">N 5,650,000</p>
                          </div>
                    </div>
                    <div className="graph">
                      <Chart />
                    </div>
                  </div>

                  <div className="col-md-5 curr rounded p-3">

                    <div className="col-md-12 mb-4 mt-2 june-cash">
                      <h4>Cash outflow</h4>
                    </div>
                    <div className="row mb-4">
                      <div className="col-md-5">
                          <div className="row">
                            <div className="col-md-3">
                            <span className="fa-stack fa-1x">
                                <i className="fa fa-square bank-transfer fa-stack-2x"></i>
                                <i className="fa fa-university fa-inverse fa-stack-1x"></i>
                              </span>
                            </div>
                            <div className="col-md-7">
                              <p className="text-muted cashflow">Bank Fees</p>
                            </div>
                          </div>
                      </div>

                      <div className="col-md-7">
                        <div>
                          <p className="mb-0  progress-zeros">- N 250,000</p>
                        </div>
                        <div class="progress">
                          <div class="progress-bar w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div>
                    </div>

                    <div className="row mb-4">
                      <div className="col-md-5">
                          <div className="row">
                            <div className="col-md-3">
                            <span className="fa-stack fa-1x">
                                <i className="fa fa-square internet fa-stack-2x"></i>
                                <i className="fa fa-wifi fa-inverse fa-stack-1x"></i>
                              </span>
                            </div>
                            <div className="col-md-7">
                              <p className="text-muted cashflow">Internet</p>
                            </div>
                          </div>
                      </div>

                      <div className="col-md-7">
                        <div>
                          <p className="mb-0  progress-zeros">- N 250,000</p>
                        </div>
                        <div class="progress">
                          <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div>
                    </div>

                    <div className="row mb-4">
                      <div className="col-md-5">
                          <div className="row">
                            <div className="col-md-3">
                            <span className="fa-stack fa-1x">
                                <i className="fa fa-square marketing fa-stack-2x"></i>
                                <i className="fa fa-bullhorn fa-inverse fa-stack-1x"></i>
                              </span>
                            </div>
                            <div className="col-md-7">
                              <p className="text-muted cashflow">Marketing</p>
                            </div>
                          </div>
                      </div>

                      <div className="col-md-7">
                        <div>
                          <p className="mb-0  progress-zeros">- N 250,000</p>
                        </div>
                        <div class="progress">
                          <div class="progress-bar w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-5">
                          <div className="row">
                            <div className="col-md-3">
                            <span className="fa-stack fa-1x">
                                <i className="fa fa-square transfer fa-stack-2x"></i>
                                <i className="fa fa-circle fa-inverse fa-stack-1x"></i>
                              </span>
                            </div>
                            <div className="col-md-7">
                              <p className="text-muted cashflow ">Transfer</p>
                            </div>
                          </div>
                      </div>

                      <div className="col-md-7">
                        <div>
                          <p className="mb-0 progress-zeros">- N 250,000</p>
                        </div>
                        <div class="progress">
                          <div class="progress-bar w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="bg-white rounded p-3 mt-3">
                  <div className="row mb-4">
                    <div className="col-md-6 mt-3">
                        <h5 className="recent-t">Recent transactions</h5>
                    </div>
                    <div className="col-md-6 mt-2 d-flex justify-content-sm-end justify-content-md-end">
                      <button type="button" className="btn border border-danger seeall bg-white" onClick={showMore}>See all</button>
                    </div>
                  </div>
                  
                  <div className="row mb-4">
                    <div className="col-md-3">
                      <div className="row">
                            <div className="col-md-3">
                            <span className="fa-stack fa-1x">
                                <i className="fa fa-square name bank-transfer fa-stack-2x"></i>
                                <i className="fa fa-university name2 fa-inverse fa-stack-1x"></i>
                              </span>
                            </div>
                            <div className="col-md-9">
                              <p className="mb-0 adam">Transfer Fee</p>
                              <p className="text-muted twelve">12:49pm</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-md-9 d-flex justify-content-sm-end justify-content-md-end">
                      <p className="minus">-N145.90</p>
                    </div>
                  </div>

                  {content ? <RecentBiz /> : null}
                          
                </div>
                
              </div>
             </div>
          {/* </div>  */}

          
        </div>
      </div>
    </div>
    </div>
    )

}

export default DashPage
      

      