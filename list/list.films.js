









const arrGenres = [

	{ id: 'sci_fi' 		, title: 'Sci-Fi' 		, },
	{ id: 'biography' 	, title: 'Біографія' 	, },
	{ id: 'action' 		, title: 'Бойовик' 		, },
	{ id: 'western' 	, title: 'Вестерн' 		, },
	{ id: 'war' 		, title: 'Воєнний' 		, },
	{ id: 'drama' 		, title: 'Драма' 		, },
	{ id: 'erotica' 	, title: 'Еротика' 		, },
	{ id: 'horror' 		, title: 'Жахи' 		, },
	{ id: 'history' 	, title: 'Історія' 		, },
	{ id: 'disaster' 	, title: 'Катастрофа' 	, },
	{ id: 'comedy' 		, title: 'Комедія' 		, },
	{ id: 'crime' 		, title: 'Кримінал' 	, },
	{ id: 'mystic' 		, title: 'Містика' 		, },
	{ id: 'cartoon' 	, title: 'Мультфільм' 	, },
	{ id: 'adventure' 	, title: 'Пригоди' 		, },
	{ id: 'trash' 		, title: 'Треш' 		, },
	{ id: 'thriller' 	, title: 'Трилер' 		, },
	{ id: 'fantasy' 	, title: 'Фентезі' 		, },

	{ id: 'air' 		, title: '#_авіація' 				, },
	{ id: 'apocalypse' 	, title: '#_апокаліпсис' 			, },
	{ id: 'army' 		, title: '#_армія' 					, },
	{ id: 'battle' 		, title: '#_битва' 					, },
	{ id: 'fight' 		, title: '#_бійці' 					, },
	{ id: 'biomedlab' 	, title: '#_біо_мед_лабораторія' 	, },
	{ id: 'world' 		, title: '#_вигаданий_світ' 		, },
	{ id: 'virus' 		, title: '#_вірус' 					, },
	{ id: 'prison' 		, title: '#_в\'язниця' 				, },
	{ id: 'groundhog' 	, title: '#_день_бабака' 			, },
	{ id: 'bond' 		, title: '#_Джеймс_Бонд' 			, },
	{ id: 'road' 		, title: '#_дорога' 				, },
	{ id: 'railroad' 	, title: '#_залізниця' 				, },
	{ id: 'zombie' 		, title: '#_зомбі' 					, },
	{ id: 'aliens' 		, title: '#_інопланетяни' 			, },
	{ id: 'planet' 		, title: '#_інші_планети' 			, },
	{ id: 'cyber' 		, title: '#_кібер' 					, },
	{ id: 'killer' 		, title: '#_кілери' 				, },
	{ id: 'space' 		, title: '#_космос' 				, },
	{ id: 'love' 		, title: '#_кохання' 				, },
	{ id: 'team' 		, title: '#_команда' 				, },
	{ id: 'future' 		, title: '#_майбутнє' 				, },
	{ id: 'travel' 		, title: '#_мандри' 				, },
	{ id: 'maniac' 		, title: '#_маніяк' 				, },
	{ id: 'young' 		, title: '#_молодь' 				, },
	{ id: 'sea' 		, title: '#_море'					, },
	{ id: 'story' 		, title: '#_на_реальних_подіях' 	, },
	{ id: 'race' 		, title: '#_перегони' 				, },
	{ id: 'time' 		, title: '#_переміщення_у_часі' 	, },
	{ id: 'robbery' 	, title: '#_пограбування' 			, },
	{ id: 'police' 		, title: '#_поліція' 				, },
	{ id: 'justice' 	, title: '#_правосуддя' 			, },
	{ id: 'psycho' 		, title: '#_психо' 					, },
	{ id: 'sport' 		, title: '#_спорт' 					, },
	{ id: 'animal' 		, title: '#_тварини' 				, },
	{ id: 'oneman' 		, title: '#_театр_одного_актора' 	, },
	{ id: 'terrorist' 	, title: '#_терористи' 				, },
	{ id: 'techno' 		, title: '#_технології' 			, },
	{ id: 'utopia' 		, title: '#_утопія' 				, },








];






let objGenres = {};
arrGenres.forEach( k => {
	objGenres[ k.id ] = k;
});








const arrFilms = [

















{
	id: 'skyfall_2012',
	title: { ua: '007: Координати Скайфолл', en: 'Skyfall', },
	year: 2012,
	country: { gbr: 1, },
	genre: { action: 1, thriller: 1, adventure: 1, bond: 1, },
	internet: {
		imdb: '1074638',
		wiki_ua: '007:_%D0%9A%D0%BE%D0%BE%D1%80%D0%B4%D0%B8%D0%BD%D0%B0%D1%82%D0%B8_%C2%AB%D0%A1%D0%BA%D0%B0%D0%B9%D1%84%D0%BE%D0%BB%D0%BB%C2%BB',
		ashdivip: '2534',
	},
	cast: {
		daniel_craig_02031968: 1,
	},
},
{
	id: '2_guns_2013',
	title: { ua: '2 стволи', en: '2 Guns', },
	year: 2013,
	country: { usa: 1, },
	genre: { action: 1, comedy: 1, },
	internet: {
		imdb: '1272878',
		wiki_ua: '%D0%94%D0%B2%D0%B0_%D1%81%D1%82%D0%B2%D0%BE%D0%BB%D0%B8_(%D1%84%D1%96%D0%BB%D1%8C%D0%BC)',
		ashdivip: '13651',
	},
	cast: {
		denzel_washington_28121954: 1,
		mark_wahlberg_05061971: 1,
		james_marsden_18091973: 1,
		bill_paxton_17051955: 1,
		paula_patton_05121975: 1,
	},
},
{
	id: '7_seconds_2005',
	title: { ua: '7 секунд', en: '7 Seconds', },
	year: 2005,
	country: { usa: 1, },
	internet: {
		imdb: '0417395',
		wiki_ru: '7_%D1%81%D0%B5%D0%BA%D1%83%D0%BD%D0%B4_(%D1%84%D0%B8%D0%BB%D1%8C%D0%BC)',
	},
	genre: { action: 1, crime: 1, comedy: 1, },
	cast: {
		wesley_snipes_31071962: 1,
	},
},
{
	id: '9_11_2017',
	title: { ua: '9/11', en: '9/11', },
	year: 2017,
	country: { usa: 1, },
	internet: {
		imdb: '4917224',
		wiki_ua: '9/11_(%D1%84%D1%96%D0%BB%D1%8C%D0%BC,_2017)',
		youtube: 'EfEZ6QFVAcE',
	},
	genre: { disaster: 1, },
	cast: {
		charlie_sheen_03091965: 1,
		whoopi_goldberg_13111955: 1,
		gina_gershon_10061962: 1,
	},
},
{
	id: '16_blocks_2006',
	title: { ua: '16 кварталів', en: '16 Blocks', },
	year: 2006,
	country: { usa: 1, },
	genre: { action: 1, thriller: 1, drama: 1, },
	internet: {
		imdb: '0450232',
		wiki_ua: '16_%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B0%D0%BB%D1%96%D0%B2',
	},
	cast: {
		bruce_willis_19031955: 1,
		david_morse_11101953: 1,
	},
},
{
	id: 'mile_22_2018',
	title: { ua: '22 милі', en: 'Mile 22', },
	year: 2018,
	country: { usa: 1, },
	genre: { action: 1, thriller: 1, },
	internet: {
		imdb: '4560436',
		wiki_ua: '22_%D0%BC%D0%B8%D0%BB%D1%96',
	},
	cast: {
		mark_wahlberg_05061971: 1,
		john_malkovich_09121953: 1,
	},
},
{
	id: '28_days_2000',
	title: { ua: '28 днів', en: '28 Days', },
	year: 2000,
	country: { usa: 1, },
	genre: { drama: 1, comedy: 1, },
	internet: {
		imdb: '0191754',
		wiki_ua: '28_%D0%B4%D0%BD%D1%96%D0%B2',
	},
	cast: {
		sandra_bullock_26071964: 1,
		steve_buscemi_13121957: 1,
	},
},
{
	id: '57_seconds_2023',
	title: { ua: '57 секунд', en: '57 Seconds', },
	year: 2023,
	country: { usa: 1, },
	genre: { sci_fi: 1, thriller: 1, groundhog: 1, },
	internet: {
		imdb: '18083578',
		wiki_ua: '57_%D1%81%D0%B5%D0%BA%D1%83%D0%BD%D0%B4',
	},
	cast: {},
},
{
	id: '65_2023',
	title: { ua: '65', en: '65', },
	year: 2023,
	country: { usa: 1, },
	genre: { fantasy: 1, adventure: 1, drama: 1, },
	internet: {
		imdb: '12261776',
		wiki_uа: '65_(%D1%84%D1%96%D0%BB%D1%8C%D0%BC)',
	},
	cast: {},
},
{
	id: '2012_2009',
	title: { ua: '2012', en: '2012', },
	year: 2009,
	country: { usa: 1, },
	genre: { fantasy: 1, disaster: 1, apocalypse: 1, },
	internet: {
		imdb: '1190080',
		wiki_ua: '2012_(%D1%84%D1%96%D0%BB%D1%8C%D0%BC)',
	},
	cast: {
		john_cusack_28061966: 1,
		thandie_newton_06111972: 1,
		woody_harrelson_23071961: 1,
		danny_glover_22071946: 1,
	},
},
{
	id: 'les_morfalous_1984',
	title: { ua: 'Авантюристи', en: 'Les morfalous', },
	year: 1984,
	country: { usa: 1, },
	genre: { action: 1, comedy: 1, drama: 1, army: 1, },
	internet: {
		imdb: '0087742',
		wiki_ua: '%D0%90%D0%B2%D0%B0%D0%BD%D1%82%D1%8E%D1%80%D0%B8%D1%81%D1%82%D0%B8_(%D1%84%D1%96%D0%BB%D1%8C%D0%BC,_1984)',
	},
	cast: {
		jean_paul_belmondo_09041933: 1,
	},
},
{
	id: 'breakdown_1997',
	title: { ua: 'Аварія', en: 'Breakdown', },
	year: 1997,
	country: { usa: 1, },
	genre: { thriller: 1, crime: 1, road: 1, },
	internet: {
		imdb: '0118771',
		wiki_ua: '%D0%94%D0%BE%D1%80%D0%BE%D0%B3%D0%BE%D1%8E',
	},
	cast: {
		kurt_russell_17031951: 1,
	},
},
{
	id: 'avatar_1_2009',
	title: { ua: 'Аватар', en: 'Avatar', },
	year: 2009,
	country: { usa: 1, },
	genre: { action: 1, sci_fi: 1, planet: 1, world: 1, battle: 1, },
	internet: {
		imdb: '0499549',
		wiki_ua: '%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80_(%D1%84%D1%96%D0%BB%D1%8C%D0%BC)',
		trailer: '5PSNL1qE6VY',
		ashdivip: '331',
	},
	cast: {
		sam_worthington_02081976: 1,
		zoe_saldana_19061978: 1,
		sigourney_weaver_08101949: 1,
		michelle_rodriguez_12071978: 1,
	},
},
{
	id: 'avatar_2_2022',
	title: { ua: 'Аватар - 2', en: 'Avatar: The Way of Water', },
	year: 2022,
	country: { usa: 1, },
	genre: { action: 1, sci_fi: 1, planet: 1, world: 1, battle: 1, },
	internet: {
		imdb: '1630029',
		wiki_ua: '%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80:_%D0%A8%D0%BB%D1%8F%D1%85_%D0%B2%D0%BE%D0%B4%D0%B8',
		ashdivip: '90444',
	},
	cast: {
		sam_worthington_02081976: 1,
		zoe_saldana_19061978: 1,
		sigourney_weaver_08101949: 1,
		kate_winslet_05101975: 1,
	},
},
{
	id: 'the_aviator_2004',
	title: { ua: 'Авіатор', en: 'The Aviator', },
	year: 2004,
	country: { usa: 1, },
	genre: { drama: 1, biography: 1, },
	internet: {
		imdb: '0338751',
		wiki_ua: '%D0%90%D0%B2%D1%96%D0%B0%D1%82%D0%BE%D1%80_(%D1%84%D1%96%D0%BB%D1%8C%D0%BC)',
	},
	cast: {
		leonardo_dicaprio_11111974: 1,
		cate_blanchett_14051969: 1,
		kate_beckinsale_26071973: 1,
		alec_baldwin_03041958: 1,
		willem_dafoe_22071955: 1,
	},
},
{
	id: 'the_devil_s_advocate_1997',
	title: { ua: 'Адвокат диявола', en: 'The Devil\'s Advocate', },
	year: 1997,
	country: { usa: 1, },
	genre: { mystic: 1, drama: 1, justice: 1, },
	internet: {
		imdb: '0118971',
		wiki_ua: '%D0%90%D0%B4%D0%B2%D0%BE%D0%BA%D0%B0%D1%82_%D0%94%D0%B8%D1%8F%D0%B2%D0%BE%D0%BB%D0%B0_(%D1%84%D1%96%D0%BB%D1%8C%D0%BC)',
	},
	cast: {
		keanu_reeves_02091964: 1,
		al_pacino_25041940: 1,
		charlize_theron_07081975: 1,
		connie_nielsen_03071965: 1,
	},
},
{
	id: 'a_x_l_2018',
	title: { ua: 'Аксель', en: 'A-X-L', },
	year: 2018,
	country: { usa: 1, },
	genre: { action: 1, sci_fi: 1, drama: 1, techno: 1, young: 1, },
	internet: {
		imdb: '5709188',
		wiki_ua: '%D0%90%D0%BA%D1%81%D0%B5%D0%BB%D1%8C_(%D1%84%D1%96%D0%BB%D1%8C%D0%BC)',
	},
	cast: {
		becky_g_02031997: 1,
	},
},
{
	id: 'Alan_Quatermain_1986',
	title: { ua: 'Аллан Квотермейн і загублене Золоте місто', en: 'Allan Quatermain and the Lost City of Gold', },
	year: 1986,
	country: { usa: 1, },
	genre: { action: 1, adventure: 1, travel: 1, },
	internet: {
		imdb: '0092534',
		wiki_ru: '%D0%90%D0%BB%D0%BB%D0%B0%D0%BD_%D0%9A%D1%83%D0%BE%D1%82%D0%B5%D1%80%D0%BC%D0%B5%D0%B9%D0%BD_%D0%B8_%D0%BF%D0%BE%D1%82%D0%B5%D1%80%D1%8F%D0%BD%D0%BD%D1%8B%D0%B9_%D0%B3%D0%BE%D1%80%D0%BE%D0%B4_%D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D0%B0',
	},
	cast: {
		sharon_stone_10031958: 1,
	},
},
{
	id: 'Amelie_2001',
	title: { ua: 'Амелі', en: 'Le fabuleux destin d`Amélie Poulain', },
	year: 2001,
	country: { usa: 1, },
	genre: { drama: 1, comedy: 1, psycho: 1, },
	internet: {
		imdb: '0211915',
		wiki_ua: '%D0%90%D0%BC%D0%B5%D0%BB%D1%96',
	},
	cast: {
		audrey_tautou_09081976: 1,
		jamel_debbouze_18061975: 1,
	},
},
{
	id: 'app_2013',
	title: { ua: 'Андроід', en: 'App', },
	year: 2013,
	country: { usa: 1, },
	genre: { thriller: 1, sci_fi: 1, cyber: 1, young: 1, },
	internet: {
		imdb: '2536436',
		wiki_ua: '%D0%90%D0%BD%D0%B4%D1%80%D0%BE%D1%97%D0%B4_(%D1%84%D1%96%D0%BB%D1%8C%D0%BC,_2013)',
	},
},
{
	id: 'anon_2018',
	title: { ua: 'Анон', en: 'Anon', },
	year: 2018,
	country: { usa: 1, },
	genre: { sci_fi: 1, crime: 1, utopia: 1, world: 1, },
	internet: {
		imdb: '5397194',
		wiki_ua: '%D0%90%D0%BD%D0%BE%D0%BD_(%D1%84%D1%96%D0%BB%D1%8C%D0%BC)',
	},
},
{
	id: 'apollo_13_1995',
	title: { ua: 'Аполлон 13', en: 'Apollo 13', },
	year: 1995,
	country: { usa: 1, },
	genre: { drama: 1, history: 1, space: 1, story: 1, },
	internet: {
		imdb: '0112384',
		wiki_ua: '%D0%90%D0%BF%D0%BE%D0%BB%D0%BB%D0%BE%D0%BD-13_(%D1%84%D1%96%D0%BB%D1%8C%D0%BC)',
		ashdivip: '14886',
	},
	cast: {
		tom_hanks_09071956: 1,
		kevin_bacon_08071958: 1,
		bill_paxton_17051955: 1,
		ed_harris_28111950: 1,
	},
},
{
	id: 'armageddon_1998',
	title: { ua: 'Армагеддон', en: 'Armageddon', },
	year: 1998,
	country: { usa: 1, },
	genre: { action: 1, disaster: 1, sci_fi: 1, space: 1, apocalypse: 1, },
	internet: {
		imdb: '0120591',
		wiki_ua: '%D0%90%D1%80%D0%BC%D0%B0%D0%B3%D0%B5%D0%B4%D0%B4%D0%BE%D0%BD_(%D1%84%D1%96%D0%BB%D1%8C%D0%BC,_1998)',
		ashdivip: '14016',
	},
	cast: {
		bruce_willis_19031955: 1,
		ben_affleck_15081972: 1,
		liv_tyler_01071977: 1,
		steve_buscemi_13121957: 1,
		michael_clarke_duncan_10121957: 1,
		michael_bay_17021965: 1,
	},
},
{
	id: 'barbie_2023',
	title: { ua: 'Барбі', en: 'Barbie', },
	year: 2023,
	country: { usa: 1, },
	genre: { fantasy: 1, comedy: 1, world: 1, },
	internet: {
		imdb: '1517268',
		wiki_ua: '%D0%91%D0%B0%D1%80%D0%B1%D1%96_(%D1%84%D1%96%D0%BB%D1%8C%D0%BC)',
	},
	cast: {
		margot_robbie_02071990: 1,
	},
},
{
	id: 'under_siege_1992',
	title: { ua: 'В облозі', en: 'Under Siege', },
	year: 1992,
	country: { usa: 1, },
	genre: { action: 1, terrorist: 1, sea: 1, fight: 1, },
	internet: {
		imdb: '0105690',
		wiki_ua: '%D0%92_%D0%BE%D0%B1%D0%BB%D0%BE%D0%B7%D1%96',
	},
	cast: {
		steven_seagal_10041952: 1,
		tommy_lee_jones_15091946: 1,
		gary_busey_29061944: 1,
		george_bush_12061924: 1,
	},
},
{
	id: 'under_siege_2_1995',
	title: { ua: 'В облозі - 2', en: 'Under Siege 2: Dark Territory', },
	year: 1995,
	country: { usa: 1, },
	genre: { action: 1, terrorist: 1, sea: 1, fight: 1, },
	internet: {
		imdb: '0114781',
		wiki_ua: '%D0%92_%D0%BE%D0%B1%D0%BB%D0%BE%D0%B7%D1%96_2:_%D0%A2%D0%B5%D0%BC%D0%BD%D0%B0_%D1%82%D0%B5%D1%80%D0%B8%D1%82%D0%BE%D1%80%D1%96%D1%8F',
	},
	cast: {
		steven_seagal_10041952: 1,
		brenda_bakke_15051963: 1,
		peter_greene_08101965: 1,
	},
},
{
	id: 'cocaine_bear_2023',
	title: { ua: 'Ведмідь під кайфом', en: 'Cocaine Bear', },
	year: 2023,
	country: { usa: 1, },
	genre: { comedy: 1, animal: 1, },
	internet: {
		imdb: '14209916',
		wiki_ua: '%D0%92%D0%B5%D0%B4%D0%BC%D1%96%D0%B4%D1%8C_%D0%BF%D1%96%D0%B4_%D0%BA%D0%B0%D0%B9%D1%84%D0%BE%D0%BC',
		ashdivip: '91155',
	},
	cast: {},
},
{
	id: 'wolf_creek_2_2013',
	title: { ua: 'Вовча яма - 2', en: 'Wolf Creek 2', },
	year: 2013,
	country: { aus: 1, },
	genre: { horror: 1, trash: 1, maniac: 1, },
	internet: {
		imdb: '2004432',
		wiki_ru: '%D0%92%D0%BE%D0%BB%D1%87%D1%8C%D1%8F_%D1%8F%D0%BC%D0%B0_2',
	},
	cast: {},
},
{
	id: 'wall_e_2008',
	title: { ua: 'ВОЛЛ-І', en: 'WALL·E', },
	year: 2008,
	country: { usa: 1, },
	genre: { cartoon: 1, planet: 1, techno: 1, },
	internet: {
		imdb: '0910970',
		wiki_ua: '%D0%92%D0%9E%D0%9B%D0%9B%C2%B7%D0%86',
		ashdivip: '3303',
	},
},
{
	id: 'chicken_run_2000',
	title: { ua: 'Втеча з курника', en: 'Chicken Run', },
	year: 2000,
	country: { usa: 1, },
	genre: { cartoon: 1, prison: 1, },
	internet: {
		imdb: '0120630',
		wiki_ua: '%D0%92%D1%82%D0%B5%D1%87%D0%B0_%D0%B7_%D0%BA%D1%83%D1%80%D0%BD%D0%B8%D0%BA%D0%B0',
		ashdivip: '95971',
	},
},
{
	id: 'chicken_run_2_2023',
	title: { ua: 'Втеча з курника - 2', en: 'Chicken Run: Dawn of the Nugget', },
	year: 2023,
	country: { gbr: 1, usa: 1, },
	genre: { cartoon: 1, },
	internet: {
		imdb: '8337264',
		wiki_ua: '%D0%92%D1%82%D0%B5%D1%87%D0%B0_%D0%B7_%D0%BA%D1%83%D1%80%D0%BD%D0%B8%D0%BA%D0%B0_2',
		ashdivip: '111862',
	},
},
{
	id: 'Harley_Davidson_and_the_Marlboro_man_1991',
	title: { ua: 'Гарлі Девідсон та ковбой Мальборо', en: 'Harley Davidson and the Marlboro Man', },
	year: 1991,
	country: { usa: 1, },
	genre: { action: 1, crime: 1, },
	internet: {
		imdb: '0102005',
		wiki_ua: '%D0%93%D0%B0%D1%80%D0%BB%D1%96-%D0%94%D0%B5%D0%B2%D1%96%D0%B4%D1%81%D0%BE%D0%BD_%D1%96_%D0%BA%D0%BE%D0%B2%D0%B1%D0%BE%D0%B9_%D0%9C%D0%B0%D0%BB%D1%8C%D0%B1%D0%BE%D1%80%D0%BE',
		ashdivip: '63609',
		auliki7: 'Harley.Davidson.and.the.Marlboro.Man',
	},
	cast: {
		mickey_rourke_16091952: 1,
		don_johnson_15121949: 1,
		tom_sizemore_29111961: 1,
		daniel_baldwin_07081960: 1,
		tia_carrere_02011967: 1,
	},
},
{
	id: 'the_hunger_games_5_2023',
	title: { ua: 'Голодні ігри - 5', en: 'The Hunger Games: The Ballad of Songbirds & Snakes', },
	year: 2023,
	country: { usa: 1, },
	genre: { fantasy: 1, utopia: 1, young: 1, },
	internet: {
		imdb: '10545296',
		wiki_ua: '%D0%93%D0%BE%D0%BB%D0%BE%D0%B4%D0%BD%D1%96_%D1%96%D0%B3%D1%80%D0%B8:_%D0%91%D0%B0%D0%BB%D0%B0%D0%B4%D0%B0_%D0%BF%D1%80%D0%BE_%D1%81%D0%BF%D1%96%D0%B2%D0%BE%D1%87%D0%B8%D1%85_%D0%BF%D1%82%D0%B0%D1%88%D0%BE%D0%BA_%D1%96_%D0%B7%D0%BC%D1%96%D0%B9',
	},
	cast: {
		peter_dinklage_11061969: 1,
	},
},
{
	id: 'twelve_monkeys_1995',
	title: { ua: 'Дванадцять мавп', en: 'Twelve Monkeys', },
	year: 1995,
	country: { usa: 1, },
	genre: { sci_fi: 1, mystic: 1, thriller: 1, time: 1, },
	internet: {
		imdb: '0114746',
		wiki_ua: '12_%D0%BC%D0%B0%D0%B2%D0%BF',
	},
	cast: {
		bruce_willis_19031955: 1,
		brad_pitt_18121963: 1,
		david_morse_11101953: 1,
	},
},
{
	id: 'jack_mimoun_2022',
	title: { ua: 'Джек Мімун', en: 'Jack Mimoun & les secrets de Val Verde', },
	year: 2022,
	country: { fra: 1, },
	genre: { adventure: 1, comedy: 1, travel: 1, },
	internet: {
		imdb: '21249808',
		wiki_ua: '',
	},
	cast: {},
},
{
	id: 'the_marsh_kings_daughter_2023',
	title: { ua: 'Дочка болотного короля', en: 'The Marsh King\'s Daughter', },
	year: 2023,
	country: { usa: 1, },
	genre: { drama: 1, crime: 1, },
	internet: {
		imdb: '8002382',
		wiki_ua: '%D0%94%D0%BE%D1%87%D0%BA%D0%B0_%D0%B1%D0%BE%D0%BB%D0%BE%D1%82%D0%BD%D0%BE%D0%B3%D0%BE_%D0%BA%D0%BE%D1%80%D0%BE%D0%BB%D1%8F',
	},
	cast: {},
},
{
	id: 'the_delta_force_1986',
	title: { ua: 'Загін Дельта', en: 'The Delta Force', },
	year: 1986,
	country: { usa: 1, },
	genre: { action: 1, terrorist: 1, army: 1, fight: 1, },
	internet: {
		imdb: '0090927',
		wiki_ua: '%D0%97%D0%B0%D0%B3%D1%96%D0%BD_%C2%AB%D0%94%D0%B5%D0%BB%D1%8C%D1%82%D0%B0%C2%BB',
	},
	cast: {
		chuck_norris_10031940: 1,
	},
},
{
	id: 'the_delta_force_2_1990',
	title: { ua: 'Загін Дельта - 2', en: 'Delta Force 2: The Colombian Connection', },
	year: 1990,
	country: { usa: 1, },
	genre: { action: 1, terrorist: 1, army: 1, fight: 1, },
	internet: {
		imdb: '0099399',
		wiki_ua: '%D0%97%D0%B0%D0%B3%D1%96%D0%BD_%C2%AB%D0%94%D0%B5%D0%BB%D1%8C%D1%82%D0%B0%C2%BB_2',
	},
	cast: {
		chuck_norris_10031940: 1,
	},
},
{
	id: 'the_lost_city_2022',
	title: { ua: 'Загублене місто', en: 'The Lost City', },
	year: 2022,
	country: { usa: 1, },
	genre: { adventure: 1, comedy: 1, travel: 1, },
	internet: {
		imdb: '13320622',
		wiki_ua: '%D0%97%D0%B0%D0%B3%D1%83%D0%B1%D0%BB%D0%B5%D0%BD%D0%B5_%D0%BC%D1%96%D1%81%D1%82%D0%BE_(%D1%84%D1%96%D0%BB%D1%8C%D0%BC,_2022)',
	},
	cast: {
		sandra_bullock_26071964: 1,
		brad_pitt_18121963: 1,
	}
},
{
	id: 'end_of_days_1999',
	title: { ua: 'Кінець світу', en: 'End of Days', },
	year: 1999,
	country: { usa: 1, },
	genre: { action: 1, mystic: 1, },
	internet: {
		imdb: '0146675',
		wiki_ua: '%D0%9A%D1%96%D0%BD%D0%B5%D1%86%D1%8C_%D1%81%D0%B2%D1%96%D1%82%D1%83_(%D1%84%D1%96%D0%BB%D1%8C%D0%BC,_1999)',
		ashdivip: '4460',
	},
	cast: {
		arnold_schwarzenegger_30071947: 1,
		kevin_pollak_30101957: 1,
	},
},
{
	id: 'commando_1985',
	title: { ua: 'Командо', en: 'Commando', },
	year: 1985,
	country: { usa: 1, },
	genre: { action: 1, army: 1, terrorist: 1, },
	internet: {
		imdb: '0088944',
		wiki_ua: '%D0%9A%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D0%BE_(%D1%84%D1%96%D0%BB%D1%8C%D0%BC)',
		ashdivip: '1825',
	},
	cast: {
		arnold_schwarzenegger_30071947: 1,
		alyssa_milano_19121972: 1,
		bill_duke_26021943: 1,
		bill_paxton_17051955: 1,
	},
},
{
	id: 'monsters_inc_2001',
	title: { ua: 'Корпорація монстрів', en: 'Monsters Inc', },
	year: 2001,
	country: { usa: 1, },
	genre: { cartoon: 1, world: 1, },
	internet: {
		imdb: '0198781',
		wiki_ua: '%D0%9A%D0%BE%D1%80%D0%BF%D0%BE%D1%80%D0%B0%D1%86%D1%96%D1%8F_%D0%BC%D0%BE%D0%BD%D1%81%D1%82%D1%80%D1%96%D0%B2',
		ashdivip: '3194',
	},
},
{
	id: 'strays_2023',
	title: { ua: 'Кудлаті перці', en: 'Strays', },
	year: 2023,
	country: { usa: 1, },
	genre: { fantasy: 1, adventure: 1, comedy: 1, animal: 1, team: 1, },
	internet: {
		imdb: '15153532',
		wiki_ua: '%D0%91%D1%80%D0%BE%D0%B4%D1%8F%D0%B3%D0%B8_(%D1%84%D1%96%D0%BB%D1%8C%D0%BC,_2023)',
		ashdivip: '111951',
	},
},
{
	id: 'Leon_1994',
	title: { ua: 'Леон', en: 'Léon', },
	year: 1994,
	country: { usa: 1, fra: 1, },
	genre: { action: 1, crime: 1, drama: 1, killer: 1, love: 1, },
	internet: {
		imdb: '0110413',
		wiki_ua: '%D0%9B%D0%B5%D0%BE%D0%BD_(%D1%84%D1%96%D0%BB%D1%8C%D0%BC)',
		ashdivip: '324',
	},
	cast: {
		jean_reno_30071948: 1,
		natalie_portman_09061981: 1,
		gary_oldman_21031958: 1,
	},
},
{
	id: 'mine_2016',
	title: { ua: 'Міна', en: 'Mine', },
	year: 2016,
	country: { usa: 1, },
	genre: { drama: 1, thriller: 1, army: 1, oneman: 1, },
	internet: {
		imdb: '3707104',
		wiki_ru: '%D0%9C%D0%B8%D0%BD%D0%B0_(%D1%84%D0%B8%D0%BB%D1%8C%D0%BC,_2016)',
	},
},
{
	id: 'hidden_strike_2023',
	title: { ua: 'Місія на двох', en: 'Hidden Strike', },
	year: 2023,
	country: { usa: 1, },
	genre: { action: 1, comedy: 1, fight: 1, },
	internet: {
		imdb: '6879446',
		wiki_ua: '%D0%9C%D1%96%D1%81%D1%96%D1%8F_%D0%BD%D0%B0_%D0%B4%D0%B2%D0%BE%D1%85',
	},
	cast: {
		jackie_chan_07041954: 1,
	},
},
{
	id: 'mission_impossible_7_2023',
	title: { ua: 'Місія неможлива - 7', en: 'Mission: Impossible - Dead Reckoning Part One', },
	year: 2023,
	country: { usa: 1, },
	genre: { action: 1, thriller: 1, },
	internet: {
		imdb: '9603212',
		wiki_ua: '%D0%9C%D1%96%D1%81%D1%96%D1%8F_%D0%BD%D0%B5%D0%BC%D0%BE%D0%B6%D0%BB%D0%B8%D0%B2%D0%B0:_%D0%A0%D0%BE%D0%B7%D0%BF%D0%BB%D0%B0%D1%82%D0%B0._%D0%A7%D0%B0%D1%81%D1%82%D0%B8%D0%BD%D0%B0_%D0%BF%D0%B5%D1%80%D1%88%D0%B0',
		ashdivip: '105107',
	},
	cast: {
		tom_cruise_03071962: 1,
		ving_rhames_12051959: 1,
	},
},
{
	id: 'heart_of_Stone_2023',
	title: { ua: 'Місія Стоун', en: 'Heart of Stone', },
	year: 2023,
	country: { usa: 1, },
	genre: { action: 1, },
	internet: {
		imdb: '13603966',
		wiki_ua: '%D0%9C%D1%96%D1%81%D1%96%D1%8F_%D0%A1%D1%82%D0%BE%D1%83%D0%BD',
		ashdivip: '98847',
	},
	cast: {
		gal_gadot_30041985: 1,
	},
},
{
	id: 'die_hard_1988',
	title: { ua: 'Міцний горішок', en: 'Die Hard', },
	year: 1988,
	country: { usa: 1, },
	genre: { action: 1, thriller: 1, terrorist: 1, },
	internet: {
		imdb: '0095016',
		wiki_ua: '%D0%9C%D1%96%D1%86%D0%BD%D0%B8%D0%B9_%D0%B3%D0%BE%D1%80%D1%96%D1%88%D0%BE%D0%BA',
	},
	cast: {
		bruce_willis_19031955: 1,
	},
},
{
	id: 'die_hard_2_1990',
	title: { ua: 'Міцний горішок - 2', en: 'Die Hard 2', },
	year: 1990,
	country: { usa: 1, },
	genre: { action: 1, thriller: 1, terrorist: 1, },
	internet: {
		imdb: '0099423',
		wiki_ua: '%D0%9C%D1%96%D1%86%D0%BD%D0%B8%D0%B9_%D0%B3%D0%BE%D1%80%D1%96%D1%88%D0%BE%D0%BA_2',
	},
	cast: {
		bruce_willis_19031955: 1,
		robert_patrick_05111958: 1,
	},
},
{
	id: 'die_hard_3_1995',
	title: { ua: 'Міцний горішок - 3', en: 'Die Hard: With a Vengeance', },
	year: 1995,
	country: { usa: 1, },
	genre: { action: 1, thriller: 1, terrorist: 1, },
	internet: {
		imdb: '0112864',
		wiki_ua: '%D0%9C%D1%96%D1%86%D0%BD%D0%B8%D0%B9_%D0%93%D0%BE%D1%80%D1%96%D1%88%D0%BE%D0%BA_3:_%D0%9F%D0%BE%D0%BC%D0%B8%D1%80%D0%B0%D1%82%D0%B8_%D0%B7_%D0%BF%D1%96%D1%81%D0%BD%D0%B5%D1%8E',
	},
	cast: {
		bruce_willis_19031955: 1,
		samuel_l_jackson_21121948: 1,
	},
},
{
	id: 'die_hard_4_2007',
	title: { ua: 'Міцний горішок - 4', en: 'Live Free or Die Hard', },
	year: 2007,
	country: { usa: 1, },
	genre: { action: 1, thriller: 1, terrorist: 1, },
	internet: {
		imdb: '0337978',
		wiki_ua: '%D0%9C%D1%96%D1%86%D0%BD%D0%B8%D0%B9_%D0%B3%D0%BE%D1%80%D1%96%D1%88%D0%BE%D0%BA_4.0',
	},
	cast: {
		bruce_willis_19031955: 1,
		timothy_olyphant_20051968: 1,
		maggie_q_22051979: 1,
	},
},
{
	id: 'die_hard_5_2013',
	title: { ua: 'Міцний горішок - 5', en: 'A Good Day to Die Hard', },
	year: 2013,
	country: { usa: 1, },
	genre: { action: 1, thriller: 1, terrorist: 1, },
	internet: {
		imdb: '1606378',
		wiki_ua: '%D0%9C%D1%96%D1%86%D0%BD%D0%B8%D0%B9_%D0%B3%D0%BE%D1%80%D1%96%D1%88%D0%BE%D0%BA._%D0%93%D0%B0%D1%80%D0%BD%D0%B8%D0%B9_%D0%B4%D0%B5%D0%BD%D1%8C,_%D0%B0%D0%B1%D0%B8_%D0%BF%D0%BE%D0%BC%D0%B5%D1%80%D1%82%D0%B8',
	},
	cast: {
		bruce_willis_19031955: 1,
		jai_courtney_15031986: 1,
	},
},
{
	id: 'muzzle_2023',
	title: { ua: 'Морда', en: 'Muzzle', },
	year: 2023,
	country: { usa: 1, },
	genre: { action: 1, crime: 1, animal: 1, police: 1, },
	internet: {
		imdb: '17663876',
		wiki_ua: '',
	},
	cast: {},
},
{
	id: 'live_die_repeat_edge_of_tomorrow_2014',
	title: { ua: 'На межі майбутнього', en: 'Live Die Repeat: Edge of Tomorrow', },
	year: 2014,
	country: { usa: 1, },
	genre: { action: 1, sci_fi: 1, groundhog: 1, techno: 1, battle: 1, },
	internet: {
		imdb: '1631867',
		wiki_ua: '%D0%9D%D0%B0_%D0%BC%D0%B5%D0%B6%D1%96_%D0%BC%D0%B0%D0%B9%D0%B1%D1%83%D1%82%D0%BD%D1%8C%D0%BE%D0%B3%D0%BE_(%D1%84%D1%96%D0%BB%D1%8C%D0%BC)',
		ashdivip: '6562',
	},
	cast: {
		tom_cruise_03071962: 1,
		emily_blunt_23021983: 1,
		bill_paxton_17051955: 1,
	},
},
{
	id: 'in_the_land_of_saints_and_sinners_2023',
	title: { ua: 'На землі святих і грішних', en: 'In the Land of Saints and Sinners', },
	year: 2023,
	country: { usa: 1, },
	genre: { action: 1, crime: 1, },
	internet: {
		imdb: '15782690',
		wiki_ru: '%D0%9D%D0%B0_%D0%B7%D0%B5%D0%BC%D0%BB%D0%B5_%D1%81%D0%B2%D1%8F%D1%82%D1%8B%D1%85_%D0%B8_%D0%B3%D1%80%D0%B5%D1%88%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2',
	},
	cast: {
		liam_neeson_07061952: 1,
	},
},
{
	id: 'unstoppable_2010',
	title: { ua: 'Некерований', en: 'Unstoppable', },
	year: 2010,
	country: { usa: 1, },
	genre: { thriller: 1, disaster: 1, railroad: 1, },
	internet: {
		imdb: '0477080',
		wiki_ua: '%D0%9D%D0%B5%D0%BA%D0%B5%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B9',
		moviestape: 'Unstoppable',
		ashdivip: '15101',
	},
	cast: {
		denzel_washington_28121954: 1,
		chris_pine_26081980: 1,
		jeff_wincott_08051956: 1,
	},
},
{
	id: 'expend4bles_2023',
	title: { ua: 'Нестримні - 4', en: 'Expend4bles', },
	year: 2023,
	country: { usa: 1, },
	genre: { action: 1, fight: 1, team: 1, },
	internet: {
		imdb: '3291150',
		wiki_ua: '%D0%9D%D0%B5%D1%81%D1%82%D1%80%D0%B8%D0%BC%D0%BD%D1%96_4',
	},
	cast: {
		sylvester_stallone_06071946: 1,
		jason_statham_26071967: 1,
		dolph_lundgren_03111957: 1,
		megan_fox_16051986: 1,
	},
},
{
	id: 'last_action_hero_1993',
	title: { ua: 'Останній кіногерой', en: 'Last Action Hero', },
	year: 1993,
	country: { usa: 1, },
	genre: { action: 1, fantasy: 1, world: 1, },
	internet: {
		imdb: '0107362',
		wiki_ua: '%D0%9E%D1%81%D1%82%D0%B0%D0%BD%D0%BD%D1%96%D0%B9_%D0%BA%D1%96%D0%BD%D0%BE%D0%B3%D0%B5%D1%80%D0%BE%D0%B9',
		ashdivip: '792',
	},
	cast: {
		arnold_schwarzenegger_30071947: 1,
		danny_devito_17111944: 1,
		james_belushi_15061954: 1,
		mc_hammer_30031962: 1,
		robert_patrick_05111958: 1,
		sharon_stone_10031958: 1,
		jean_claude_van_damme_18101960: 1,
		tina_turner_26111939: 1,
	},
},
{
	id: 'la_tete_dans_les_etoiles_2023',
	title: { ua: 'Папа не звезди', en: 'La tête dans les étoiles', },
	year: 2023,
	country: { fra: 1, },
	genre: { comedy: 1, space: 1, },
	internet: {
		imdb: '23828902',
		wiki_ua: '',
	},
	cast: {},
},
{
	id: 'entrapment_1999',
	title: { ua: 'Пастка', en: 'Entrapment', },
	year: 1999,
	country: { usa: 1, deu: 1, gbr: 1, },
	genre: { action: 1, thriller: 1, robbery: 1, },
	internet: {
		imdb: '0137494',
		wiki_ua: '%D0%9F%D0%B0%D1%81%D1%82%D0%BA%D0%B0_(%D1%84%D1%96%D0%BB%D1%8C%D0%BC,_1999)',
		auliki7: 'Entrapment',
		ashdivip: '17007',
	},
	cast: {
		sean_connery_25081930: 1,
		catherine_zeta_jones_25091969: 1,
		ving_rhames_12051959: 1,
	},
},
{
	id: 'the_baker_2022',
	title: { ua: 'Пекар', en: 'The Baker', },
	year: 2022,
	country: { usa: 1, deu: 1, gbr: 1, },
	genre: { action: 1, crime: 1, },
	internet: {
		imdb: '3917710',
		wiki_ua: '%D0%9F%D0%B5%D0%BA%D0%B0%D1%80_(%D1%84%D1%96%D0%BB%D1%8C%D0%BC,_2022)',
		ashdivip: '104284',
	},
	cast: {},
},
{
	id: 'free_guy_2021',
	title: { ua: 'Персонаж', en: 'Free Guy', },
	year: 2021,
	country: { usa: 1, },
	genre: { action: 1, fantasy: 1, comedy: 1, cyber: 1, world: 1, },
	internet: {
		imdb: '6264654',
		wiki_ua: '%D0%9F%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%B6_(%D1%84%D1%96%D0%BB%D1%8C%D0%BC,_2021)',
		ashdivip: '48814',
	},
	cast: {},
},
{
	id: 'saw_x_2023',
	title: { ua: 'Пила - 10', en: 'Saw X', },
	year: 2023,
	country: { usa: 1, },
	genre: { horror: 1, trash: 1, },
	internet: {
		imdb: '21807222',
		wiki_ua: '%D0%9F%D0%B8%D0%BB%D0%B0_X',
	},
	cast: {},
},
{
	id: 'pirates_of_the_Caribbean_2_2006',
	title: { ua: 'Пірати Карибського моря - 2', en: 'Pirates of the Caribbean: Dead Man\'s Chest', },
	year: 2006,
	country: { usa: 1, },
	genre: { adventure: 1, fantasy: 1, sea: 1, },
	internet: {
		imdb: '0383574',
		wiki_ua: '%D0%9F%D1%96%D1%80%D0%B0%D1%82%D0%B8_%D0%9A%D0%B0%D1%80%D0%B8%D0%B1%D1%81%D1%8C%D0%BA%D0%BE%D0%B3%D0%BE_%D0%BC%D0%BE%D1%80%D1%8F:_%D0%A1%D0%BA%D1%80%D0%B8%D0%BD%D1%8F_%D0%BC%D0%B5%D1%80%D1%86%D1%8F',
		ashdivip: '308',
		auliki7: 'Pirates.of.the.Caribbean.Dead.Mans.Chest',
	},
	cast: {
		johnny_depp_09061963: 1,
		orlando_bloom_13011977: 1,
		keira_knightley_26031985: 1,
	},
},
{
	id: 'source_code_2011',
	title: { ua: 'Початковий код', en: 'Source Code', },
	year: 2011,
	country: { usa: 1, },
	genre: { action: 1, sci_fi: 1, world: 1, techno: 1, cyber: 1, terrorist: 1, railroad: 1, },
	internet: {
		imdb: '0945513',
		wiki_ua: '%D0%9F%D0%BE%D1%87%D0%B0%D1%82%D0%BA%D0%BE%D0%B2%D0%B8%D0%B9_%D0%BA%D0%BE%D0%B4_(%D1%84%D1%96%D0%BB%D1%8C%D0%BC)',
		ashdivip: '8404',
	},
	cast: {
		jake_gyllenhaal_19121980: 1,
		michelle_monaghan_23031976: 1,
	},
},
{
	id: 'true_lies_1995',
	title: { ua: 'Правдива брехня', en: 'True Lies', },
	year: 1995,
	country: { usa: 1, },
	internet: {
		imdb: '0423412',
		wiki_ua: '%D0%9F%D1%80%D0%B0%D0%B2%D0%B4%D0%B8%D0%B2%D0%B0_%D0%B1%D1%80%D0%B5%D1%85%D0%BD%D1%8F',
		ashdivip: '1903',
		auliki7: 'True.Lies',
	},
	cast: {
		arnold_schwarzenegger_30071947: 1,
		jamie_lee_curtis_22111958: 1,
		bill_paxton_17051955: 1,
		tia_carrere_02011967: 1,
	},
},
{
	id: 'rambo_1982',
	title: { ua: 'Рембо', en: 'First Blood', },
	year: 1982,
	country: { usa: 1, },
	genre: { action: 1, thriller: 1, army: 1, },
	internet: {
		imdb: '0083944',
		wiki_ua: '%D0%A0%D0%B5%D0%BC%D0%B1%D0%BE:_%D0%9F%D0%B5%D1%80%D1%88%D0%B0_%D0%BA%D1%80%D0%BE%D0%B2',
		ashdivip: '985',
	},
	cast: {
		sylvester_stallone_06071946: 1,
		richard_crenna_30111926: 1,
	},
},
{
	id: 'rambo_2_1985',
	title: { ua: 'Рембо - 2', en: 'Rambo: First Blood Part II', },
	year: 1985,
	country: { usa: 1, },
	genre: { action: 1, thriller: 1, army: 1, },
	internet: {
		imdb: '0089880',
		wiki_ua: '%D0%A0%D0%B5%D0%BC%D0%B1%D0%BE:_%D0%9F%D0%B5%D1%80%D1%88%D0%B0_%D0%BA%D1%80%D0%BE%D0%B2,_%D1%87%D0%B0%D1%81%D1%82%D0%B8%D0%BD%D0%B0_II',
		ashdivip: '984',
	},
	cast: {
		sylvester_stallone_06071946: 1,
		richard_crenna_30111926: 1,
	},
},
{
	id: 'rambo_3_1988',
	title: { ua: 'Рембо - 3', en: 'Rambo III', },
	year: 1988,
	country: { usa: 1, },
	genre: { action: 1, thriller: 1, army: 1, },
	internet: {
		imdb: '0095956',
		wiki_ua: '%D0%A0%D0%B5%D0%BC%D0%B1%D0%BE_%D0%86%D0%86%D0%86',
		ashdivip: '983',
	},
	cast: {
		sylvester_stallone_06071946: 1,
		richard_crenna_30111926: 1,
	},
},
{
	id: 'rambo_4_2008',
	title: { ua: 'Рембо - 4', en: 'Rambo', },
	year: 2008,
	country: { usa: 1, },
	genre: { action: 1, thriller: 1, army: 1, },
	internet: {
		imdb: '0462499',
		wiki_ua: '%D0%A0%D0%B5%D0%BC%D0%B1%D0%BE_IV',
		ashdivip: '14184',
	},
	cast: {
		sylvester_stallone_06071946: 1,
	},
},
{
	id: 'rambo_5_2019',
	title: { ua: 'Рембо - 5', en: 'Rambo: Last Blood', },
	year: 2019,
	country: { usa: 1, },
	genre: { action: 1, thriller: 1, crime: 1, },
	internet: {
		imdb: '1206885',
		wiki_ua: '%D0%A0%D0%B5%D0%BC%D0%B1%D0%BE:_%D0%9E%D1%81%D1%82%D0%B0%D0%BD%D0%BD%D1%8F_%D0%BA%D1%80%D0%BE%D0%B2',
		ashdivip: '458',
	},
	cast: {
		sylvester_stallone_06071946: 1,
	},
},
{
	id: 'the_rock_1996',
	title: { ua: 'Скеля', en: 'The Rock', },
	year: 1996,
	country: { usa: 1, },
	genre: { action: 1, thriller: 1, terrorist: 1, army: 1, prison: 1, },
	internet: {
		imdb: '0117500',
		wiki_ua: '%D0%A1%D0%BA%D0%B5%D0%BB%D1%8F_(%D1%84%D1%96%D0%BB%D1%8C%D0%BC)',
		ashdivip: '13859',
	},
	cast: {
		sean_connery_25081930: 1,
		nicolas_cage_07011964: 1,
		ed_harris_28111950: 1,
		david_morse_11101953: 1,
		michael_biehn_31071956: 1,
		claire_forlani_01071972: 1,
	},
},
{
	id: 'Dredd_2012',
	title: { ua: 'Суддя Дредд', en: 'Dredd', },
	year: 2012,
	country: { usa: 1, },
	genre: { action: 1, sci_fi: 1, world: 1, police: 1, justice: 1, },
	internet: {
		imdb: '1343727',
		wiki_ua: '%D0%A1%D1%83%D0%B4%D0%B4%D1%8F_%D0%94%D1%80%D0%B5%D0%B4%D0%B4_(%D1%84%D1%96%D0%BB%D1%8C%D0%BC,_2012)',
		ashdivip: '3444',
	},
	cast: {
		karl_urban_07061972: 1,
		lena_headey_03101973: 1,
	},
},
{
	id: 'the_creator_2023',
	title: { ua: 'Творець', en: 'The Creator', },
	year: 2023,
	country: { usa: 1, },
	genre: { action: 1, fantasy: 1, future: 1, cyber: 1, techno: 1, world: 1, },
	internet: {
		imdb: '11858890',
		wiki_ua: '%D0%A2%D0%B2%D0%BE%D1%80%D0%B5%D1%86%D1%8C_(%D1%84%D1%96%D0%BB%D1%8C%D0%BC,_2023)',
	},
	cast: {},
},
{
	id: 'terminator_1_1984',
	title: { ua: 'Термінатор', en: 'The Terminator', },
	year: 1984,
	country: { usa: 1, },
	genre: { action: 1, sci_fi: 1, time: 1, techno: 1, world: 1, apocalypse: 1, },
	internet: {
		imdb: '0088247',
		wiki_ua: '%D0%A2%D0%B5%D1%80%D0%BC%D1%96%D0%BD%D0%B0%D1%82%D0%BE%D1%80_(%D1%84%D1%96%D0%BB%D1%8C%D0%BC)',
		moviestape: 'Terminator',
		ashdivip: '3499',
	},
	cast: {
		arnold_schwarzenegger_30071947: 1,
		linda_hamilton_26091956: 1,
		michael_biehn_31071956: 1,
		bill_paxton_17051955: 1,
	},
},
{
	id: 'terminator_2_1991',
	title: { ua: 'Термінатор - 2', en: 'Terminator 2: Judgment Day', },
	year: 1991,
	country: { usa: 1, },
	genre: { action: 1, sci_fi: 1, time: 1, techno: 1, world: 1, apocalypse: 1, },
	internet: {
		imdb: '0103064',
		wiki_ua: '%D0%A2%D0%B5%D1%80%D0%BC%D1%96%D0%BD%D0%B0%D1%82%D0%BE%D1%80_2:_%D0%A1%D1%83%D0%B4%D0%BD%D0%B8%D0%B9_%D0%B4%D0%B5%D0%BD%D1%8C',
		moviestape: 'Terminator.2.Judgment.Day',
		ashdivip: '3314',
	},
	cast: {
		arnold_schwarzenegger_30071947: 1,
		linda_hamilton_26091956: 1,
		edward_furlong_02081977: 1,
		robert_patrick_05111958: 1,
		joe_morton_18101947: 1,
		michael_biehn_31071956: 1,
	},
},
{
	id: 'terminator_3_2003',
	title: { ua: 'Термінатор - 3', en: 'Terminator 3: Rise of the Machines', },
	year: 2003,
	country: { usa: 1, },
	genre: { action: 1, sci_fi: 1, time: 1, techno: 1, world: 1, apocalypse: 1, },
	internet: {
		imdb: '0181852',
		wiki_ua: '%D0%A2%D0%B5%D1%80%D0%BC%D1%96%D0%BD%D0%B0%D1%82%D0%BE%D1%80_3:_%D0%9F%D0%BE%D0%B2%D1%81%D1%82%D0%B0%D0%BD%D0%BD%D1%8F_%D0%BC%D0%B0%D1%88%D0%B8%D0%BD',
		moviestape: 'Terminator.3',
		ashdivip: '3572',
	},
	cast: {
		arnold_schwarzenegger_30071947: 1,
		kristanna_loken_08101979: 1,
		nick_stahl_05121979: 1,
	},
},
{
	id: 'terminator_4_2009',
	title: { ua: 'Термінатор - 4', en: 'Terminator Salvation', },
	year: 2009,
	country: { usa: 1, },
	genre: { action: 1, sci_fi: 1, time: 1, techno: 1, world: 1, apocalypse: 1, },
	internet: {
		imdb: '6450804',
		wiki_ua: '%D0%A2%D0%B5%D1%80%D0%BC%D1%96%D0%BD%D0%B0%D1%82%D0%BE%D1%80:_%D0%A1%D0%BF%D0%B0%D1%81%D1%96%D0%BD%D0%BD%D1%8F_%D0%BF%D1%80%D0%B8%D0%B9%D0%B4%D0%B5',
		moviestape: 'Terminator.Salvation',
		ashdivip: '3576',
	},
	cast: {
		christian_bale_30011974: 1,
		sam_worthington_02081976: 1,
		anthon_yelchin_11031989: 1,
	},
},
{
	id: 'terminator_5_2015',
	title: { ua: 'Термінатор - 5', en: 'Terminator Genisys', },
	year: 2015,
	country: { usa: 1, },
	genre: { action: 1, sci_fi: 1, time: 1, techno: 1, world: 1, apocalypse: 1, },
	internet: {
		imdb: '1340138',
		wiki_ua: '%D0%A2%D0%B5%D1%80%D0%BC%D1%96%D0%BD%D0%B0%D1%82%D0%BE%D1%80:_%D0%93%D0%B5%D0%BD%D0%B5%D0%B7%D0%B8%D1%81',
		moviestape: 'Terminator.Genisys',
		ashdivip: '3575',
	},
	cast: {
		arnold_schwarzenegger_30071947: 1,
		emilia_clarke_23101986: 1,
		jai_courtney_15031986: 1,
	},
},
{
	id: 'terminator_6_2019',
	title: { ua: 'Термінатор - 6', en: 'Terminator: Dark Fate', },
	year: 2019,
	country: { usa: 1, },
	genre: { action: 1, sci_fi: 1, time: 1, techno: 1, world: 1, apocalypse: 1, },
	internet: {
		imdb: '6450804',
		wiki_ua: '%D0%A2%D0%B5%D1%80%D0%BC%D1%96%D0%BD%D0%B0%D1%82%D0%BE%D1%80:_%D0%A4%D0%B0%D1%82%D1%83%D0%BC',
		baskino: '1025082',
		ashdivip: '5907',
	},
	cast: {
		arnold_schwarzenegger_30071947: 1,
		linda_hamilton_26091956: 1,
	},
},
{
	id: 'tetris_2023',
	title: { ua: 'Тетріс', en: 'Tetris', },
	year: 2023,
	country: { usa: 1, },
	genre: { drama: 1, history: 1, story: 1, },
	internet: {
		imdb: '12758060',
		wiki_ua: '%D0%A2%D0%B5%D1%82%D1%80%D1%96%D1%81_(%D1%84%D1%96%D0%BB%D1%8C%D0%BC)',
	},
	cast: {},
},
{
	id: 'a_thousand_words_2012',
	title: { ua: 'Тисяча слів', en: 'A Thousand Words', },
	year: 2012,
	country: { usa: 1, },
	genre: { comedy: 1, fantasy: 1, },
	internet: {
		imdb: '0763831',
		wiki_ua: '%D0%A2%D0%B8%D1%81%D1%8F%D1%87%D0%B0_%D1%81%D0%BB%D1%96%D0%B2',
	},
	cast: {
		eddie_murphy_03041961: 1,
	},
},
{
	id: 'silent_night_2023',
	title: { ua: 'Тиха ніч', en: 'Silent Night', },
	year: 2023,
	country: { usa: 1, },
	genre: { action: 1, },
	internet: {
		imdb: '15799866',
		wiki_ru: '%D0%9D%D0%B5%D0%BC%D0%B0%D1%8F_%D1%8F%D1%80%D0%BE%D1%81%D1%82%D1%8C',
	},
	cast: {},
},
{
	id: 'interstate_60_2002',
	title: { ua: 'Траса 60', en: 'Interstate 60: Episodes of the Road', },
	year: 2002,
	country: { usa: 1, },
	genre: { adventure: 1, road: 1, psycho: 1, young: 1, },
	internet: {
		imdb: '0165832',
		wiki_ua: '%D0%A2%D1%80%D0%B0%D1%81%D0%B0_60',
		moviestape: 'Interstate.60',
		ashdivip: '14580',
	},
	cast: {
		james_marsden_18091973: 1,
		gary_oldman_21031958: 1,
		amy_smart_26031976: 1,
		christopher_lloyd_22101938: 1,
		chris_cooper_09071951: 1,
		kurt_russell_17031951: 1,
		michael_j_fox_09061961: 1,
	},
},
{
	id: 'universal_soldier_1992',
	title: { ua: 'Універсальний солдат', en: 'Universal Soldier', },
	year: 1992,
	country: { usa: 1, },
	genre: { action: 1, sci_fi: 1, army: 1, techno: 1, },
	internet: {
		imdb: '0105698',
		wiki_ua: '%D0%A3%D0%BD%D1%96%D0%B2%D0%B5%D1%80%D1%81%D0%B0%D0%BB%D1%8C%D0%BD%D0%B8%D0%B9_%D1%81%D0%BE%D0%BB%D0%B4%D0%B0%D1%82_(%D1%84%D1%96%D0%BB%D1%8C%D0%BC)',
		ashdivip: '4209',
	},
	cast: {
		jean_claude_van_damme_18101960: 1,
		dolph_lundgren_03111957: 1,
		michael_jai_white_10111967: 1,
	},
},
{
	id: 'freelance_2023',
	title: { ua: 'Фрілансер', en: 'Freelance', },
	year: 2023,
	country: { usa: 1, },
	genre: { action: 1, comedy: 1, travel: 1, },
	internet: {
		imdb: '15744298',
		wiki_ru: '%D0%A2%D0%B5%D0%BB%D0%BE%D1%85%D1%80%D0%B0%D0%BD%D0%B8%D1%82%D0%B5%D0%BB%D1%8C_%D0%BD%D0%B0_%D1%84%D1%80%D0%B8%D0%BB%D0%B0%D0%BD%D1%81%D0%B5',
	},
	cast: {},
},
{
	id: 'predator_1987',
	title: { ua: 'Хижак', en: 'Predator', },
	year: 1987,
	country: { usa: 1, },
	genre: { action: 1, fantasy: 1, aliens: 1, army: 1, },
	internet: {
		imdb: '0093773',
		wiki_ua: '%D0%A5%D0%B8%D0%B6%D0%B0%D0%BA_(%D1%84%D1%96%D0%BB%D1%8C%D0%BC,_1987)',
		ashdivip: '4462',
	},
	cast: {
		arnold_schwarzenegger_30071947: 1,
		bill_duke_26021943: 1,
	},
},
{
	id: 'predator_2_1990',
	title: { ua: 'Хижак - 2', en: 'Predator 2', },
	year: 1990,
	country: { usa: 1, },
	genre: { action: 1, fantasy: 1, aliens: 1, police: 1, },
	internet: {
		imdb: '0100403',
		wiki_ua: '%D0%A5%D0%B8%D0%B6%D0%B0%D0%BA_2',
	},
	cast: {
		gary_busey_29061944: 1,
		bill_paxton_17051955: 1,
		danny_glover_22071946: 1,
	},
},
{
	id: 'hitman_2007',
	title: { ua: 'Хітмен', en: 'Hitman', },
	year: 2007,
	country: { usa: 1, gbr: 1, },
	genre: { action: 1, thriller: 1, crime: 1, biomedlab: 1, },
	internet: {
		imdb: '0465494',
		wiki_ua: '%D0%A5%D1%96%D1%82%D0%BC%D0%B5%D0%BD',
		ashdivip: '1621',
	},
	cast: {
		timothy_olyphant_20051968: 1,
		olga_kurylenko_14111979: 1,
	},
},
{
	id: 'hitman_agent_47_2015',
	title: { ua: 'Хітмен: Агент 47', en: 'Hitman: Agent 47', },
	year: 2015,
	country: { usa: 1, deu: 1, gbr: 1, },
	genre: { action: 1, crime: 1, biomedlab: 1, },
	internet: {
		imdb: '2679042',
		wiki_ua: '%D0%A5%D1%96%D1%82%D0%BC%D0%B5%D0%BD:_%D0%90%D0%B3%D0%B5%D0%BD%D1%82_47',
		ashdivip: '1623',
	},
	cast: {},
},
{
	id: 'mr_brooks_2007',
	title: { ua: 'Хто Ви містере Брукс', en: 'Mr. Brooks', },
	year: 2007,
	country: { usa: 1, },
	genre: { thriller: 1, drama: 1, crime: 1, },
	internet: {
		imdb: '0780571',
		wiki_ua: '%D0%A5%D1%82%D0%BE_%D0%B2%D0%B8,_%D0%BC%D1%96%D1%81%D1%82%D0%B5%D1%80%D0%B5_%D0%91%D1%80%D1%83%D0%BA%D1%81%3F',
		ashdivip: '15827',
	},
	cast: {
		kevin_costner_18011955: 1,
		demi_moore_11111962: 1,
	},
},
{
	id: 'speed_1_1994',
	title: { ua: 'Швидкість', en: 'Speed', },
	year: 1994,
	country: { usa: 1, },
	genre: { action: 1, thriller: 1, terrorist: 1, police: 1, },
	internet: {
		imdb: '0111257',
		wiki_ua: '%D0%A8%D0%B2%D0%B8%D0%B4%D0%BA%D1%96%D1%81%D1%82%D1%8C_(%D1%84%D1%96%D0%BB%D1%8C%D0%BC)',
		moviestape: 'Speed',
		ashdivip: '13774',
	},
	cast: {
		keanu_reeves_02091964: 1,
		sandra_bullock_26071964: 1,
		dennis_hopper_17051936: 1,
		jeff_daniels_19021955: 1,
		joe_morton_18101947: 1,
	},
},
{
	id: 'speed_2_1997',
	title: { ua: 'Швидкість - 2', en: 'Speed 2: Cruise Control', },
	year: 1997,
	country: { usa: 1, },
	genre: { action: 1, sea: 1, },
	internet: {
		imdb: '0120179',
		wiki_ua: '%D0%A8%D0%B2%D0%B8%D0%B4%D0%BA%D1%96%D1%81%D1%82%D1%8C_2:_%D0%9A%D0%BE%D0%BD%D1%82%D1%80%D0%BE%D0%BB%D1%8C_%D0%BD%D0%B0%D0%B4_%D0%BA%D1%80%D1%83%D1%97%D0%B7%D0%BE%D0%BC',
		moviestape: 'Speed 2: Cruise Control',
		ashdivip: '72969',
	},
	cast: {
		sandra_bullock_26071964: 1,
		willem_dafoe_22071955: 1,
	},
},
{
	id: '6_bullets_2012',
	title: { ua: 'Шість куль', en: '6 Bullets', },
	year: 2012,
	country: { usa: 1, },
	genre: { action: 1, },
	internet: {
		imdb: '1975249',
		wiki_ru: '%D0%A8%D0%B5%D1%81%D1%82%D1%8C_%D0%BF%D1%83%D0%BB%D1%8C',
		youtube: 'n_mi-DffOUA',
		trailer: '0LBuMlgd8hQ',
	},
	cast: {
		jean_claude_van_damme_18101960: 1,
	},
},
{
	id: 'the_6th_day_2000',
	title: { ua: 'Шостий день', en: 'The 6th Day', },
	year: 2000,
	country: { usa: 1, },
	genre: { action: 1, mystic: 1,  },
	internet: {
		imdb: '0216216',
		wiki_ua: '%D0%A8%D0%BE%D1%81%D1%82%D0%B8%D0%B9_%D0%B4%D0%B5%D0%BD%D1%8C',
		ashdivip: '4456',
	},
	cast: {
		arnold_schwarzenegger_30071947: 1,
	},
},
{
	id: 'uncharted_2022',
	title: { ua: 'Uncharted: Незвідане', en: 'Uncharted', },
	year: 2022,
	country: { usa: 1, },
	genre: { action: 1, adventure: 1, travel: 1, },
	internet: {
		imdb: '1464335',
		wiki_ua: 'Uncharted:_%D0%9D%D0%B5%D0%B7%D0%B2%D1%96%D0%B4%D0%B0%D0%BD%D0%B5',
	},
	cast: {
		antonio_banderas_10081960: 1,
		mark_wahlberg_05061971: 1,
	},
},






];




let objFilmsYear = {};
let objFilmsCountry = {};




let objFilms = {};
arrFilms.forEach( k => {
	objFilms[ k.id ] = k;

	if ( k.year ) 
		objFilmsYear[ k.year ] = 1;
	
	if ( k.country ) {
		for ( let k1 in k.country ) 
			objFilmsCountry[ k1 ] = 1;
	}

});












