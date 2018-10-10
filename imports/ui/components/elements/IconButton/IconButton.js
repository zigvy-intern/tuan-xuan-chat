import React, { Component } from 'react';

class IconButton extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <div className={"icon bgr-"+this.props.color+" icon-"+this.props.icon}>
                    </div>
                    
            </React.Fragment>
          );
    }
}
 
export default IconButton;