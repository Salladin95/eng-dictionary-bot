import {
	Definition,
	WordDefinition,
} from '../../api/dictionaryApi/dictionaryApi.contracts.ts';
import { getMaxLength } from '../getMaxLength.ts';

export type FormattedDefinition = Omit<Definition, 'synonyms' | 'antonyms'>;
type Meaning = { partOfSpeech: string; definitions: FormattedDefinition[] };

export const formatWord = (word: WordDefinition) => {
	let meanings: Meaning[] = [];

	if (word.meanings.length) {
		const slicedMeanings = word.meanings.splice(
			0,
			getMaxLength(3, word.meanings.length),
		);

		meanings = slicedMeanings.map(
			({ partOfSpeech, definitions }) => {
				return {
					partOfSpeech,
					definitions: definitions.splice(
						0,
						getMaxLength(4, definitions.length),
					).map(({ definition, example }) => ({
						definition,
						example: example ?? '',
					})),
				};
			},
		);
	}

	const formattedWord = {
		word: word.word,
		audio: word.phonetics[0].audio,
		transcription: word.phonetic,
		meanings,
	};

	return formattedWord;
};
