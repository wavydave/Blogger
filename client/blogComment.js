var React = require('react');

var BlogComment = React.createClass({
    handleCommentSubmit: function(e){
        e.preventDefault();
        var body = this.refs.body.getDOMNode().value;
        if(!body){
            return;
        }
        var data = ({ body: body });
        var blogId = this.props.blogId;
        $.ajax({
            url: '/api/blogs/'+ blogId +'/comments',
            dataType: 'json',
            data: data,
            type:'POST',
                success: function(response){
                console.log("posting data!", response)
                document.location="/blog.html"
                }.bind(this),
                error: function(xhr, status, err){
                    console.log("not posting data!")
                    console.error( status, err.toString());
                }.bind(this)
        })
        this.refs.body.getDOMNode().value = ''
        
    },
    render: function() {
      return (
        <div>
        	<form>
        	  <div className="form-group">
        	        
        	        <input type="text" className="form-control" ref="body" placeholder="comment"/>
        	  </div>
        	      	<button onClick={this.handleCommentSubmit} type="submit" className="btn btn-default">Submit</button>
          </form>
          
        </div>
        );
    }
});

module.exports = BlogComment;