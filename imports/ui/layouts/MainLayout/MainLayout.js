import React, { Component } from "react";


const MainLayout = (props) => {
  return (
    <div className="grid-container">
          {props.children}
      </div>
    );
}
 
export default MainLayout;