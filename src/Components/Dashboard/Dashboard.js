import React from 'react'
import './Dashboard.css'
import './demo_style.css'
// import './flag-icon.min.css'
// import './ionicons.css'
// import './materialdesignicons.min.css'
// import './style.css'
import './vendor.bundle.addons.css'
import './vendor.bundle.base.css'
// import RouterIcon from '@material-ui/icons/Router';



import {
    Link, Route
  } from "react-router-dom";

function DashPage() {
    return(

        // <div>
        <div class="container-scroller">
        <nav class="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div class="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
         
        </div>
        <div class="navbar-menu-wrapper d-flex align-items-center">
          <ul class="navbar-nav">
            <h4>Dashboard</h4>
            <li class="nav-item dropdown language-dropdown">    
            </li>
          </ul>

          <ul class="navbar-nav ml-auto">
              
            <li class="nav-item dropdown">
              <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0" aria-labelledby="messageDropdown">
                <a class="dropdown-item py-3">
                  <p class="mb-0 font-weight-medium float-left">You have 7 unread mails </p>
                  <span class="badge badge-pill badge-primary float-right">View all</span>
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item preview-item">
                  <div class="preview-thumbnail d-flex justify-content-end">
                    <img src="assets/images/faces/face10.jpg" alt="image" class="img-sm profile-pic"/>
                  </div>
                  <div class="preview-item-content flex-grow py-2">
                    <p class="preview-subject ellipsis font-weight-medium text-dark">Marian Garner </p>
                    <p class="font-weight-light small-text"> The meeting is cancelled </p>
                  </div>
                </a>
              </div>
            </li>
            <li class="nav-item dropdown d-none d-xl-inline-block user-dropdown">
              <a class="nav-link dropdown-toggle" id="UserDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
                <img class="img-xs rounded-circle" src="assets/images/faces/face8.jpg" alt="Profile image"/> </a>
              <div class="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="UserDropdown">
                <div class="dropdown-header text-center">
                  <img class="img-md rounded-circle" src="assets/images/faces/face8.jpg" alt="Profile image"/>
                  <p class="mb-1 mt-3 font-weight-semibold">Allen Moreno</p>
                  <p class="font-weight-light text-muted mb-0">allenmoreno@gmail.com</p>
                </div>
                <a class="dropdown-item">My Profile <span class="badge badge-pill badge-danger">1</span><i class="dropdown-item-icon ti-dashboard"></i></a>
                <a class="dropdown-item">Messages<i class="dropdown-item-icon ti-comment-alt"></i></a>
                <a class="dropdown-item">Activity<i class="dropdown-item-icon ti-location-arrow"></i></a>
                <a class="dropdown-item">FAQ<i class="dropdown-item-icon ti-help-alt"></i></a>
                <a class="dropdown-item">Sign Out<i class="dropdown-item-icon ti-power-off"></i></a>
              </div>
            </li>
          </ul>    
          <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
            <span class="mdi mdi-menu"></span>
          </button>
        </div>
      </nav>


      <div class="container-fluid page-body-wrapper">
        <nav class="sidebar sidebar-offcanvas" id="sidebar">
          <ul class="nav">
            <li class="nav-item nav-profile">
              <a href="#" class="nav-link">
                <div class="profile-image">
                  <img class="img-xs rounded-circle" src="assets/images/faces/face8.jpg" alt="profile image"/>
                  <div class="dot-indicator bg-success"></div>
                </div>
                <div class="text-wrapper">
                  <p class="profile-name">Allen Moreno</p>
                </div>
              </a>
            </li>
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
              <a class="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
                <i class="menu-icon typcn typcn-document-add"></i>
                <span class="menu-title">Support</span>
                <i class="menu-arrow"></i>
              </a>
              <div class="collapse" id="auth">
                <ul class="nav flex-column sub-menu">
                  <li class="nav-item">
                    <a class="nav-link" href="pages/samples/blank-page.html"> Blank Page </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="pages/samples/login.html"> Login </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="pages/samples/register.html"> Register </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="pages/samples/error-404.html"> 404 </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="pages/samples/error-500.html"> 500 </a>
                  </li>
                </ul>
              </div>
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
                  <div className="col-md-3 d-flex justify-content-end ml-0">
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
                            <div className="col-md-5 d-flex justify-content-end">
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
                  <div className="row ">
                    <div className="col-md-6">
                        <h5 className="">Recent transactions</h5>
                    </div>
                    <div className="col-md-6 d-flex justify-content-end">
                      <button type="button" className="btn border border-danger bg-white">See all</button>
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
                    <div className="col-md-9 d-flex justify-content-end">
                      <p>-N145.90</p>
                    </div>
                  </div>
                                    
                  <div className="row mb-4">
                    <div className="col-md-3">
                      <div className="row">
                            <div className="col-md-3">
                            <span className="fa-stack fa-1x">
                              <i className="fa fa-circle name fa-stack-2x"></i>
                              <i className="fa fa-circle name2 fa-inverse fa-stack-1x"></i>
                            </span>
                            </div>
                            <div className="col-md-9">
                              <p className="mb-0">Adam Chapman</p>
                              <p className="text-muted">12:49pm</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-md-9 d-flex justify-content-end">
                      <p>-N2,000.00</p>
                    </div>
                  </div>
                                    
                  <div className="row mb-4">
                    <div className="col-md-3">
                      <div className="row">
                            <div className="col-md-3">
                            <span className="fa-stack fa-1x">
                              <i className="fa fa-circle name fa-stack-2x"></i>
                              <i className="fa fa-circle name2 fa-inverse fa-stack-1x"></i>
                            </span>
                            </div>
                            <div className="col-md-9">
                              <p className="mb-0">Shirley Barnes</p>
                              <p className="text-muted">12:49pm</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-md-9 d-flex justify-content-end">
                      <p>-N2,000.00</p>
                    </div>
                  </div>
                                    
                  <div className="row mb-4">
                    <div className="col-md-3">
                      <div className="row">
                            <div className="col-md-3">
                            <span className="fa-stack fa-1x">
                              <i className="fa fa-circle name fa-stack-2x"></i>
                              <i className="fa fa-circle name2 fa-inverse fa-stack-1x"></i>
                            </span>
                            </div>
                            <div className="col-md-9">
                              <p className="mb-0">Shirley Barnes</p>
                              <p className="text-muted">12:49pm</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-md-9 d-flex justify-content-end">
                      <p>-N2,000.00</p>
                    </div>
                  </div>
                                    

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