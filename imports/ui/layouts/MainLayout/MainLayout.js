import React, { Component } from 'react';
import { connect } from 'react-redux';

class MainLayout extends Component {
  render() {
    let { isDisplayMenu } = this.props;
    return (
      <div className={ isDisplayMenu === true ? `grid-container open-menu` : `grid-container`}>
            {this.props.children}
        </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    isDisplayMenu: state.isDisplayMenu
  }
}


export default connect(mapStateToProps, null)(MainLayout);