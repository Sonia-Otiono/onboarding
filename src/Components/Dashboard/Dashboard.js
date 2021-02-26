import React from 'react'
import './Dashboard.css'
import {
    Link, Route
  } from "react-router-dom";

function DashPage() {
    return(
        <div>
            <nav class="mnb navbar navbar-default navbar-fixed-top">
            <div class="container-fluid">
            <div class="navbar-header">
            </div>
            <div id="navbar" class="navbar-collapse collapse">
                <ul class="nav navbar-nav navbar-right">
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Draude Oba <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                    <li><a href="#">Settings</a></li>
                    <li><a href="#">Upgrade</a></li>
                    <li><a href="#">Help</a></li>
                    </ul>
                </li>
                <li><a href="#"><i class="fa fa-bell-o"></i>  
                    </a></li>
                <li><img src="" class="p-2"/></li>
                </ul>
            </div>
            </div>
            </nav>
      
      
      
            <div class="msb" id="msb">
                    <nav class="navbar navbar-default" role="navigation">
            
                        <div class="navbar-header">
                            <div class="brand-wrapper">
                                {/*Brand*/} 
                                <div class="brand-name-wrapper">
                                    <a class="navbar-brand" href="#">
                                        Prospa
                                    </a>
                                </div>
            
                            </div>
            
                        </div>
            
                        {/*Main Menu*/}
                        <div class="side-menu-container">
                            <ul class="nav navbar-nav">
            
                                <li><a href="#"><i class="fa fa-dashboard"></i> Dashboard</a></li>
                                <li class="active"><a href="#"><i class="fa fa-puzzle-piece"></i> Components</a></li>
                                <li><a href="#"><i class="fa fa-heart"></i> Extras</a></li>
            
                                <li class="panel panel-default" id="dropdown">
                                    <Link data-toggle="collapse" to="#dropdown-lvl1">
                                        <i class="fa fa-diamond"></i> Apps
                                        <span class="caret"></span>
                        </Link>
                                <li><a href="#"><i class="fa fa-dashboard"></i> Invoice</a></li>
                                <li><a href="#"><i class="fa fa-dashboard"></i> Management</a></li>
                                <li><a href="#"><i class="fa fa-dashboard"></i> Security</a></li>
                                <li><a href="#"><i class="fa fa-dashboard"></i> Support</a></li>

                                    {/*Dropdown Level 1*/}
                                    <div id="dropdown-lvl1" class="panel-collapse collapse">
                                        <div class="panel-body">
                                            <ul class="nav navbar-nav">
                                                <li><a href="#">Mail</a></li>
                                                <li><a href="#">Calendar</a></li>
                                                <li><a href="#">Ecommerce</a></li>
                                                <li><a href="#">User</a></li>
                                                <li><a href="#">Social</a></li>
            
                                                {/*Dropdown Level 2*/}
                                                <li class="panel panel-default" id="dropdown">
                                                    <a data-toggle="collapse" href="#dropdown-lvl2">
                                                        <i class="glyphicon glyphicon-off"></i> Sub Level <span class="caret"></span>
                                                    </a>
                                                    <div id="dropdown-lvl2" class="panel-collapse collapse">
                                                        <div class="panel-body">
                                                            <ul class="nav navbar-nav">
                                                                <li><a href="#">Link</a></li>
                                                                <li><a href="#">Link</a></li>
                                                                <li><a href="#">Link</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>{/*.navbar-collapse*/}
                    </nav>  
            </div>
      
      
            <div class="mcw">
                <div class="cv">
                <div className="row">
                    <div className="col-md-6">
                        <h4>Welcome back, Kathy</h4>
                        <p>Here's what has been happening in the last <Link to="#"><span className="text-danger"> <a> 7 days </a></span></Link></p>
                    </div>
                    <div className="col-md-6">
                        <button type="button" className="btn btn-danger">Add a sub account</button>
                    </div>
                </div>
                <div className="row">
                    {/* <div className="col-md-6">
                    <Line data={data} />
                    </div> */}
                    <div className="col-md-6">
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default DashPage