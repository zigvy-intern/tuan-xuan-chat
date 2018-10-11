import React, { Component } from 'react';

const MainContent = (props) => {
    return ( 
        <main className={ props.class} >
            {props.children}
        </main>
     );
}
 
export default MainContent;