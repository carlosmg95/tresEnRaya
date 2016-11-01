const Cabecera = require("./Cabecera.jsx");
const Tablero = require("./Tablero.jsx");
const Marcador = require("./Marcador.jsx");

const JUGADORX = {name: "JUGADORX", text: "jugador 1 - las X", points: 0};
const JUGADOR0 = {name: "JUGADOR0", text: "jugador 0 - los 0", points: 0};
const jf = {name: "jf", text: "jugador f - las f", points: 90};
const VALORES = [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']];
var jugadores = [JUGADOR0, JUGADORX, jf];

var horizontal = function(valores, numeroFila) {
    return valores[numeroFila][0] === valores[numeroFila][1] && valores[numeroFila][0] === valores[numeroFila][2];
};

var vertical = function(valores, numeroColumna) {
    return valores[0][numeroColumna] === valores[1][numeroColumna] && valores[0][numeroColumna] === valores[2][numeroColumna];
};

var diagonal = function(valores) {
    let diagonal1 = [[valores[0][0], valores[1][1], valores[2][2]], ['-', '-', '-']];
    let diagonal2 = [[valores[0][2], valores[1][1], valores[2][0]], ['-', '-', '-']];

    return (diagonal1[0].indexOf('-') < 0 && horizontal(diagonal1, 0)) || (diagonal2[0].indexOf('-') < 0 && horizontal(diagonal2, 0));
};

var App = React.createClass({
    getInitialState: function() {
        return {
            turno: JUGADORX,
            valores: VALORES,
            fin: false
        };
    },

    ganador: function(valores, numeroFila, numeroColumna) {
        if(horizontal(valores, numeroFila) || vertical(valores, numeroColumna) || diagonal(valores)) {
            this.setState({
                fin: true
            });
            this.state.turno.points++;
            alert("El ganador es el " + this.state.turno.name);
        }
    },

    appClick: function(numeroFila, numeroColumna) {
        let valores = this.state.valores;
        let nuevoValor = (this.state.turno === JUGADORX) ? 'X' : '0';
        valores[numeroFila][numeroColumna] = nuevoValor;
        this.ganador(valores, numeroFila, numeroColumna);
        this.setState({
            turno: (this.state.turno === JUGADORX) ? JUGADOR0 : JUGADORX,
            valores: this.state.valores
        });
    },

    render: function() {
        var texto = "Turno del " + this.state.turno.text;
        return (
            <div>
                <Cabecera texto={texto}/>
                <Tablero valores={this.state.valores} manejadorTableroClick={this.appClick} fin={this.state.fin}/>
                <Marcador jugadores={jugadores}/>
            </div>
        )
    }
});

module.exports = App;
