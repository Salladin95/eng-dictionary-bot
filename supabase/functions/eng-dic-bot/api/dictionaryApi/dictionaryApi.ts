import { axiod } from "../../deps.ts";
import { WordDefinition } from './dictionaryApi.contracts.ts';

export const getWordDefinition = async (word = '') => {
	const definition = await axiod.get<WordDefinition[]>(
		`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
	);
	return definition.data[0];
};
