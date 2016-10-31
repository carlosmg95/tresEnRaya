(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var Cabecera = require("./Cabecera.jsx");
var Tablero = require("./Tablero.jsx");

var JUGADORX = "jugador 1 - las X";
var JUGADOR0 = "jugador 0 - los 0";
var VALORES = [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']];

var App = React.createClass({
    displayName: "App",

    getInitialState: function getInitialState() {
        return {
            turno: JUGADORX,
            valores: VALORES
        };
    },

    render: function render() {
        var texto = "Turno del " + this.state.turno;
        return React.createElement(
            "div",
            null,
            React.createElement(Cabecera, { texto: texto }),
            React.createElement(Tablero, { valores: this.state.valores })
        );
    }
});

module.exports = App;

},{"./Cabecera.jsx":2,"./Tablero.jsx":4}],2:[function(require,module,exports){
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

    render: function render() {
        return React.createElement(
            'button',
            { style: casillaStyle },
            this.props.valor
        );
    }
});

module.exports = Casilla;

},{}],4:[function(require,module,exports){
"use strict";

var Casilla = require("./Casilla.jsx");

var Tablero = React.createClass({
    displayName: "Tablero",

    render: function render() {
        var tablero = this.props.valores.map(function (valoresFila, indiceFila) {
            var fila = valoresFila.map(function (valor, indiceColumna) {
                var myKey = "" + indiceFila + indiceColumna;
                return React.createElement(Casilla, { valor: valor, key: myKey });
            });
            return React.createElement(
                "div",
                null,
                fila
            );
        });
        return React.createElement(
            "div",
            null,
            tablero
        );
    }
});

module.exports = Tablero;

},{"./Casilla.jsx":3}],5:[function(require,module,exports){
"use strict";

var App = require("./App.jsx");

ReactDOM.render(React.createElement(App, { valor: "X" }), document.getElementById('contenedor'));

},{"./App.jsx":1}]},{},[5]);
