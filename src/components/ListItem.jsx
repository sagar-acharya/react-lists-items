var React = require('react');

var ListItem = React.createClass({
    render: function(){
        return (
            <li className="list-group-item btn btn-success">
                <span role="presentation" className="">{this.props.text}</span>
            </li>
        );
    }
});

module.exports = ListItem;
