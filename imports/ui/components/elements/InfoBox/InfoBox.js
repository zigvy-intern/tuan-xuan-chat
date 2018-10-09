import React, { Component } from 'react';
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';


class InfoBox extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
            
            <div className="info-container" >
                <header className="info-header__right">
                    <i className="fas fa-times" />
                </header>
                <div className="info border-box">
                    {/* Add */}
                    <section className="info__add border-bottom">
                    <input className="text-box" type="text" placeholder="Add teammates and team" />
                    <p>Assign to teammate</p>
                    <div className="avatar-row">
                       <Avatar size="medium" color="orange" name="T" url=""/>
                       <Avatar size="medium" color="green" name="X" url=""/>
                    </div>
                    <p>Assign to team</p>
                    <div className="avatar-row">
                        <Avatar size="medium" color="red" name="H" url=""/>
                    </div>
                    </section>
                    {/* Detail */}
                    <section className="info__detail border-bottom">
                    <p>Name<span>luuminhtan123@gmail.com</span></p>
                    <p>Location<span>Ho Chi Minh city, Vietnam</span></p>
                    <p>Email<span>luuminhtan123@gmail.com</span></p>
                    <p>First seen<span>0:00 23/03/2016</span></p>
                    <p>Last seen<span>0:00 23/03/2016</span></p>
                    <p>Web sessions<span>10</span></p>
                    </section>
                    {/* Tag */}
                    <section className="info__tag border-bottom">
                    <a className="tag" href="#">+ Add tag</a>
                    <a className="tag" href="#"> Business <span className="icon--dismiss">+</span></a>
                    </section>
                    {/* Option */}
                    <section className="info__option">
                    <Button color="white" size="large" name='Close this conversation'/>
                    <Button color="yellow" size="large" name='Unsubscribe from email'/>
                    <Button color="red" size="large" name='Block this person'/>
                    </section>
                </div>
                </div>

            </React.Fragment>
         );
    }
}
 
export default InfoBox;