import React, { Component } from 'react';

class ActivitiesBox extends Component {
    state = {  }
    render() { 
        return ( 
        <section className="conversation__activities border-box">
        <header>
          <p className="bold">ACTIVITIES</p>
        </header>
        <section>
          <div className="activities__date"><time>Today</time></div>
          <ul className="activities__timeline">
            <li className="activities--mentioned"><a href="#">Hung Vo</a> mentioned you in this <a href="#">conversation</a></li>
            <li className="activities--assigned"><a href="#">Hung Vo</a> assigned a <a href="#">conversation</a>
              to you</li>
            <li className="activities--closed">You closed this <a href="#">conversation</a></li>
          </ul>
        </section>
        <section>
          <div className="activities__date"><time>12/03/2016 </time></div>
          <ul className="activities__timeline">
            <li className="activities--mentioned"><a href="#">Hung Vo</a> mentioned you in this <a href="#">conversation</a></li>
            <li className="activities--assigned"><a href="#">Hung Vo</a> assigned a <a href="#">conversation</a>
              to you</li>
            <li className="activities--closed">You closed this <a href="#">conversation</a></li>
          </ul>
        </section>
      </section>
       );
    }
}
 
export default ActivitiesBox;