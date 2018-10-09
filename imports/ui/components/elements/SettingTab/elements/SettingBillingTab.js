import React, { Component } from 'react';

class SettingBillingTab extends Component {
    state = {  }
    render() { 
        return ( 
        <section id="billing" className="tab-detail border-box" style={{display: 'inherit'}}>
            <section className="border-bottom">
                <header className="border-left-box border--cyan ">
                <p className="border-left__title">Current Subcription</p>
                </header>
                <div className="progress-bar">
                <div className="progress-bar--active" />
                </div>
                <div className="sub-info">
                <p>Your subscription starts on <span className="small-date bold">Mar 23, 2016</span> and will
                    end on <span className="small-date bold">Apr 23, 2016</span></p>
                <button className="btn btn--cyan btn--medium-2">REQUEST</button>
                </div>
            </section>
            {/* billig part */}
            <section className="border-bottom">
                <header className="border-left-box border--pink ">
                <p className="border-left__title">Billing detail</p>
                </header>
                <div className="app-info__form-group">
                <form className="app-info__form">
                    <p>Company name </p>
                    <input className="text-box--white" type="text" defaultValue="Poppi" />
                </form>
                <form className="app-info__form">
                    <p>Billing email </p>
                    <input className="text-box--white" type="text" defaultValue="truongvietha@gmail.com" />
                </form>
                </div>
            </section>
            {/* invoice part */}
            <section className="invoice border-bottom">
                <header className="border-left-box border--green ">
                <p className="border-left__title">Invoice</p>
                </header>
                <section className="invoice-table">
                <header>
                    <div className="invoice-table__col">ID</div>
                    <div className="invoice-table__col">Date </div>
                    <div className="invoice-table__col">Amount</div>
                    <div className="invoice-table__col">Status</div>
                </header>
                <div className="invoice-table__row">
                    <div className="invoice-table__col">241078</div>
                    <div className="invoice-table__col">Mar 23, 2016</div>
                    <div className="invoice-table__col">100.000 VND</div>
                    <div className="invoice-table__col">PAID </div>
                </div>
                </section>
                <section className="invoice-detail">
                <header>
                    <div className="invoice-table__col">Invoice ID</div>
                    <div className="invoice-table__col">Invoice Date </div>
                    <div className="invoice-table__col">App Name</div>
                    <div className="invoice-table__col">App ID </div>
                </header>
                <div className="invoice-detail__row">
                    <div className="invoice-table__col">241078</div>
                    <div className="invoice-table__col">Mar 23, 2016 </div>
                    <div className="invoice-table__col">Poppi</div>
                    <div className="invoice-table__col">bw20dw </div>
                </div>
                <section className="period-detail">
                    <p>
                    <span className="period__duration">Mar 23, 2016 - Apr 23, 2016</span>
                    <span className="period__sub"> New charges for upcoming month</span>
                    </p>
                    <div>
                    <div className="period-detail__row">
                        <div className="period-detail__col">SUBSCRIPTION</div>
                        <div className="period-detail__col">TIME PERIOD</div>
                        <div className="period-detail__col">AMOUNT</div>
                    </div>
                    <div className="period-detail__row">
                        <div className="period-detail__col">SMALL</div>
                        <div className="period-detail__col">MAR 23, 2016 - APR 23, 2016</div>
                        <div className="period-detail__col">100.000 VND</div>
                    </div>
                    </div>
                </section>
                <footer>
                    <button className="btn btn--medium-2 btn--green">PAID</button>
                    <p>TOTAL</p>
                    <div className="invoice-total__price">100.000 VND</div>
                </footer>
                </section>
            </section>
            </section>

         );
    }
}
 
export default SettingBillingTab ;