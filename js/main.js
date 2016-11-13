// wait for the document to be ready
	$(document).ready( function(){
		// stuff goes in here
		console.log("it works")

// format the name with an apostrophe eg. Guy -> Guy's (this uses one method anyhow)
		var personalize = function( name ) {
// add the users name to the page so it reads "Name's List of Things"
			return name + "'s";
		}
// prompt the user for their name
		// var username = prompt('What is your name?', 'don\'t get smart with me');
		// console.log( username );
//$-symbol will select an html element from the page
//#-symbol refers to a CSS id
//.text is a jQuery method that can get & set texts
//we are also calling the personalize function in this .text
		$( '#name' ).text( personalize( username ) );
	} );
// when the user submits the form (a setting method)
$( 'form' ).on( 'submit', function( e ){
	//e.prevent line below stops the page from reloading when the button is submitted
	e.preventDefault();
	//we now create a variable for the new 'thing' being submitted via button
	var thing = $( '#new-thing' ).val();
	// create a <li> tag of the new thing variable
	var item = '<li>' + thing + '</li>'
	//append a "favorites" ID to the new <li> tag
	$( '#favorites').append( item );
	//.focus method places the curser. .val method gives it a value
	$( '#new-thing' ).focus().val( '' );

});
// add the value of the input as a new item in the List
// clear the input box
	
