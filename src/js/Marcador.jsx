var React = require('react');
var ReactDOM = require('react-dom');

//var Plancha = require("./Plancha.jsx");

import { Panel } from 'react-bootstrap';

var Marcador = React.createClass({
    render: function() {
        let marcador = this.props.jugadores.map(function(jugador) {
            let myKey = jugador.name;
            return(
                <Panel key={myKey} header={jugador.name}>
                    {jugador.points}
                </Panel>
            );
        }, this);
        return(<div>{marcador}</div>);
    }
});

module.exports = Marcador;