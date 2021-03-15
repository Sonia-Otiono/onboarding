import React, {useState} from 'react'
import './SideBar.css'
import DropMenu from './Dropdown'
import Logo from '../../images/Grey-logo.svg'

const SideBar = () => {

    const [list, setList] = useState(false)
    const showList = () => {setList(true)}

    return (
        <div className="side container">
             <div className="sticky-top">
           <div class="row mt-4">
                <div className="col-md-9">

                    <div className="row">
                        <div className="col-md-5 bn-button">
                            <span className="button-initial mt-2">BN</span>
                            {/* <button type="button" className="btn btn-lg bn-button"><span className="button-initial">BN</span></button> */}
                        </div>
                        <div className="col-md-7">
                            <h5 className="mb-0 clay">Clayvant Inc</h5>
                            <p className="manage mt-0">Manage account</p>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-3 d-flex justify-content-md-end">
                    <span className="fa-stack fa-1x" onClick={showList}>
                        <i className="fa fa-square thesquare fa-stack-2x"></i>
                        <i className="fa fa-chevron-down thechev fa-inverse fa-stack-1x"></i>
                    </span>
                </div>

            </div>

                    {list ? <DropMenu /> : null}                

            <div className="ms-2 mt-4">
            <div className="row mb-4">
                <div className="col-md-2 mr-0">
                    <i className="fa fa-clipboard fa-md"></i>
                </div>
                <div className="ml-0 col-md-10">
                    <p className="text-muted side-grey">Invoice</p>
                </div>
              
            </div>
            <div className="row mb-4">
                <div className="col-md-2 mr-0">
                    <i className="fa fa-magic fa-md"></i>
                </div>
                <div className="ml-0 col-md-10">
                    <p className="text-muted side-grey">Management</p>
                </div>
              
            </div>
            <div className="row mb-4">
                <div className="col-md-2 mr-0">
                    <i className="fa fa-magic fa-md"></i>
                </div>
                <div className="ml-0 col-md-10">
                    <p className="text-muted side-grey">Security</p>
                </div>
              
            </div>
            <div className="row">
                <div className="col-md-2 mr-0">
                    <i className="fa fa-magic fa-md"></i>
                </div>
                <div className="ml-0 col-md-10">
                    <p className="text-muted side-grey">Support</p>
                </div>
              
            </div>
            </div> 
            
            <div className="fixed ms-2 footer-logo">
                <footer>
                    <img className="prospa-logo" src={Logo} alt="Brand-logo"/>
                </footer>
            </div>
            
            </div>
            
        </div>
    )
}

export default SideBar