import { dictionaryApiBaseUrl } from '../../constants.ts';
import { axiod } from '../../deps.ts';
import { wordDictionaryApiResp } from './dictionaryApi.contracts.ts';

export const translateByDictionaryApi = async (word = '') => {
	const definition = await axiod.get<wordDictionaryApiResp[]>(
		`${dictionaryApiBaseUrl}${word}`,
	);
	return definition.data[0];
};
