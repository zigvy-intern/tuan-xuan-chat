import React, { Component } from 'react';

class SettingUpgradeTab extends Component {
    state = {  }
    render() { 
        return ( 
         <section id="upgrade" className="tab-detail border-box" style={{display: 'inherit'}}>
            <section className="border-bottom">
                <header className="border-left-box border--yellow ">
                <p className="border-left__title">Upgrade</p>
                </header>
                <div className="upgrade__wrap">
                <section className="upgrade__row">
                    <section className="upgrade__col">
                    <div className=" upgrade__item border--yellow">
                        <p className="color--yellow">MICRO</p>
                    </div>
                    </section>
                    <section className="upgrade__col">
                    <div className=" upgrade__item border--green">
                        <p className="color--green">SMALL</p>
                    </div>
                    </section>
                    <section className="upgrade__col">
                    <div className=" upgrade__item border--blue">
                        <p className="color--blue">MEDIUM</p>
                    </div>
                    </section>
                    <section className="upgrade__col">
                    <div className=" upgrade__item border--pink">
                        <p className="color--pink">LARGE</p>
                    </div>
                    </section>
                </section>
                <section className="upgrade__row">
                    <section className="upgrade__col">
                    <div className=" upgrade__item ">
                        <p>Free</p>
                    </div>
                    </section>
                    <section className="upgrade__col">
                    <div className=" upgrade__item bgr-green">
                        <p className="color--white">100.000 VND/Month</p>
                    </div>
                    </section>
                    <section className="upgrade__col">
                    <div className=" upgrade__item ">
                        <p>Comming soon</p>
                    </div>
                    </section>
                    <section className="upgrade__col">
                    <div className=" upgrade__item ">
                        <p>Comming soon</p>
                    </div>
                    </section>
                </section>
                <section className="upgrade__row">
                    <section className="upgrade__col">
                    <div className="upgrade__item upgrade__item--large">
                        <p>Lorem ipsum</p>
                    </div>
                    </section>
                    <section className="upgrade__col">
                    <div className="upgrade__item upgrade__item--large">
                        <p>Lorem ipsum</p>
                    </div>
                    </section>
                    <section className="upgrade__col">
                    <div className="upgrade__item upgrade__item--large">
                        <p>Lorem ipsum</p>
                    </div>
                    </section>
                    <section className="upgrade__col">
                    <div className="upgrade__item upgrade__item--large">
                        <p>Lorem ipsum</p>
                    </div>
                    </section>
                </section>
                </div>
            </section>
            </section>

         );
    }
}
 
export default SettingUpgradeTab;