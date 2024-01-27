// © 2023 DJS 
 
 
 
 
 
class ComponentMenu { 
 
 
 
	static args = {}; 
 
 


	static arrBtns = [];




	static filter = {

		actor 		: 'all',
		country 	: 'all',
		genre 		: 'all',
		year 		: 'all',
		letter 		: 'all',
	};





 
	static html( objData = {} ) { 
		const name = this.name + '.html()'; 
 
		this.args = objData.args ? objData.args : {}; 
 
 
 
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

 

 		let optionGenre = '<option value="all">Жанр (всі)</option>';
 		arrGenres.forEach( k => {
 			optionGenre += `<option value="${ k.id }">${ k.title }</option>`;
 		});

 		let optionYear = '<option value="all">Рік (всі)</option>';
 		for ( let k in objFilmsYear ) 
 			optionYear += `<option value="${ k }">${ k }</option>`;
 		
 		let optionCountry = '<option value="all">Країна (всі)</option>';
 		arrCountry.forEach( k => {
 			if ( objFilmsCountry[ k.id ] ) {

 				if ( k.title ) {
 					if ( k.title.ua ) 
	 					optionCountry += `<option value="${ k.id }">${ k.title.ua }</option>`;
 				}
 			}
 		});

 		let optionActor = '<option value="all">Актор(ка) (всі)</option>';

		//console.log( arrFilmsActors.sort() );

		arrFilmsActors.sort().forEach( k => {

			//console.log( k );

			let name = '';
			if ( objListPeople[ k ] ) {
				if ( objListPeople[ k ].name ) {



					if ( objListPeople[ k ].name.n ) 
						name += objListPeople[ k ].name.n;

					if ( objListPeople[ k ].name.s ) 
						name += ' ' + objListPeople[ k ].name.s;
				} 
			}

		 	optionActor += `<option value="${ k }">${ name }</option>`;
		});





 		let optionLetter = '<option value="all">Літера (всі)</option>';
 		[ '123', 'А', 'Б', 'В', 'Г', 'Ґ', 'Д', 'Е', 'Є', 'Ж', 'З', 'И', 'І', 'Ї', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ю', 'Я', ].forEach( k => {
	 		optionLetter += `<option value="${ k }">${ k }</option>`;
 		});


 		let optionHash = '<option value="all">Хештеги (всі)</option>';
 		arrHashTags.forEach( k => {
 			optionHash += `<option value="${ k.id }">${ k.title }</option>`;
 		});



 		html += `
 			<div>
 				<select data-id="genre" onchange="${ this.name }.change( this )">${ optionGenre }</select>
 			</div>
 			<div>
 				<select data-id="year" onchange="${ this.name }.change( this )">${ optionYear }</select>
 			</div>
 			<div>
 				<select data-id="hash" onchange="${ this.name }.change( this )">${ optionHash }</select>
 			</div>
 			<div>
 				<select data-id="country" onchange="${ this.name }.change( this )">${ optionCountry }</select>
 			</div>
 			<div>
 				<select data-id="actor" onchange="${ this.name }.change( this )">${ optionActor }</select>
 			</div>
 			<div>
 				<select data-id="letter" onchange="${ this.name }.change( this )">${ optionLetter }</select>
 			</div>









 		`;



		return { tagParam, html };  
	} 
 
 
 
 





	static change( elem ) {  
		const fooName = this.name + '.change()';

		//console.log( 'fooName: ', fooName );
		//console.log( 'id: ', elem.dataset.id );
		//console.log( 'elem: ', elem.value );

		this.filter[ elem.dataset.id ] = elem.value;

		ComponentWinIndex.showSelectedFilms( this.filter );
	} 
 
 



 
	static clc( data ) {  
		const fooName = this.name + '.clc()';

		console.log( 'fooName: ', fooName );
		console.log( 'data: ', data );


		//console.log( 'data-id: ', data.dataset.id );
		//console.log( 'data-href: ', data.dataset.href );


		// чи відображти меню
		ComponentHeader.clc();


		if ( history.pushState ) {
			history.pushState( null, null, data );
			
			Router.loadContent();
		}

	} 
 
 
 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
