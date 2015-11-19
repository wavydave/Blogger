var React = require('react');

var BlogList = React.createClass({
	render: function(){
		var blogData = this.props.data.map(function(blog){
			return (
				<div>
					<h2>{blog.title}</h2>
					<li>{blog.body} </li>
					<li>{blog.comments}</li>
				</div>
				)
		});

		return (
			<div>
				<h1> Blogs </h1>
				<ul>
					{blogData}
				</ul>
				// <ul>
				// 	{commentData}
				// </ul>
			</div>
			);
	}
});
module.exports = BlogList;