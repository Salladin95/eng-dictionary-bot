import { WordDefinition } from '../../api/dictionaryApi/dictionaryApi.contracts.ts';

const getAudios = (word: WordDefinition) => {
	const audios = word.phonetics?.map((phonetic) => ({
		audio: phonetic?.audio ?? '',
	}));
	return audios;
};

export default getAudios;
