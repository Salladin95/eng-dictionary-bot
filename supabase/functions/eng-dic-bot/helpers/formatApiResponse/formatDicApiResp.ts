import {
	wordDictionaryApiResp,
} from '../../api/dictionaryApi/dictionaryApi.contracts.ts';
import { getAudiosFromDicResponse } from '../../components/renderWord/getAudiosFromResp.ts';
import {
	Word,
	WordDefinitionByPartOfSpeech,
} from '../../services/dbFunctions/word/word.contracts.ts';
import { getMaxLength } from '../getMaxLength.ts';

export const formatDicApiResp = (word: wordDictionaryApiResp): Word | null => {
	let meanings: WordDefinitionByPartOfSpeech[] = [];
	const audios = getAudiosFromDicResponse(word);

	if (!word.meanings.length) {
		return null;
	}

	meanings = word.meanings.map(
		({ partOfSpeech, definitions }) => {
			return {
				partOfSpeech,
				ruDefs: null,
				engDefs: definitions.splice(
					0,
					getMaxLength(5, definitions.length),
				).map(({ definition, example, synonyms }) => ({
					definition,
					example: example ?? '',
					synonyms: synonyms ?? [],
				})),
			};
		},
	);

	const formattedWord = {
		word: word.word,
		transcription: word.phonetic ?? '',
		meanings,
		audios,
	};

	return formattedWord;
};
