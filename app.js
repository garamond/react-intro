var App = React.createClass({displayName: "App",
    render: function() {
        return (
            React.createElement("div", null, 
                React.createElement("h1", null, "Pinball Tycoon"), 
                React.createElement("p", null, "TODO: implement this")
            )
        );
    }
});

React.render(React.createElement(App, null), document.getElementById('app'));