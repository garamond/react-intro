var App = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Pinball Tycoon</h1>
                <Start />
            </div>
        );
    }
});

var Start = React.createClass({
    render: function() {
        return (
            <div>
                <h3>Start</h3>
                <select>
                    <option value="left">Left</option>
                    <option value="right">Right</option>
                </select>
                <div className="gates">
                    <Gate />
                    <Gate />
                </div>
            </div>
        );
    }
});

var Gate = React.createClass({
    render: function() {
        return (
            <div>
                <h3>Gate</h3>
                <select>
                    <option value="left">Left</option>
                    <option value="right">Right</option>
                </select>
                <div className="buckets">
                    <Bucket />
                    <Bucket />
                </div>
            </div>
        );
    }
});

var Bucket = React.createClass({
    render: function() {
        return (
            <span>
                B
            </span>
        );
    }
});

React.render(<App />, document.getElementById('app'));