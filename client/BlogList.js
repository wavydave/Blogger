var React = require('react');
var BlogComment = require('./BlogComment');
var prettydate = require('pretty-date');
var md5 = require('md5');


var BlogList = React.createClass({

	render: function(){
		var self = this;
		var blogData = this.props.data.map(function(blog){
			if(blog.comments.length>0){
				var comments = blog.comments.map(function(comment){
					window.user = comment.user;
					console.log(comment.user.local.email);
					var grav = "http://gravatar.com/avatar/" + md5(comment.user.local.email); 
					var newDate = prettydate.format(new Date(comment.date))
				return (
					<figure className="comment">
					<img src={grav}/>
					<p>{comment.user.local.handle}</p>
					<p> {comment.body} <strong>{newDate}</strong></p>
					</figure>
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