/* eslint-disable @typescript-eslint/no-explicit-any */
export interface From {
	day: number | null;
	month: number | null;
	year: number | null;
}

export interface Prop {
	from: From;
	to: From;
}

export interface Aired {
	from: Date;
	to: Date | null;
	prop: Prop;
	string: string;
}

export enum Timezone {
	AsiaTokyo = "Asia/Tokyo",
}

export interface Broadcast {
	day: null | string;
	time: null | string;
	timezone: Timezone | null;
	string: null | string;
}

export enum DemographicType {
	Anime = "anime",
}

export interface Demographic {
	mal_id: number;
	type: DemographicType;
	name: string;
	url: string;
}

export interface Image {
	image_url: string;
	small_image_url: string;
	large_image_url: string;
}

export enum Rating {
	GAllAges = "G - All Ages",
	PG13Teens13OrOlder = "PG-13 - Teens 13 or older",
	PGChildren = "PG - Children",
	R17ViolenceProfanity = "R - 17+ (violence & profanity)",
}

export enum Status {
	CurrentlyAiring = "Currently Airing",
}

export enum TitleType {
	Default = "Default",
	English = "English",
	German = "German",
	Japanese = "Japanese",
	Spanish = "Spanish",
	Synonym = "Synonym",
}

export interface Title {
	type: TitleType;
	title: string;
}

export interface Images {
	image_url: null | string;
	small_image_url: null | string;
	medium_image_url: null | string;
	large_image_url: null | string;
	maximum_image_url: null | string;
}

export interface Trailer {
	youtube_id: null | string;
	url: null | string;
	embed_url: null | string;
	images: Images;
}

export enum AnimeDataType {
	Music = "Music",
	Ona = "ONA",
	Special = "Special",
	Tv = "TV",
}

export interface AnimeData {
	mal_id: number;
	url: string;
	images: { [key: string]: Image };
	trailer: Trailer;
	approved: boolean;
	titles: Title[];
	title: string;
	title_english: null | string;
	title_japanese: string;
	title_synonyms: string[];
	type: AnimeDataType;
	source: string;
	episodes: number | null;
	status: Status;
	airing: boolean;
	aired: Aired;
	duration: string;
	rating: Rating | null;
	score: number;
	scored_by: number;
	rank: number;
	popularity: number;
	members: number;
	favorites: number;
	synopsis: string;
	background: null | string;
	season: null | string;
	year: number | null;
	broadcast: Broadcast;
	producers: Demographic[];
	licensors: Demographic[];
	studios: Demographic[];
	genres: Demographic[];
	explicit_genres: any[];
	themes: Demographic[];
	demographics: Demographic[];
}

export interface Items {
	count: number;
	total: number;
	per_page: number;
}

export interface Pagination {
	last_visible_page: number;
	has_next_page: boolean;
	current_page: number;
	items: Items;
}

export interface JikanApiResponse {
	data: AnimeData[];
	pagination: Pagination;
}