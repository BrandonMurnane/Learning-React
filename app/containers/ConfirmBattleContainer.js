var React = require('react');
var ConfirmBattle= require('../components/ConfirmBattle');

var ConfirmBattleContainer = React.createClass({
	contextTypes:{
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function(){
		return{
			isLoading: true,
			playerinfo:[]
		}
	},
	componentDidMount: function(){
		var query = this.props.location.query;
	},
	render() {
		return (
			<ConfirmBattle
				isLoading ={this.state.isLoading}
				playersinfo={this.state.playersinfo}
				/>
		);
	}
});

module.exports=ConfirmBattleContainer;