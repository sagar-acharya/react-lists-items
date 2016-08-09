var React = require('react');

var ListItem = require('./ListItem.jsx');

var List = React.createClass({
    render: function(){
        var divStyle = {
            marginTop:60
        }
        var createItem = function(text,index){
            return <ListItem key={index + text} text={text} />;
        };

        return (<div style={divStyle}><ul className="nav nav-pills">{this.props.items.map(createItem)}</ul></div>);
    }
});

module.exports = List;
