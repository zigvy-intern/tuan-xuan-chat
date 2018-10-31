import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { render } from 'react-dom';
import { routes, isAuthenChange } from './../imports/startup/client/routes';

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  console.log('isAuthenticated',isAuthenticated);
  isAuthenChange(isAuthenticated);
});

Meteor.startup(() => {
  render(routes, document.getElementById('reactRoot'));
});