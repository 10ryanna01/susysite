
$(document).ready(function() { 
	

   $.getJSON("jerbstuff.json", function( data ) {

   	console.log('got your json bro')
    	var src = document.getElementById("ht").innerHTML.trim();
     

		var template = Handlebars.compile(src);

   

		var html = template( data );    
		$('#output').html( html );
    });







 });