import React from 'react'

const DropMenu = () => {
    return(
        <div>
            <div class="row">
                <div class="col-md-12 shadow p-2">
                    <div class="list-group" id="list-tab" role="tablist">
                    <a class="list-group-item list-group-item-action listy" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Clayvant Inc</a>
                    <a class="list-group-item list-group-item-action listy" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Business name 2</a>
                    <a class="list-group-item list-group-item-action listy" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Business name 3 <span><p className="text-danger sub-biz">Add a business</p></span></a>

                    </div>
                </div>
                {/* <div class="col-8">
                    <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade" id="list-home" role="tabpanel" aria-labelledby="list-home-list">...</div>
                    <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">...</div>
                    <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">...</div>
                    <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">...</div>
                    </div>
                </div> */}
                </div>
        </div>
    )
}
export default DropMenu