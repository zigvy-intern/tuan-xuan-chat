import React, { Component } from 'react';

class SettingBlockedTab extends Component {
    state = {  }
    render() { 
        return ( 
        <section id="blocked-people" className="tab-detail border-box" style={{display: 'inherit'}}>
            <section className="border-bottom">
                <header className="border-left-box border--red ">
                <p className="border-left__title">Blocked people</p>
                </header>
                <section className="table">
                <header className="table__row">
                    <div className="col-2">
                    <p>IP</p>
                    </div>
                    <div className="col-2">
                    <p>Name</p>
                    </div>
                    <div className="col-3">
                    <p>Email</p>
                    </div>
                    <div className="col-2">
                    <p>Blocked date</p>
                    </div>
                    <div className="col-1">
                    <p>Unblock</p>
                    </div>
                </header>
                <div className="table__row">
                    <div className="col-2">
                    <p>168.199.0.23</p>
                    </div>
                    <div className="col-2">
                    <p>Luu Minh Tan</p>
                    </div>
                    <div className="col-3">
                    <p>luuminhtan123@gmail.com</p>
                    </div>
                    <div className="col-2">
                    <p>12/03/2016</p>
                    </div>
                    <div className="col-1">
                    <span className="icon bgr-yellow icon-refresh" />
                    </div>
                </div>
                <div className="table__row">
                    <div className="col-2">
                    <p>168.199.1.11</p>
                    </div>
                    <div className="col-2">
                    <p>Truong Viet Ha</p>
                    </div>
                    <div className="col-3">
                    <p>hatruong@gmail.com</p>
                    </div>
                    <div className="col-2">
                    <p>23/02/2016</p>
                    </div>
                    <div className="col-1">
                    <span className="icon icon-refresh-2" />
                    </div>
                </div>
                </section>
            </section>
            </section>

         );
    }
}
 
export default SettingBlockedTab;