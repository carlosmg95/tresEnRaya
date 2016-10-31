var Casilla = require("./Casilla.jsx");

var Tablero = React.createClass({
    render: function() {
        let tablero = this.props.valores.map(function(valoresFila, indiceFila) {
            let fila = valoresFila.map(function(valor, indiceColumna) {
                let myKey = "" + indiceFila + indiceColumna;
                return (<Casilla valor={valor} key={myKey}/>)
            });
            return (<div>{fila}</div>)
        });
        return (<div>{tablero}</div>);
    }
});

module.exports = Tablero;
