var BlogForm = React.createClass({

	handleSubmit: function(e){
		e.preventDefault();
		var title =React.findDOMNode(this.refs.title).value.trim();
		var body =React.findDOMNode(this.refs.body).value.trim();

		if(!title){
			return;
		}
		var data = ({title: title, body: body});
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: function(data){
				console.log("inside success")
				document.location="./blog.html"

			}.bind(this),
			error: function(xhr, status, err) {
				console.log("It is Fucked Up!" + this.props.url)
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},
	render: function(){
		return (
			<div>
		        <form action="/api/blogPost" method="post">
		            <div id="blogForm">
		            </div>
		        
		            <div className="form-group">
		                <label for="">Blog Entry Title</label>
		                <input type="text" class="form-control" ref="title" placeholder="Input field"/>
		            </div>

		            <div className="form-group">
		                <label for="">Type it!</label>
		                <input type="text" class="form-control" ref="body" placeholder="Input field"/>

		            </div>
		            <button type="submit" class="btn btn-primary">Submit</button>
		        </form>
			</div>
			);
	}
});


React.render(<BlogForm url="/api/blog" />, document.getElementById('blogFrom'));