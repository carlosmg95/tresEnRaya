var Plancha = require("./Plancha.jsx");

var Marcador = React.createClass({
    render: function() {
        let marcador = this.props.jugadores.map(function(jugador) {
            let myKey = jugador.name;
            return(<Plancha jugador={jugador} key={myKey}/>);
        }, this);
        return(<div>{marcador}</div>);
    }
});

module.exports = Marcador;