var Tablero = React.createClass({
    render: function() {
        let tablero = this.props.valores.map(function(valoresFila, indiceFila) {
            let fila = valoresFila.map(function(valor, indiceColumna) {
                return (<span>{valor}</span>)
            });
            return (<div>{fila}</div>)
        });
        return (<div>{tablero}</div>);
    }
});

module.exports = Tablero;
