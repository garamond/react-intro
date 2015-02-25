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
    getInitialState: function() {
        return {exit: 'left'};
    },
    _handleChange: function(e) {
        this.setState({exit: e.target.value});
    },
    render: function() {
        return (
            <div>
                <h3>Start</h3>
                <select value={this.state.exit} onChange={this._handleChange}>
                    <option value='left'>Left</option>
                    <option value='right'>Right</option>
                </select>
                <div className='gates'>
                    <Gate title='Gate A'
                          ball={this.state.exit=='left'}
                          buckets={['1','2']} />
                    <Gate title='Gate B'
                          ball={this.state.exit=='right'}
                          buckets={['3','4']}/>
                </div>
            </div>
        );
    }
});

var Gate = React.createClass({
    getInitialState: function() {
        return {exit: 'left'};
    },
    _handleChange: function(e) {
        this.setState({exit: e.target.value});
    },
    render: function() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <select value={this.state.exit} onChange={this._handleChange}>
                    <option value='left'>Left</option>
                    <option value='right'>Right</option>
                </select>
                <div className='buckets'>
                    <Bucket title={this.props.buckets[0]}
                            ball={this.props.ball && this.state.exit=='left'}/>
                    <Bucket title={this.props.buckets[1]}
                            ball={this.props.ball && this.state.exit=='right'}/>
                </div>
            </div>
        );
    }
});

var Bucket = React.createClass({
    render: function() {
        return (
            <span className={this.props.ball && 'win' || ''}>
                {this.props.title}
            </span>
        );
    }
});

React.render(<App />, document.getElementById('app'));