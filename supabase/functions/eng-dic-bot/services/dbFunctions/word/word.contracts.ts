export type WordDefinition = {
	definition: string;
	example: string | null;
	synonyms: string[] | null;
};

export type WordDefinitionByPartOfSpeech = {
	partOfSpeech: string;
	engDefs: WordDefinition[] | null;
	ruDefs: WordDefinition[] | null;
};

export type Word = {
	word: string;
	meanings: WordDefinitionByPartOfSpeech[];
	audios: string[] | null;
	transcription: string | null;
};
