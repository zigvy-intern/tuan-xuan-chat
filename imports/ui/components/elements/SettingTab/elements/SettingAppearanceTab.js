import React, { Component } from 'react';

class SettingAppearanceTab extends Component {
    state = {  }
    render() { 
        return ( 
         <section id="appearance" className="tab-detail border-box" style={{display: 'inherit'}}>
            <section className="border-bottom">
                <header className="border-left-box border--cyan ">
                <p className="border-left__title">Theme Color</p>
                </header>
                <p id="colorpickerHolder">
                </p><div className="colorpicker" id="collorpicker_617" style={{display: 'block', position: 'relative'}}><div className="colorpicker_color" style={{backgroundColor: 'rgb(0, 255, 230)'}}><div><div style={{left: 149, top: 28}} /></div></div><div className="colorpicker_hue"><div style={{top: 77}} /></div><div className="colorpicker_new_color" style={{backgroundColor: 'rgb(1, 206, 185)'}} /><div className="colorpicker_current_color" style={{backgroundColor: 'rgb(1, 206, 185)'}} /><div className="colorpicker_hex"><input type="text" maxLength={6} size={6} /></div><div className="colorpicker_rgb_r colorpicker_field"><input type="text" maxLength={3} size={3} /><span /></div><div className="colorpicker_rgb_g colorpicker_field"><input type="text" maxLength={3} size={3} /><span /></div><div className="colorpicker_rgb_b colorpicker_field"><input type="text" maxLength={3} size={3} /><span /></div><div className="colorpicker_hsb_h colorpicker_field"><input type="text" maxLength={3} size={3} /><span /></div><div className="colorpicker_hsb_s colorpicker_field"><input type="text" maxLength={3} size={3} /><span /></div><div className="colorpicker_hsb_b colorpicker_field"><input type="text" maxLength={3} size={3} /><span /></div><div className="colorpicker_submit" /></div><p />
                <a className="colorpicker--reset color--blue" href>Reset Color</a>
            </section>
            <section className="border-bottom">
                <header className="border-left-box border--yellow ">
                <p className="border-left__title">Poppi Messenger Review</p>
                </header>
                <img className="poppi-messenger-review" src="./assets/img/poppi-messenger-review.jpg" alt="poppi messenger review" />
            </section>
        </section>

         );
    }
}
 
export default SettingAppearanceTab;