import { YandexApiResponse } from '../../api/yandexApi/yandexApi.contracts.ts';
import {
	Word,
	WordDefinitionByPartOfSpeech,
} from '../../services/dbFunctions/word/word.contracts.ts';

export const formatYandApiResp = (
	{ def }: YandexApiResponse,
	audios: string[] | null,
): Word | null => {
	if (!def.length) {
		return null;
	}

	const meanings: WordDefinitionByPartOfSpeech[] = def.map(
		({ pos, tr }) => {
			return {
				partOfSpeech: pos,
				engDefs: null,
				ruDefs: tr.map(({ text, syn }) => ({
					definition: text,
					example: null,
					synonyms: syn?.map((s) => s.text) ?? [],
				})),
			};
		},
	);

	const formattedWord = {
		word: def[0].text,
		transcription: def[0].ts ?? '',
		meanings,
		audios,
	};

	return formattedWord;
};
