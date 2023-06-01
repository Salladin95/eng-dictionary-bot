import { wordDictionaryApiResp } from '../../api/dictionaryApi/dictionaryApi.contracts.ts';
import { translateByDictionaryApi } from '../../api/index.ts';
import { MyContext } from '../../contracts.ts';

export const getAudiosFromDicResponse = (word: wordDictionaryApiResp) => {
	const audios = word.phonetics?.map((phonetic) => phonetic?.audio ?? null).filter((audio) => audio)
	return audios;
};

export const getAudiosForWord = async (text: string) => {
	const word = await translateByDictionaryApi(text);
	return getAudiosFromDicResponse(word);
}

export type Audios = ReturnType<typeof getAudiosFromDicResponse>;

export const sendAudios = (ctx: MyContext, audios: string[]) => {
	if (audios && audios.length) {
		audios?.forEach((audio) => ctx.replyWithAudio(audio));
	}
};
