export interface YandexApiResponse {
	def: Def[];
}

export interface Def {
	text: string;
	pos: string;
	ts?: string;
	tr: Tr[];
}

export interface Text {
	text: string;
}

export interface Tr {
	text: string;
	pos: string;
	syn?: Text[];
	mean: Text[];
	ex: Ex[];
}

export interface Ex {
	text: string;
	tr: Text[];
}
