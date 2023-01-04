class Router {






	static go() {


		//str.slice( 1 );


		let url = window.location.hash.slice( 1 ).split('/');


		console.log( url );

		//alert( url[ 0 ] );


		document.querySelectorAll( 'cmp-app' )[ 0 ].innerHTML = ComponentHeader.html() + ComponentMiddle.html(); 

		let contentHtml = ComponentErr404.html();

		if ( routes[ url[ 0 ] ] ) 
			contentHtml = eval( routes[ url[ 0 ] ] + '.html()' );


		document.getElementById( 'content' ).innerHTML = contentHtml;



/*
		console.log( window.location );
		alert( window.location.hash );
		alert( window.location.hash.slice( 1 ) );
*/


	}




	static link( txt ) {

		//history - встроенный объект, не трогать!!!
		if ( history.pushState ) {
			history.pushState( null, null, window.location.protocol + "//" + window.location.host + window.location.pathname + '#' + txt );
		
			this.go();
		}
	}






}








