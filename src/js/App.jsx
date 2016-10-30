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
        var htmlTablero = [];
        for(var i = 0; i < this.state.valores.length; i++) {
            var htmlFila = [];
            for (var j = 0; j < this.state.valores[i].length; j++) {
                htmlFila.push(<span>{this.state.valores[i][j]}</span>);
            }
            htmlTablero.push(<div>{htmlFila}</div>);
        }

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
