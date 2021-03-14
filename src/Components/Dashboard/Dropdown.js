import React from 'react'

const DropMenu = () => {
    return(
        <div className="container drop-container">
            <div class="row drop-div">
                <div class="col-md-12 shadow p-0 ms-4 me-5">
                    <div class="list-group" id="list-tab" role="tablist">
                    <a class="list-group-item list-group-item-action listy" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Clayvant Inc</a>
                    <a class="list-group-item list-group-item-action listy" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Business name 2</a>
                    <a class="list-group-item list-group-item-action listy" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Business name 3 <span><p className="text-danger sub-biz">Add a business</p></span></a>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default DropMenu