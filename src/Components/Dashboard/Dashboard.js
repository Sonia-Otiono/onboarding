import React, {useState} from 'react'
import './Dashboard.css'
import './demo_style.css'
// import './flag-icon.min.css'
// import './ionicons.css'
// import './materialdesignicons.min.css'
// import './style.css'
import './vendor.bundle.addons.css'
import './vendor.bundle.base.css'
// import RouterIcon from '@material-ui/icons/Router';
import RecentBiz from './Transactions'



import {
    Link, Route
  } from "react-router-dom";

function DashPage() {

  const [content, setContent] = useState(false)
  const showMore = () => {setContent(true)}

    return(
        // <div>
        <div class="container-scroller">
        <nav class="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div class="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
         
        </div>
        <div class="navbar-menu-wrapper shadow-none d-flex align-items-center">
          <ul class="navbar-nav">
            <h4>Dashboard</h4>
            <li class="nav-item dropdown language-dropdown">    
            </li>
          </ul>

          <ul class="navbar-nav ml-auto">
              
            
            <li class="nav-item dropdown d-xl-inline-block user-dropdown">
              <a class="nav-link" id="UserDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
                <img class="img-xs rounded-circle d-inline-flex justify-content-md-end" src="assets/images/faces/face8.jpg" alt="Profile image"/> </a>
            </li>
            </ul>
            </div>
      </nav>


      <div class="container-fluid page-body-wrapper">
        <nav class="sidebar sidebar-offcanvas" id="sidebar">
          <ul class="nav">
           
            <li class="nav-item">
              <a class="nav-link" href="index.html">
                <i class="menu-icon typcn typcn-document-text"></i>
                <span class="menu-title">Dashboard</span>
              </a>
            </li>
            
            
            <li class="nav-item">
              <a class="nav-link" href="pages/charts/chartjs.html">
                <i class="menu-icon typcn typcn-th-large-outline"></i>
                <span class="menu-title">Invoice</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="pages/tables/basic-table.html">
                <i class="menu-icon typcn typcn-bell"></i>
                <span class="menu-title">Management</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="pages/icons/font-awesome.html">
                <i class="menu-icon typcn typcn-user-outline"></i>
                <span class="menu-title">Security</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#auth" aria-expanded="false" aria-controls="auth">
                <i class="menu-icon typcn typcn-document-add"></i>
                <span class="menu-title">Support</span>
                <i class="menu-arrow"></i>
              </a>
            </li>
          </ul>
        </nav>
        <div class="main-panel">
          <div class="content-wrapper">

              <div className="row">
                  <div className="col-md-9">
                      <h3>Welcome back, Kathy</h3>
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
                <div class="">
                    <div class="row d-flex justify-content-between">

                      <div class="col-md-5 curr p-3">
                        {/* <div class="d-flex"> */}
                          <div class="row d-flex">
                            <div className="col-md-8">
                              <h5 class="mb-0 ">CURRENT ACCOUNT</h5>
                              <p class="mb-0 text-muted">PROVIDUS BANK - 9906533917</p>
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
                            <h1 class="mt-4 naira">N814,800<span className="kobo">.45</span></h1>
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
                              <h5 class="mb-0 ">SAVINGS ACCOUNT</h5>
                              <p class="mb-0 text-muted">SUB ACCOUNT - 12346789</p>
                            </div>
                            <div className="col-md-5 d-flex justify-content-sm-end justify-content-md-end">
                              <span className="fa-stack fa-2x">
                                <i className="fa fa-circle curr-i fa-stack-2x"></i>
                                <i className="fa fa-square curr-icons fa-stack-1x fa-inverse"></i>
                              </span>
                            </div>
                          </div>
                          <div>
                            <h1 class="mt-4 naira">N39,342<span className="kobo">.45</span></h1>
                            </div>
                          {/* <div class="wrapper my-auto ml-auto ml-lg-4">
                            <canvas height="50" width="100" id="stats-line-graph-1"></canvas>
                          </div> */}
                      </div> 

                    </div>
                </div>

                <div className="row d-flex justify-content-between">
                  <div className="col-md-6 rounded curr p-3">

                    <div className="col-md-12 mb-4">
                        <h4>June summary</h4>
                    </div>
                    <div className="row">
                          <div className="col-md-3">
                            <p className="text-muted mb-0">Money in</p>
                            <p>N 5,650,000</p>
                          </div>
                          <div className="col-md-3">
                            <p className="text-muted mb-0">Money out</p>
                            <p>N 5,650,000</p>
                          </div>
                          <div className="col-md-3">
                            <p className="text-muted mb-0">Difference</p>
                            <p>N 5,650,000</p>
                          </div>
                    </div>
                    <div className="graph">

                    </div>
                  </div>

                  <div className="col-md-5 curr rounded p-3">

                    <div className="col-md-12 mb-4">
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
                              <p className="text-muted">Bank Fees</p>
                            </div>
                          </div>
                      </div>

                      <div className="col-md-7">
                        <div>
                          <p className="mb-0">- N 250,000</p>
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
                              <p className="text-muted">Internet</p>
                            </div>
                          </div>
                      </div>

                      <div className="col-md-7">
                        <div>
                          <p className="mb-0">- N 250,000</p>
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
                              <p className="text-muted">Marketing</p>
                            </div>
                          </div>
                      </div>

                      <div className="col-md-7">
                        <div>
                          <p className="mb-0">- N 250,000</p>
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
                              <p className="text-muted">Transfer</p>
                            </div>
                          </div>
                      </div>

                      <div className="col-md-7">
                        <div>
                          <p className="mb-0">- N 250,000</p>
                        </div>
                        <div class="progress">
                          <div class="progress-bar w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="bg-white p-3 rounded">
                  <div className="row mb-4 ">
                    <div className="col-md-6">
                        <h5 className="">Recent transactions</h5>
                    </div>
                    <div className="col-md-6 d-flex justify-content-sm-end justify-content-md-end">
                      <button type="button" className="btn border border-danger bg-white" onClick={showMore}>See all</button>
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
                              <p className="mb-0">Transfer Fee</p>
                              <p className="text-muted">12:49pm</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-md-9 d-flex justify-content-sm-end justify-content-md-end">
                      <p>-N145.90</p>
                    </div>
                  </div>

                  {content ? <RecentBiz /> : null}
                          
                </div>
                
              {/* </div> */}
             </div>
          {/* </div>  */}

          
        </div>
      </div>
    </div>
    // </div>
    )

}

export default DashPage