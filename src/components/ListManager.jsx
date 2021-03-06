var React = require('react');

var List = require('./List.jsx');

var ListManager = React.createClass({
    //Called once in component life cycle - an initializer
    getInitialState: function(){
        return {items:[],newItemText:''};
    },
    onChange: function(e){
        //Update the state property every time a keystroke is typed
        this.setState({newItemText:e.target.value});
    },
    handleSubmit:function(e){
        //stop the dafault form submit action
        e.preventDefault();
        //Grab the current list of items
        var currentItems = this.state.items;
        //Add the new items to the list
        currentItems.push(this.state.newItemText);

        this.setState({items:currentItems,newItemText:''});
    },
    render: function(){
        var divStyle = {
            marginTop:20
        };

        var headingStyle = {

        };

        if(this.props.headingColor){
            headingStyle.background = this.props.headingColor;
        }
        //onChange is called with every keystroke so we can store most recent data entered
        //value is what the user sees in the input text box - we point this to newItemText so it updates on every form submit
        return (
            <div style={divStyle} className="col-sm-4 col-md-4 col-md-4 col-xs-4">
                <div className="panel panel-primary">
                    <div className="panel-heading" style={headingStyle}>
                        <h3>{this.props.title}</h3>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="col-sm-9 col-md-9 col-md-9 col-xs-9">
                                <input className="form-control" onChange={this.onChange} value={this.state.newItemText} />
                            </div>
                            <div className="col-sm-2 col-md-2 col-md-2 col-xs-2">
                                <button className="btn btn-primary">Add</button>
                            </div>
                        </form>
                        <List items={this.state.items} />
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = ListManager;
