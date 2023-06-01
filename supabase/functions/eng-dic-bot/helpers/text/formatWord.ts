import {
	Definition,
	wordDictionaryApiResp,
} from '../../api/dictionaryApi/dictionaryApi.contracts.ts';
import { getMaxLength } from '../getMaxLength.ts';

export type FormattedDefinition = Omit<Definition, 'antonyms'>;
type Meaning = {
	partOfSpeech: string;
	definitions: FormattedDefinition[];
	synonyms: string[];
};

export const formatDicApiResp = (word: wordDictionaryApiResp) => {
	let meanings: Meaning[] = [];
	const audios = word.phonetics?.map((phonetic) => ({
		audio: phonetic?.audio ?? '',
	}));

	if (word.meanings.length) {
		const slicedMeanings = word.meanings.splice(
			0,
			getMaxLength(7, word.meanings.length),
		);

		meanings = slicedMeanings.map(
			({ partOfSpeech, definitions, synonyms }) => {
				return {
					partOfSpeech,
					definitions: definitions.splice(
						0,
						getMaxLength(5, definitions.length),
					).map(({ definition, example, synonyms }) => ({
						definition,
						example: example ?? '',
						synonyms: synonyms ?? [],
					})),
					synonyms,
				};
			},
		);
	}

	const formattedWord = {
		word: word.word,
		transcription: word.phonetic ?? '',
		meanings,
		audios,
	};

	return formattedWord;
};
