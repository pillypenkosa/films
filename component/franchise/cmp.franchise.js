// © 2024 DJS 
 
 
 
 
 
class ComponentFranchise { 
 
 
 
	//static args = {}; 
 
 
 
	static html( arrData = [] ) { 
		const fooName = this.name + '.html()'; 
 
		//this.args = objData.args ? objData.args : {}; 
 
 
 
		let tagParam = { 
			//'class' 		: '', 
			//'name' 		: '', 
			//'title' 		: '', 
			//'data-id' 	: '', 
			//'onclick' 	: '', 
			//'selected' 	: '', 
			//'defer' 		: '', 
		}; 
 
 
 
		let html = ''; 


		//console.log( 'fooName: ', fooName ); 
		//console.log( 'arrData: ', arrData ); 

 
		//console.log( 'franchise: ', objFilmFranchise[ k.franchise ] );
		




		let htmlEach = '';
		arrData.forEach( k1 => {

			htmlEach += `<div class="each-franchise">
				<img src="img/poster/${ k1 }.jpg" title="${ k1 }" alt="${ k1 }" >
			</div>`;
		});

		if ( htmlEach ) {

			html = `
				<div class="txtTitle">Франшиза:</div>
				${ htmlEach }
			`;

		}


		return { tagParam, html };  
	} 
 
 
 
 
 
	static clc( data ) { 
		const fooName = this.name + '.clc()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'data', data ); 
 
	} 
 
 
 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
