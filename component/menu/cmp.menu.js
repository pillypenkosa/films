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




 		let arrFilmsYear = Object.keys( objFilmsYear ).reverse();
 		//console.log( arrFilmsYear );

 		let optionYear = '<option value="all">Рік (всі)</option>';
 		arrFilmsYear.forEach( k => {
 			optionYear += `<option value="${ k }">${ k }</option>`;
 		});

 		let optionCountry = '<option value="all">Країна (всі)</option>';
 		arrCountry.forEach( k => {
 			if ( objFilmsCountry[ k.id ] ) {

 				if ( k.title ) {
 					if ( k.title.ua ) 
	 					optionCountry += `<option value="${ k.id }">${ k.title.ua }</option>`;
 				}
 			}
 		});

 		let optionActor = '<option value="all">Актори (всі)</option>';
 		let optionDirectors = '<option value="all">Режисери (всі)</option>';
 		let optionComposser = '<option value="all">Композитори (всі)</option>';
 		let optionStudio = '<option value="all">Кінокомпанії (всі)</option>';


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



		arrFilmsDirectors.sort().forEach( k => {

			let name = '';

			if ( objListPeople[ k ] ) {

				if ( objListPeople[ k ].name.n ) 
					name += objListPeople[ k ].name.n;

				if ( objListPeople[ k ].name.s ) 
					name += ' ' + objListPeople[ k ].name.s;
			}

		 	optionDirectors += `<option value="${ k }">${ name }</option>`;
		});




		arrFilmsCompossers.sort().forEach( k => {

			let name = '';

			if ( objListPeople[ k ] ) {

				if ( objListPeople[ k ].name.n ) 
					name += objListPeople[ k ].name.n;

				if ( objListPeople[ k ].name.s ) 
					name += ' ' + objListPeople[ k ].name.s;
			}

		 	optionComposser += `<option value="${ k }">${ name }</option>`;
		});




		arrFilmStudio.forEach( k => {
			optionStudio += `<option value="${ k.id }">${ k.title }</option>`;
		});


 		let optionLetter = '<option value="all">Літера (всі)</option>';
 		[ 'eng', '123', 'А', 'Б', 'В', 'Г', 'Ґ', 'Д', 'Е', 'Є', 'Ж', 'З', 'И', 'І', 'Ї', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ю', 'Я', ].forEach( k => {
	 		optionLetter += `<option value="${ k }">${ k }</option>`;
 		});


 		let optionHash = '<option value="all">Хештеги (всі)</option>';
 		arrHashTags.forEach( k => {
 			optionHash += `<option value="${ k.id }">${ k.title }</option>`;
 		});






 		html += `
 			<div class="divSelectCat" data-id="divSelectCat">
	 			<div>
	 				<select data-id="year" onchange="${ this.name }.change( this )">${ optionYear }</select>
	 			</div>
	 			<div>
	 				<select data-id="genre" onchange="${ this.name }.change( this )">${ optionGenre }</select>
	 			</div>
	 			<div>
	 				<select data-id="country" onchange="${ this.name }.change( this )">${ optionCountry }</select>
	 			</div>
	 			<div>
	 				<select data-id="actor" onchange="${ this.name }.change( this )">${ optionActor }</select>
	 			</div>
	 			<div>
	 				<select data-id="director" onchange="${ this.name }.change( this )">${ optionDirectors }</select>
	 			</div>
	 			<div>
	 				<select data-id="composser" onchange="${ this.name }.change( this )">${ optionComposser }</select>
	 			</div>
	 			<div>
	 				<select data-id="studio" onchange="${ this.name }.change( this )">${ optionStudio }</select>
	 			</div>
	 			<div>
	 				<select data-id="hash" onchange="${ this.name }.change( this )">${ optionHash }</select>
	 			</div>
	 			<div>
	 				<select data-id="letter" onchange="${ this.name }.change( this )">${ optionLetter }</select>
	 			</div>

 			</div>
 			<br/>
 			<div>Добірки:</div>
 			<div class="divSelection" data-id="divSelection">
				<select onchange="${ this.name }.changeSelection( this )" data-id="selectSelection">
					<option value="all">Всі</option>
					<option value="rating5">5</option>
					<option value="favorite">Улюблені</option>
					<option value="bond">Джеймс Бонд</option>
				</select>
 			</div>

 		`;

		return { tagParam, html };  
	} 
 
 
 
 
	// підсвічування
	static ligtSelectOption( elem ) {

		if ( elem.value == 'all' ) {

			elem.style.backgroundColor = '';
			elem.style.color = '';

		} else {

			elem.style.backgroundColor = 'red';
			elem.style.color = 'white';
		}
	}



	static change( elem ) {  
		const fooName = this.name + '.change()';

		//console.log( 'fooName: ', fooName );
		//console.log( 'id: ', elem.dataset.id );
		//console.log( 'elem: ', elem.value );

		this.filter[ elem.dataset.id ] = elem.value;



		// вимкнення підсвітки іншого блоку
		let arrSelect = document.querySelectorAll( '.divSelection select' );
		arrSelect.forEach( k => {
			k.value = 'all';
			k.style.backgroundColor = '';
			k.style.color = '';
		});




		// підсвічування
		this.ligtSelectOption( elem );

		ComponentWinIndex.getSelectedFilms( this.filter );
	} 
 
 

	static changeSelection( elem ) {  
		const fooName = this.name + '.changeSelection()';

		//console.log( 'fooName: ', fooName );
		//console.log( 'elem: ', elem );
		//console.log( 'value: ', elem.value );
		


		// вимкнення підсвітки іншого блоку
		let arrSelect = document.querySelectorAll( '.divSelectCat select' );
		arrSelect.forEach( k => {
			k.value = 'all';
			k.style.backgroundColor = '';
			k.style.color = '';
		});



		// підсвічування
		this.ligtSelectOption( elem );

		ComponentWinIndex.getSelection( elem.value );
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
 
 
 	
 
 
 
 
 	
 
 
