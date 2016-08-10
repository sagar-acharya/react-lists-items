var React = require('react');
var ReactDOM = require('react-dom');
var ListManager = require('./components/ListManager.jsx');

ReactDOM.render(<ListManager title="Ingredients" />, document.getElementById('ingredients'));
/* Reusablity of components */
ReactDOM.render(<ListManager title="To Do List" />, document.getElementById('todo'));
ReactDOM.render(<ListManager title="Christmas List" headingColor="#e52d27"/>, document.getElementById('christmas'));
