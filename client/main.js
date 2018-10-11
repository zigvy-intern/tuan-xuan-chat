import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '../imports/App';
import {BrowserRouter} from 'react-router-dom';

 
Meteor.startup(() => {
  render(<App />, document.getElementById('reactRoot'));
});