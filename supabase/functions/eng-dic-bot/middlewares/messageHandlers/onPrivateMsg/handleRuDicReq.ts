import { translateByYandex } from '../../../api/index.ts';
import {
	getAudiosForWord,
	sendAudios,
} from '../../../components/renderWord/getAudiosFromResp.ts';
import { renderWord } from '../../../components/renderWord/renderWord.ts';
import { MyContext } from '../../../contracts.ts';
import { formatYandApiResp } from '../../../helpers/formatApiResponse/index.ts';
import translator from '../../../locales/initTranslator.ts';

export const handleRuDicReq = async (ctx: MyContext) => {
	const { message } = ctx;
	if (message && message.text) {
		const audios = await getAudiosForWord(message.text);
		const translationByYandex = await translateByYandex(
			message.text,
			'ru',
		);
		const ruWord = formatYandApiResp(translationByYandex, audios ?? []);

		if (!ruWord) {
			throw new Error('WORD NOT FOUND, YANDEX API');
		}
		const html = renderWord(ruWord, 'ru');
		ctx.reply(html, { parse_mode: 'HTML' }).then(() => {
			sendAudios(ctx, ruWord?.audios ?? []);
		});
	}
};
