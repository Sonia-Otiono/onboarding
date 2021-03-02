import React, {useState} from 'react'
import './SideBar.css'
import DropMenu from './Dropdown'

const SideBar = () => {

    const [list, setList] = useState(false)
    const showList = () => {setList(true)}

    return (
        <div className="side-section container">
           <div class="row mt-4">
                <div className="col-md-9">

                    <div className="row">
                        <div className="col-md-4">
                            <button type="button" className="btn btn-lg bn-button">BN</button>
                        </div>
                        <div className="col-md-8">
                            <h5 className="mb-0">Clayvant Inc</h5>
                            <p>Manage account</p>
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

            <div className="row">
                <div className="col-md-3 mr-0">
                    <i className="fa fa-clipboard fa-md"></i>
                </div>
                <div className="ml-0 col-md-9">
                    <p className="text-muted">Invoice</p>
                </div>
              
            </div>
            <div className="row">
                <div className="col-md-3 mr-0">
                    <i className="fa fa-magic fa-md"></i>
                </div>
                <div className="ml-0 col-md-9">
                    <p className="text-muted">Management</p>
                </div>
              
            </div>
            <div className="row">
                <div className="col-md-3 mr-0">
                    <i className="fa fa-magic fa-md"></i>
                </div>
                <div className="ml-0 col-md-9">
                    <p className="text-muted">Security</p>
                </div>
              
            </div>
            <div className="row">
                <div className="col-md-3 mr-0">
                    <i className="fa fa-magic fa-md"></i>
                </div>
                <div className="ml-0 col-md-9">
                    <p className="text-muted">Support</p>
                </div>
              
            </div>
        </div>
    )
}

export default SideBar