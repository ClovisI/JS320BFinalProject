var React = require('react');
var ReactDom = require('react-dom');
require('./index.css');
var App = require('./components/App');

// state
// lifecycle event - little hooks that you can tie into so that you know when certain events happen
// UI

ReactDom.render(
  <App />,
  document.getElementById('app')
);
