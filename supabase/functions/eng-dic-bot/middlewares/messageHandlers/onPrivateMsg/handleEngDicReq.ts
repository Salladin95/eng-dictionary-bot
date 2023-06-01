import { translateByDictionaryApi } from "../../../api/index.ts";
import { sendAudios } from '../../../components/renderWord/getAudiosFromResp.ts';
import { renderWord } from '../../../components/renderWord/renderWord.ts';
import { MyContext } from '../../../contracts.ts';
import { formatDicApiResp } from '../../../helpers/formatApiResponse/formatDicApiResp.ts';

export const handleEngDicReq = async (ctx: MyContext) => {
	const { message } = ctx;
	if (message && message.text) {
		const translation = await translateByDictionaryApi(
			message.text,
		);
		const word = formatDicApiResp(translation);
		if (word) {
			const html = renderWord(word, 'en');
			ctx.reply(html, { parse_mode: 'HTML' }).then(() => {
				sendAudios(ctx, word?.audios ?? []);
			});
		}
	}
};
