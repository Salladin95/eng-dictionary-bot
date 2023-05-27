import { dictionaryApiBaseUrl } from '../../constants.ts';
import { axiod } from '../../deps.ts';
import { WordDefinition } from './dictionaryApi.contracts.ts';

export const getWordDefinition = async (word = '') => {
	const definition = await axiod.get<WordDefinition[]>(
		`${dictionaryApiBaseUrl}${word}`,
	);
	return definition.data[0];
};
