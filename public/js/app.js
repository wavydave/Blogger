
    // var i = 0;
    // function buttonClick() {
    // 	i++;
    //     document.getElementById('i').innerHTML = i;
    //     console.log(i);
    // }

//     console.log("IN app js")

// function Fish(counter){
//     	this.counter = counter;

//     	this.buttonClick = function(){
//     		this.counter ++;
//     		document.getElementById('i').innerHTML = this.counter;
//     	};
// }

(function(){
$.getJSON( "http://localhost:3000/api/blog", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {

    items.push( "<li>" + val.title + val.body +"</li>" );
  });
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "#blog-list" );
});
})();

$(window).load(function){
    showMe();

    $.getJSON("/api/blog", function( data ){
        var items = [];
        $.each( data, function( key, val ){
            items.push("<article><header><h2>" + val.title
                +"</h2></header><section class=\"article-body\">"
                +val.body + "</section></article>");

        });
        $("<div/>",{
            "class": "my-new-list",
            html: items.join("")
        }).appendTo( "#blog-list");
    });
});
