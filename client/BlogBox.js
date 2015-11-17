var BlogBox = React.createClass({
	getInitialState: function(){
		return{data: []};
	},

	loadBlogsFromServer: function(){
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
		this.loadBlogsFromServer();
	},

	render: function(){
		return(
			<div>
				<BlogList data={this.state.data}/>
			</div>
			);
	}
});