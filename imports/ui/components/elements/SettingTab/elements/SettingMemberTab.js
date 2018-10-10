import React, { Component } from 'react';
import Avatar from '../../Avatar/Avatar';
import IconButton from '../../IconButton/IconButton';

class SettingMemberTab extends Component {
    state = {}
    render() {
        return (
            <section id="team-member" className="tab-detail border-box" style={{ display: 'inherit' }}>
                <section className="border-bottom">
                    <header className="border-left-box border--green ">
                        <p className="border-left__title">Add member</p>
                    </header>
                    <form className="form-group">
                        <input type="text" className="text-box--white" placeholder="Enter your new member's email" />
                        <button className="btn btn--medium-2 btn--green">Invite</button>
                    </form>
                    <p>Pending invites</p>
                    {/* Table here */}
                    <section className="table-wrap">
                        <section className="table">
                            <header className="table__row">
                                <div className="col-3">
                                    <p>Email</p>
                                </div>
                                <div className="col-4">
                                    <p>Invitation Date</p>
                                </div>
                                <div className="col-2">
                                    <p>Resend</p>
                                </div>
                                <div className="col-2">
                                    <p>Remove</p>
                                </div>
                            </header>
                            <div className="table__row">
                                <div className="col-3">
                                    <p>luuminhtan123@gmail.com</p>
                                </div>
                                <div className="col-4">
                                    <p>12:30 AM 12/03/2016</p>
                                </div>
                                <div className="col-2">
                                    <IconButton icon="refresh" color="blue" href="#" />
                                </div>
                                <div className="col-2">
                                    <IconButton icon="remove" color="red" href="#" />
                                </div>
                            </div>
                            <div className="table__row">
                                <div className="col-3">
                                    <p>truongvietha@designdevelop.com</p>
                                </div>
                                <div className="col-4">
                                    <p>12:30 AM 12/03/2016</p>
                                </div>
                                <div className="col-2">
                                    <IconButton icon="refresh-2" href="#" />
                                </div>
                                <div className="col-2">
                                    <IconButton icon="remove-2" href="#" />
                                </div>
                            </div>
                        </section>
                    </section>
                </section>
                {/* team part */}
                <section className="border-bottom">
                    <header className="border-left-box border--cyan ">
                        <p className="border-left__title">Team</p>
                    </header>
                    <form className="form-group">
                        <input type="text" className="text-box--white" placeholder="Type your team name" />
                        <button className="btn btn--medium-2 btn--cyan">Create team</button>
                    </form>
                </section>
                {/* organization part */}
                <section>
                    <header className="border-left-box border--pink ">
                        <p className="border-left__title">Organization</p>
                    </header>
                    <section className="border-grey bgr-grey team-box">
                        <header className="team-box__header">
                            All members
                    </header>
                        <div className="avatar-row">
                            <Avatar email="tranxuan1096@gmail.com" color="cyan" size="medium" name="X" />
                        </div>
                    </section>
                    <section className="border-grey bgr-grey team-box">
                        <header className="team-box__header">
                            Business team
                        <span className="icon icon-remove-2" />
                        </header>
                        <div className="avatar-row">
                            <Avatar email="tranxuan1096@gmail.com" color="cyan" size="medium" name="X" />
                            <a className="avatar avatar--medium bgr-dark-gray btn-plus" href="#">+</a>
                        </div>
                    </section>
                    <section className="border-grey bgr-grey team-box">
                        <header className="team-box__header">
                            Marketing team
                        <span className="icon icon-remove-2" />
                        </header>
                        <div className="avatar-row">
                            <Avatar email="tranxuan1096@gmail.com" color="cyan" size="medium" name="X" />
                            <Avatar email="tranxuan1096@gmail.com" color="cyan" size="medium" name="X" />
                            <Avatar email="tranxuan1096@gmail.com" color="cyan" size="medium" name="X" />
                            <a className="avatar avatar--medium bgr-dark-gray btn-plus" href="#">+</a>
                        </div>
                    </section>
                </section>
            </section>

        );
    }
}

export default SettingMemberTab;