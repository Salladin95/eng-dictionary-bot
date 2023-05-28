import { wordDictionaryApiResp } from '../../api/dictionaryApi/dictionaryApi.contracts.ts';
import { MyContext } from '../../contracts.ts';

export const getAudios = (word: wordDictionaryApiResp) => {
	const audios = word.phonetics?.map((phonetic) => ({
		audio: phonetic?.audio ?? '',
	}));
	return audios;
};

export type Audios = ReturnType<typeof getAudios>;

const sendAudios = (ctx: MyContext, rowWord: wordDictionaryApiResp) => {
	const audios = getAudios(rowWord);
	audios?.forEach(({ audio }) => {
		if (audio && audio.length) {
			ctx.replyWithAudio(audio);
		}
	});
};

export default sendAudios;
