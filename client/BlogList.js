var React = require('react');
var BlogComment = require('./BlogComment');

var BlogList = React.createClass({
	render: function(){
		var blogData = this.props.data.map(function(blog){
			if(blog.comments.length > 0){
				var comments = blog.comments.map(function(c){
					return (
						<p> {c.body} </p>
						)
				})	
			} else {
				var comments = "No Comments Yet.."
			}
			return (
				<div>
					<h3> {blog.title} </h3>
					<p> {blog.body} </p>
					<p> {blog.date} </p>
					{comments}					
					<BlogComment blogId={blog._id}/>
				</div>
				)
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

module.exports = BlogList;