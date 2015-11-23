var React = require('react');
var BlogComment = require('./BlogComment');
var prettydate = require('pretty-date');

var BlogList = React.createClass({
	
	render: function(){
		var self = this;
		var blogSort = this.props.data.sort(function(a, b){
			var x = a.date, y = b.date;
			return x < y ? -1 : x > y ? 1 : 0;
		});
		var blogData = this.props.data.map(function(blog){
			var comments = blog.comments.map(function(comment){
				window.com = comment.body;
				window.user = comment.user;
			})


			if(blog.comments.length > 0){
				var comments = blog.comments.map(function(c){
					var newDate = prettydate.format(new Date(c.date))
					return (
						<p> {c.body} <strong>{newDate}</strong> </p>
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
					<BlogComment blogId={blog._id} onPost={self.props.newData}/>
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