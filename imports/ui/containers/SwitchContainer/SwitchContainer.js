import React, { Component } from 'react';
import SwitchTab from '../../components/elements/SwitchTab/SwitchTab';

class SwitchContainer extends Component {
    state = {  }
    render() { 
        return ( 
         <React.Fragment>
            <section>
            <div className="switch__title">MY OWN APPS</div>
            <div className="flex--row">
            <SwitchTab title="Poppy" notiNumber="5" url="https:/google.com"/>
            <SwitchTab title="Poppy" notiNumber="5" url="https:/google.com"/>
            <SwitchTab title="Poppy" notiNumber="5" url="https:/google.com"/>
            </div>
            </section>
            <section>
            <div className="switch__title">SHARED APPS</div>
            <div className="flex--row">
            <SwitchTab title="Poppy" notiNumber="5" url="https:/google.com"/> 
            </div>
            </section>
            <section>
                <div className="switch__title">CREATE APP</div>
                <div className="flex--row">
                    <SwitchTab type="create"/>
                </div>
            </section>
          </React.Fragment>

         );
    }
}
 
export default SwitchContainer;