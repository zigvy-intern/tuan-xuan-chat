import React, { Component } from 'react';
import Button from '../../Button/Button';

class SettingGeneralTab extends Component {
    state = {  }
    render() { 
        return ( 
        <section id="general" className="tab-detail border-box ">
            <section className="border-bottom">
                <header className="border-left-box border--yellow ">
                <p className="border-left__title">Information</p>
                </header>
                <div className="app-info__form-group">
                <form className="app-info__form">
                    <p>Name of your app </p>
                    <input className="text-box--white" type="text" />
                </form>
                <form className="app-info__form">
                    <p>Web domain </p>
                    <input className="text-box--white" type="text" />
                </form>
                </div>
            </section>
            <section className="border-bottom">
                <header className="border-left-box border--green">
                <p className="border-left__title">App integration</p>
                </header>
                <form>
                <textarea className="text-box--white" cols={30} rows={5} defaultValue={"!function(a){\"function\"==typeof define&&define.amd?define([\"jquery\"],a):\"object\"==typeof exports?a(require(\"jquery\")):a(jQuery)}(function(a){function b(a){re- turn h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}func- tion e(a){0===a.indexOf('\"')&&(a=a.slice(1,-1).replace(/\\\\\"/g,'\"').replace(/\\\\\\\\/g,\"\\\\\"));"} />
                </form>
                <div className="connect-status">
                <p className="inline-p">Connection status: </p>
                <div className="dot bgr-green" />
                <p className="inline-p">Connected</p>
                </div>
            </section>
            <section>
                <header className=" border-left-box border--red">
                <p className="border-left__title">Delete app</p>
                </header>
                <p className="grey-p">Warning: All your data will be deleted </p>
                <form className="form-group">
                <Button color="red" size="medium" name="DELETE THIS APP"/>
                </form>
            </section>
        </section>

         );
    }
}
 
export default SettingGeneralTab;