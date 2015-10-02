
    // var i = 0;
    // function buttonClick() {
    // 	i++;
    //     document.getElementById('i').innerHTML = i;
    //     console.log(i);
    // }

    console.log("IN app js")

function Fish(counter){
    	this.counter = counter;

    	this.buttonClick = function(){
    		this.counter ++;
    		document.getElementById('i').innerHTML = this.counter;
    	};
}
