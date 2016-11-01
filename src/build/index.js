(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var Cabecera = require("./Cabecera.jsx");
var Tablero = require("./Tablero.jsx");
var Marcador = require("./Marcador.jsx");

var JUGADORX = { name: "JUGADORX", text: "jugador 1 - las X", points: 0 };
var JUGADOR0 = { name: "JUGADOR0", text: "jugador 0 - los 0", points: 0 };
var jf = { name: "jf", text: "jugador f - las f", points: 90 };
var VALORES = [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']];
var jugadores = [JUGADOR0, JUGADORX, jf];

var horizontal = function horizontal(valores, numeroFila) {
    return valores[numeroFila][0] === valores[numeroFila][1] && valores[numeroFila][0] === valores[numeroFila][2];
};

var vertical = function vertical(valores, numeroColumna) {
    return valores[0][numeroColumna] === valores[1][numeroColumna] && valores[0][numeroColumna] === valores[2][numeroColumna];
};

var diagonal = function diagonal(valores) {
    var diagonal1 = [[valores[0][0], valores[1][1], valores[2][2]], ['-', '-', '-']];
    var diagonal2 = [[valores[0][2], valores[1][1], valores[2][0]], ['-', '-', '-']];

    return diagonal1[0].indexOf('-') < 0 && horizontal(diagonal1, 0) || diagonal2[0].indexOf('-') < 0 && horizontal(diagonal2, 0);
};

var App = React.createClass({
    displayName: "App",

    getInitialState: function getInitialState() {
        return {
            turno: JUGADORX,
            valores: VALORES,
            fin: false
        };
    },

    ganador: function ganador(valores, numeroFila, numeroColumna) {
        if (horizontal(valores, numeroFila) || vertical(valores, numeroColumna) || diagonal(valores)) {
            this.setState({
                fin: true
            });
            this.state.turno.points++;
            alert("El ganador es el " + this.state.turno.name);
        }
    },

    appClick: function appClick(numeroFila, numeroColumna) {
        var valores = this.state.valores;
        var nuevoValor = this.state.turno === JUGADORX ? 'X' : '0';
        valores[numeroFila][numeroColumna] = nuevoValor;
        this.ganador(valores, numeroFila, numeroColumna);
        this.setState({
            turno: this.state.turno === JUGADORX ? JUGADOR0 : JUGADORX,
            valores: this.state.valores
        });
    },

    render: function render() {
        var texto = "Turno del " + this.state.turno.text;
        return React.createElement(
            "div",
            null,
            React.createElement(Cabecera, { texto: texto }),
            React.createElement(Tablero, { valores: this.state.valores, manejadorTableroClick: this.appClick, fin: this.state.fin }),
            React.createElement(Marcador, { jugadores: jugadores })
        );
    }
});

module.exports = App;

},{"./Cabecera.jsx":2,"./Marcador.jsx":4,"./Tablero.jsx":6}],2:[function(require,module,exports){
"use strict";

var Cabecera = React.createClass({
    displayName: "Cabecera",

    render: function render() {
        return React.createElement(
            "header",
            { className: "cabecera" },
            this.props.texto
        );
    }
});

module.exports = Cabecera;

},{}],3:[function(require,module,exports){
'use strict';

var casillaStyle = {
    height: '100px',
    width: '100px'
};

var Casilla = React.createClass({
    displayName: 'Casilla',

    casillaClick: function casillaClick() {
        if (this.props.valor === "-" && !this.props.fin) {
            this.props.manejadorClick(this.props.indiceFila, this.props.indiceColumna);
        }
    },

    render: function render() {
        return React.createElement(
            'button',
            { style: casillaStyle, className: this.props.valor === "-" ? "clickable" : "no_clickable", onClick: this.casillaClick },
            this.props.valor
        );
    }
});

module.exports = Casilla;

},{}],4:[function(require,module,exports){
"use strict";

var Plancha = require("./Plancha.jsx");

var Marcador = React.createClass({
    displayName: "Marcador",

    render: function render() {
        var marcador = this.props.jugadores.map(function (jugador) {
            var myKey = jugador.name;
            return React.createElement(Plancha, { jugador: jugador, key: myKey });
        }, this);
        return React.createElement(
            "div",
            null,
            marcador
        );
    }
});

module.exports = Marcador;

},{"./Plancha.jsx":5}],5:[function(require,module,exports){
'use strict';

var planchaStyle = {
    float: 'left'
};

var Plancha = React.createClass({
    displayName: 'Plancha',

    render: function render() {
        return React.createElement(
            'div',
            { style: planchaStyle },
            React.createElement(
                'h3',
                null,
                this.props.jugador.name
            ),
            React.createElement(
                'p',
                null,
                this.props.jugador.points
            )
        );
    }

});

module.exports = Plancha;

},{}],6:[function(require,module,exports){
"use strict";

var Casilla = require("./Casilla.jsx");

var Tablero = React.createClass({
    displayName: "Tablero",

    tableroClick: function tableroClick(numeroFila, numeroColumna) {
        this.props.manejadorTableroClick(numeroFila, numeroColumna);
    },

    render: function render() {
        var tablero = this.props.valores.map(function (valoresFila, indiceFila) {
            var fila = valoresFila.map(function (valor, indiceColumna) {
                var myKey = "" + indiceFila + indiceColumna;
                return React.createElement(Casilla, { valor: valor, indiceFila: indiceFila, indiceColumna: indiceColumna, key: myKey, fin: this.props.fin, manejadorClick: this.tableroClick });
            }, this);
            return React.createElement(
                "div",
                null,
                fila
            );
        }, this);
        return React.createElement(
            "div",
            null,
            tablero
        );
    }
});

module.exports = Tablero;

},{"./Casilla.jsx":3}],7:[function(require,module,exports){
"use strict";

var App = require("./App.jsx");

ReactDOM.render(React.createElement(App, { valor: "X" }), document.getElementById('contenedor'));

},{"./App.jsx":1}]},{},[7]);
