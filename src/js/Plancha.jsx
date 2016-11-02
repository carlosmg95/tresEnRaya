var React = require('react');
var ReactDOM = require('react-dom');

import { Panel } from 'react-bootstrap';

const planchaStyle = {
    float: 'left'
}

var Plancha = React.createClass({
    render: function() {
        return (
            <Panel header={this.props.jugador.name}>
                {this.props.jugador.points}
            </Panel>
        )
    }

});

module.exports = Plancha;