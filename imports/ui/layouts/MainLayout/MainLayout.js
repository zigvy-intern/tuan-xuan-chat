import React, { Component } from "react";

import Task from "../taskList/Task";
import Menu from "../menu/Menu";
import Header from "../header/Header";

// App component - represents the whole app
export default class MainLayout extends Component {
  // getTasks() {
  //   return [
  //     { _id: 1, text: "This is task 1" },
  //     { _id: 2, text: "This is task 2" },
  //     { _id: 3, text: "This is task 3" }
  //   ];
  // }

  // renderTasks() {
  //   return this.getTasks().map(task => <Task key={task._id} task={task} />);
  // }

  render() {
    return (
      <div className="grid-container">
        <Header/>
        <Menu/>
      </div>
    );
  }
}
