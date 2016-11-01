const planchaStyle = {
    float: 'left'
}

var Plancha = React.createClass({
    render: function() {
        return (
            <div style={planchaStyle}>
                <h3>{this.props.jugador.name}</h3>
                <p>{this.props.jugador.points}</p>
            </div>
        )
    }

});

module.exports = Plancha;