



const arrHashTags = [

	//{ id: 'air' 		, title: 'авіація' 			, },
	{ id: 'war2' 		, title: '2СвітоваВійна' 		, app: { films: 1, }, }, // Друга світова війна
	{ id: 'bus' 		, title: 'автобус' 				, app: { films: 1, }, },
	{ id: 'shark' 		, title: 'акули' 				, app: { films: 1, }, },
	{ id: 'apocalypse' 	, title: 'апокаліпсис' 			, app: { films: 1, }, },
	{ id: 'army' 		, title: 'армія' 				, app: { films: 1, }, },
	{ id: 'groundhog' 	, title: 'бабак' 				, app: { films: 1, }, }, // в стилі Дня Бабака
	{ id: 'bank' 		, title: 'банк' 				, app: { films: 1, }, },
	{ id: 'battle' 		, title: 'битва' 				, app: { films: 1, }, },
	{ id: 'fight' 		, title: 'бійці' 				, app: { films: 1, }, }, // бойові мистецтва
	{ id: 'biomedlab' 	, title: 'біомедлаб' 			, app: { films: 1, }, }, // досліди в лабораторіях
	{ id: 'bond' 		, title: 'ДжеймсБонд' 			, app: { films: 1, }, }, 
	{ id: 'bear' 		, title: 'ведмеді' 				, app: { films: 1, }, }, 
	{ id: 'surviving' 	, title: 'виживання' 			, app: { films: 1, }, }, // подорожі у часі
	{ id: 'virus' 		, title: 'вірус' 				, app: { films: 1, }, },
	{ id: 'prison' 		, title: 'в\'язниця' 			, app: { films: 1, }, },
	{ id: 'mountains' 	, title: 'гори' 				, app: { films: 1, }, },
	{ id: 'children' 	, title: 'діти' 				, app: { films: 1, }, },
	{ id: 'jungle' 		, title: 'джунглі' 				, app: { films: 1, }, }, 
	{ id: 'road' 		, title: 'дорога' 				, app: { films: 1, }, }, // події в дорозі
	{ id: 'winter' 		, title: 'зима' 				, app: { films: 1, }, },
	{ id: 'snake' 		, title: 'змії' 				, app: { films: 1, }, },
	{ id: 'zombie' 		, title: 'зомбі' 				, app: { films: 1, }, },
	{ id: 'aliens' 		, title: 'інопланетяни' 		, app: { films: 1, }, },
	{ id: 'cyber' 		, title: 'кібер' 				, app: { films: 1, }, },
	{ id: 'killer' 		, title: 'кілери' 				, app: { films: 1, }, },
	{ id: 'ship' 		, title: 'кораблі' 				, app: { films: 1, }, },
	{ id: 'space' 		, title: 'космос' 				, app: { films: 1, }, },
	{ id: 'love' 		, title: 'кохання' 				, app: { films: 1, }, },
	{ id: 'team' 		, title: 'команда' 				, app: { films: 1, }, }, // група осіб
	{ id: 'crocodile' 	, title: 'крокодили' 			, app: { films: 1, }, },
	{ id: 'plane' 		, title: 'літаки' 				, app: { films: 1, }, },
	{ id: 'future' 		, title: 'майбутнє' 			, app: { films: 1, }, },
	{ id: 'travel' 		, title: 'мандри' 				, app: { films: 1, }, }, // подорожі по світу
	{ id: 'maniac' 		, title: 'маніяк' 				, app: { films: 1, }, },
	{ id: 'cars' 		, title: 'машини' 				, app: { films: 1, }, },
	{ id: 'young' 		, title: 'молодь' 				, app: { films: 1, }, },
	{ id: 'sea' 		, title: 'море'					, app: { films: 1, }, },
	{ id: 'motorbike' 	, title: 'мотоцикли'			, app: { films: 1, }, },
	{ id: 'subway' 		, title: 'метро'				, app: { films: 1, }, },
	{ id: 'real' 		, title: 'наРеальнихПодіях' 	, app: { films: 1, }, }, // засновано на реальних подіях
	{ id: 'drugs' 		, title: 'наркотики' 			, app: { films: 1, }, },
	{ id: 'newyork' 	, title: 'Нью-Йорк' 			, app: { films: 1, }, },
	{ id: 'bodyChange' 	, title: 'обмінТілами' 			, app: { films: 1, }, }, // театр одного актора
	{ id: 'oneman' 		, title: 'один' 				, app: { films: 1, }, }, // театр одного актора
	{ id: 'island' 		, title: 'острів' 				, app: { films: 1, }, }, 
	{ id: 'trap' 		, title: 'пастка' 				, app: { films: 1, }, }, // випадкові смертельні пастки
	{ id: 'race' 		, title: 'перегони' 			, app: { films: 1, }, },
	{ id: 'underwater' 	, title: 'підВодою' 			, app: { films: 1, }, },
	{ id: 'planet' 		, title: 'планети' 				, app: { films: 1, }, }, // події на інших планетах
	{ id: 'beach' 		, title: 'пляж' 				, app: { films: 1, }, },
	{ id: 'robbery' 	, title: 'пограбування' 		, app: { films: 1, }, },
	{ id: 'train' 		, title: 'поїзд' 				, app: { films: 1, }, }, 
	{ id: 'police' 		, title: 'поліція' 				, app: { films: 1, }, },
	{ id: 'hunting' 	, title: 'полюванняНаЛюдину' 	, app: { films: 1, }, },
	{ id: 'justice' 	, title: 'правосуддя' 			, app: { films: 1, }, }, 
	{ id: 'psycho' 		, title: 'психо' 				, app: { films: 1, }, }, // зламай мозок
	{ id: 'desert' 		, title: 'пустеля' 				, app: { films: 1, }, },
	{ id: 'robot' 		, title: 'роботи' 				, app: { films: 1, }, },
	{ id: 'world' 		, title: 'світ' 				, app: { films: 1, }, }, // вигаданий світ
	{ id: 'treasure' 	, title: 'скарби' 				, app: { films: 1, }, },
	{ id: 'dog' 		, title: 'собаки' 				, app: { films: 1, }, },
	{ id: 'sport' 		, title: 'спорт' 				, app: { films: 1, }, },
	{ id: 'animal' 		, title: 'тварини' 				, app: { films: 1, }, },
	{ id: 'phone' 		, title: 'телефон' 				, app: { films: 1, }, }, // телефонні дзвінки/переговори
	{ id: 'terrorist' 	, title: 'терористи' 			, app: { films: 1, }, },
	{ id: 'techno' 		, title: 'техно' 				, app: { films: 1, }, }, // технології
	{ id: 'tropic' 		, title: 'тропіки' 				, app: { films: 1, }, },
	{ id: 'utopia' 		, title: 'утопія' 				, app: { films: 1, }, }, 
	{ id: 'time' 		, title: 'час' 					, app: { films: 1, }, }, // подорожі у часі

	//{ id: 'railroad' 	, title: 'залізниця' 		, },



];




let objHashTags = {};
arrHashTags.forEach( k => {
	objHashTags[ k.id ] = k;
});












