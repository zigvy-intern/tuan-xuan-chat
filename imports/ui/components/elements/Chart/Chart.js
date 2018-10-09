import React, { Component } from 'react';

class Chart extends Component {
    state = {  }
    render() { 
 
        return ( 
        
            <React.Fragment>
                <section className="conversation__chart">
                <header>
                    <p className="bold">CONVERSATIONS</p>
                    <div className="tab">
                    <button className="tab__link" id="tab__link--default-open">Last
                        7 days</button>
                    <button className="tab__link tab__link--active" >Last 28 days</button>
                    <button className="tab__link" >Last 90 days</button>
                    </div>
                </header>
                <section id="last7days" className="tab__content" style={{display: 'none'}}>
                    <img className="chart__7days" src="./assets/img/SVG/chart.svg" alt="chart7days" />
                </section>
                <section id="last28days" className="tab__content" style={{display: 'block'}}>
                    <img className="chart__28days" src="./assets/img/SVG/chart.svg" alt="chart28days" />
                </section>
                <section id="last90days" className="tab__content" style={{display: 'none'}}>
                    <img className="chart__90days" src="./assets/img/SVG/chart.svg" alt="chart90days" />
                </section>
                </section>
             </React.Fragment>
       );
    }
}
 
export default Chart;