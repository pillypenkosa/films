// © 2023 DJS





class ComponentWinIndex {



	static args = {};





	static html( objData = {} ) {

		const fooName = this.name + '.html()';
		
		this.args = objData.args ? objData.args : {}; 


		let tagParam = {
			//'class' 		: 'active',
			//'name' 		: 'Any',
			//'title' 		: 'Всплывающая подсказка',
			//'data-id' 	: 'any-data',
			//'onclick' 	: `${ this.name }.clc( ${ this.name }.args )`,
			//'selected' 	: '',
			//'defer' 		: '',
		};



		//let html = '<div class="info">Бажаю здоров\'я! ))</div>';
		//let html = `<div>${ fooName }</div>`;
		let html = fooName;
		html = `<div id="showSelectedFilms">Оберіть категорію...</div>`;





		setMeta({
			title 			: 'Films',
			description 	: '',
			//keywords 		: 'Ключові слова...' + name,
			image 			: '',
			//url 			: 'url/any/there/' + name,
			//type 			: 'Тіпі-тіп ' + name,
			//site_name 	: 'Назва сайту, мабуть стале значення... ' + name,
		});



		return { tagParam, html };
	}






	static clc( data ) {
		const fooName = this.name + '.clc()';


		//console.log( 'fooName', fooName );
		//console.log( 'data', data );

	}








	static showSelectedFilms( data ) {
		const fooName = this.name + '.showSelectedFilms()';


		//console.log( 'fooName: ', fooName );
		//console.log( 'data: ', data );



		let arrSelectedFilms = arrFilms;




		if ( data.actor ) {
			if ( data.actor != 'all' ) {

				arrSelectedFilms = arrSelectedFilms.filter( k => {

					if ( k.cast ) {
						if ( k.cast[ data.actor ] ) 
							return true;
					}
				});
			}
		}


		if ( data.director ) {
			if ( data.director != 'all' ) {

				arrSelectedFilms = arrSelectedFilms.filter( k => {

					if ( k.director ) {
						if ( k.director[ data.director ] ) 
							return true;
					}
				});
			}
		}















		if ( data.country ) {
			if ( data.country != 'all' ) {

				arrSelectedFilms = arrSelectedFilms.filter( k => {

					if ( k.country ) {
						if ( k.country[ data.country ] ) 
							return true;
					}
				});
			}
		}

		if ( data.genre ) {
			if ( data.genre != 'all' ) {

				arrSelectedFilms = arrSelectedFilms.filter( k => {

					if ( k.genre ) {
						if ( k.genre[ data.genre ] ) 
							return true;
					}
				});
			}
		}


		if ( data.hash ) {
			if ( data.hash != 'all' ) {

				arrSelectedFilms = arrSelectedFilms.filter( k => {

					if ( k.hash ) {
						if ( k.hash[ data.hash ] ) 
							return true;
					}
				});
			}
		}


		if ( data.year ) {
			if ( data.year != 'all' ) {

				arrSelectedFilms = arrSelectedFilms.filter( k => {

					if ( k.year == data.year ) 
						return true;
					
				});
			}
		}


		if ( data.letter ) {
			if ( data.letter != 'all' ) {

				arrSelectedFilms = arrSelectedFilms.filter( k => {
					if ( k.title ) {
						if ( k.title.ua ) {

							let firstSym = k.title.ua.slice( 0, 1 );

							if ( data.letter == 'eng' ) {
								if ( /^[A-Z]$/.test( firstSym ) ) 
									return true;
							
							} else if ( data.letter == '123' ) {
								if ( /^[0-9]$/.test( firstSym ) ) 
									return true;

							} else {
								if ( data.letter == firstSym ) 
									return true;
							}
						}
					}
				});
			}
		}









		//console.log( 'arrSelectedFilms: ', arrSelectedFilms );



		let html = '';
		arrSelectedFilms.forEach( k => {

			let htmlTitle = '';
			let titleUa = '';
			let titleEn = '';

			let htmlCast = '';


			if ( k.title ) {

				if ( k.title.ua ) 
					titleUa += k.title.ua;
				
				if ( k.title.en ) 
					titleEn += k.title.en;

				if ( titleUa )
					htmlTitle += `<div class="titleUa">${ titleUa }</div>`;

				if ( titleEn )
					htmlTitle += `<div class="titleEn">${ titleEn }</div>`;
			}



			let htmlCountry = '';
			if ( k.country ) {
				for ( let k1 in k.country ) {
					if ( objCountry[ k1 ] ) {
						if ( objCountry[ k1 ].title ) {
							if ( objCountry[ k1 ].title.ua ) 
								htmlCountry += objCountry[ k1 ].title.ua + ', ';
						}	
					}
				}

				htmlCountry = htmlCountry.slice( 0, -2 );
			}



			let htmlGenre = '';
			if ( k.genre ) {
				for ( let k1 in k.genre ) {
					if ( objGenres[ k1 ] ) {
						if ( objGenres[ k1 ].title ) {
							htmlGenre += objGenres[ k1 ].title + ', ';
						}	
					}
				}

				htmlGenre = htmlGenre.slice( 0, -2 );
			}




			let htmlHash = '';
			if ( k.hash ) {
				for ( let k1 in k.hash ) {
					if ( objHashTags[ k1 ] ) {
						if ( objHashTags[ k1 ].title ) {
							htmlHash += `#${ objHashTags[ k1 ].title }, `;
						}	
					}
				}

				//htmlHash = htmlHash.slice( 0, -2 );
				htmlHash = `<div class="hash"><span class="key">хештеги: </span>${ htmlHash.slice( 0, -2 ) }</div>`;
			}





			let htmlImdb = '';
			let htmlWikiUa = '';
			let htmlWikiRu = '';
			let htmlAuliki7 = '';
			let htmlHdVip = '';

			if ( k.internet ) {

				if ( k.internet.ashdivip ) {
					htmlHdVip = `<a href="https://ashdi.vip/vod/${ k.internet.ashdivip }" target="_blank">
						<img src="img/pic/logo_hdvip.png" alt="HDVip">
					</a>`;
				}

				if ( k.internet.auliki7 ) {
					htmlAuliki7 = `<a href="http://auliki7.xyz/stream.php?name=films/${ k.internet.auliki7 }.mp4" target="_blank">
						<img src="img/pic/logo_auliki7.png" alt="Auliki7">
					</a>`;
				}

				if ( k.internet.imdb ) {
					htmlImdb = `<a href="https://www.imdb.com/title/tt${ k.internet.imdb }/" target="_blank">
						<img src="img/pic/logo_IMDb.png" alt="IMDB">
					</a>`;

				}

				if ( k.internet.wiki_ua ) {
					htmlWikiUa = `<a href="https://uk.wikipedia.org/wiki/${ k.internet.wiki_ua }" target="_blank">
						<img src="img/pic/sn_wiki_ua.png" alt="WikiUA">
					</a>`;

				}

				if ( k.internet.wiki_ru ) {
					htmlWikiRu = `<a href="https://ru.wikipedia.org/wiki/${ k.internet.wiki_ru }" target="_blank">
						<img src="img/pic/sn_wiki_ru.png" alt="WikiRU">
					</a>`;

				}
			}

/*
			if ( true ) {
				htmlCast = `<div class="cast">C A S T</div>`;
			}
*/



							//<div class="hash"><span class="key">хештеги:</span> ${ htmlHash }</div>
			html += `<div class="each">

				<div class="title">${ htmlTitle }</div>
				<div class="info">
					<div class="img">
						<img src="img/poster/${ k.id }.jpg" alt="${ k.title.ua }">
					</div>

					<div class="descr">
						<div class="txt">
							<div class="year"><span class="key">рік:</span> ${ k.year ? k.year : '' }</div>
							<div class="country"><span class="key">країна:</span> ${ htmlCountry }</div>
							<div class="genre"><span class="key">жанр:</span> ${ htmlGenre }</div>
							${ htmlHash }
						</div>

						<div class="internet">
							${ htmlImdb }
							${ htmlWikiUa }
							${ htmlWikiRu }
							${ htmlAuliki7 }
							${ htmlHdVip }
						</div>
					</div>
				</div>
				${ htmlCast }

			</div>`;
		});



		document.getElementById( 'showSelectedFilms' ).innerHTML = html;
	}




















}























