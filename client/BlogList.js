var React = require('react');
var BlogComment = require('./BlogComment');
var prettydate = require('pretty-date');

var BlogList = React.createClass({

	render: function(){
		var self = this;
		var blogData = this.props.data.map(function(blog){
			if(blog.comments.length>0){
				var comments = blog.comments.map(function(comment){
					var newDate = prettydate.format(new Date(comment.date))
				return (
					<p> {comment.body} <strong>{newDate}</strong></p>
						)

				}).reverse();
			} else {
				var comments = "Nothing to be said"
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
		}).reverse();

		return (
			<div>
				<h1> Blogs </h1>
				<ul>
					{blogData}
				</ul>
			</div>
			)
	}
	
});

module.exports = BlogList;