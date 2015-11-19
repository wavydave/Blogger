var React = require('react');

var twitter = React.createClass ({
	render: function(){
		return(
		<div className="col-md-4">
			<div className="panel panel-defualt box">
    			
    				<h3 className="panel-header">Code Proof</h3>
   			 			<span id="twitter"></span>
   			 		<div className="panel-body">
   			 		 Twitter Stuff
   			 		</div>
    			
			</div>
		</div>







			)
	}
})
var TwitterBox = React.createClass({

	getInitialState: function(){
		return{data: []};
	},

	loadTweetsFromServer: function(){
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			data:'data',
			cache: false,
			success: function(data){
				console.log("inside success")
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.log("You done Messed up, Boy " + this.props.url)
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},

	componentDidMount: function(){
		this.loadTweetsFromServer();
	},

	render: function(){
		return(
			
			<Twitter data={this.state.data}/>
			
		);
	}
});
module.exports = github;
