const casillaStyle = {
    height: '100px',
    width: '100px'
};

let Casilla = React.createClass({
    render: function() {
        return (<button style={casillaStyle}>{this.props.valor}</button>)
    }
});

module.exports = Casilla;
