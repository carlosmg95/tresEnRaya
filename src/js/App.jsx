const JUGADORX = "jugador 1 - las X";
const JUGADOR0 = "jugador 0 - los 0";
const VALORES = [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']];

var App = React.createClass({
    getInitialState: function() {
        return {
            turno: JUGADORX,
            valores: VALORES
        };
    },

    render: function() {
        var texto = "Turno del " + this.state.turno;
        let htmlTablero = this.state.valores.map(function(valoresFila, indiceFila) {
            let fila = valoresFila.map(function(valor, indiceColumna) {
                return (<span>{valor}</span>)
            });
            return (<div>{fila}</div>)
        });

        return (
            <div>
                <header class="cabecera">
                    {texto}
                </header>
                {htmlTablero}
            </div>
        )
    }
});

module.exports = App;
