import React from 'react'
import './Dashboard.css'
import './demo_style.css'
// import './flag-icon.min.css'
// import './ionicons.css'
// import './materialdesignicons.min.css'
// import './style.css'
import './vendor.bundle.addons.css'
import './vendor.bundle.base.css'



import {
    Link, Route
  } from "react-router-dom";

function DashPage() {
    return(

        <div>
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
                  <div class="preview-thumbnail">
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
                  <p class="designation">Premium user</p>
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
              <a class="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                <i class="menu-icon typcn typcn-coffee"></i>
                <span class="menu-title">Basic UI Elements</span>
                <i class="menu-arrow"></i>
              </a>
              <div class="collapse" id="ui-basic">
                <ul class="nav flex-column sub-menu">
                  <li class="nav-item">
                    <a class="nav-link" href="pages/ui-features/buttons.html">Buttons</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="pages/ui-features/dropdowns.html">Dropdowns</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="pages/ui-features/typography.html">Typography</a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="pages/forms/basic_elements.html">
                <i class="menu-icon typcn typcn-shopping-bag"></i>
                <span class="menu-title">Form elements</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="pages/charts/chartjs.html">
                <i class="menu-icon typcn typcn-th-large-outline"></i>
                <span class="menu-title">Charts</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="pages/tables/basic-table.html">
                <i class="menu-icon typcn typcn-bell"></i>
                <span class="menu-title">Tables</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="pages/icons/font-awesome.html">
                <i class="menu-icon typcn typcn-user-outline"></i>
                <span class="menu-title">Icons</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
                <i class="menu-icon typcn typcn-document-add"></i>
                <span class="menu-title">User Pages</span>
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
                  <div className="col-md-8">
                      <h3>Welcome back, Kathy</h3>
                      <p>Here's what has been happening in the last <Link to="#"><span className="text-danger"> <a> 7 days </a></span></Link></p>
                  </div>
                  <div className="col-md-4">
                    <buutton type="button" className="btn btn-danger sub-btn p-3">Add a sub account</buutton>
                  </div>
              </div>




            {/* <div class="row">
              <div class="col-md-12 grid-margin"> */}
                <div class="">
                    <div class="row">
                      <div class="col-md-6 curr p-3">
                        <div class="d-flex">
                          <div class="row d-flex">
                            <div className="col-md-6 justify-content-start">
                              <h5 class="mb-0 ">CURRENT ACCOUNT</h5>
                              <p class="mb-0 text-muted">PROVIDUS BANK - 9906533917</p>
                            </div>
                            <div className="col-md-6 justify-content-end">
                              <button ><i className="fa fa-square fa-md "></i ></button>
                            </div>
                            <div>
                            <h1 class="mt-4 naira">N814,800<span className="kobo">.45</span></h1>
                            </div>
                          </div>
                          {/* <div class="wrapper my-auto ml-auto ml-lg-4">
                            <canvas height="50" width="100" id="stats-line-graph-1"></canvas>
                          </div> */}
                        </div>
                      </div>
                      <div class="col-md-6 curr p-3">
                        <div class="d-flex">
                          <div class="wrapper">
                            <h5 class="mb-0 ">SAVINGS ACCOUNT</h5>
                            <p class="mb-0 text-muted">SUB ACCOUNT - 12346789</p>
                            <h1 class="mt-4 naira">N39,342<span className="kobo">.45</span></h1>
                          </div>
                          {/* <div class="wrapper my-auto ml-auto ml-lg-4">
                            <canvas height="50" width="100" id="stats-line-graph-1"></canvas>
                          </div> */}
                        </div>
                      </div>
                            
                    </div>
                </div>
              {/* </div> */}
             </div>
          {/* </div>  */}

          {/* <footer class="footer">
            <div class="container-fluid clearfix">
            </div>
          </footer> */}
        </div>
      </div>
    </div>
    </div>)

}

export default DashPage