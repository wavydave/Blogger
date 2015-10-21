var Blog-List = React.createClass({
	render: function(){
		var BlogData = this.props.data.map(function(blogs){
			return (
				<div>
				<h2>{blog.title}</h2>
				<li> {blogs.body} </li>
				</div>
		});
		return (
			<div>
			<h1> Blogs </h1>
			<ul>
			{blogData}
			</ul>
			</div>
			);
	}
});

var BlogBox = React.createClass({
	getInitialState: function(){
		return{data: []};
	},

	loadBlogsFromServer: function(){
		$.ajax({
			url: this.props.url '/api/blog',
			dataType: 'json',
			cache: false,
			success: function(data){
				console.log("inside success")
				this.setState({data: data});

			}.bind(this),
			error: function(xhr, status, err) {
				console.log("broken url is " + this.props.url)
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
				<h1>Bloggin</h1>

				<Blog-List data={this.state.data}/>
			</div>
			);
	}
});
