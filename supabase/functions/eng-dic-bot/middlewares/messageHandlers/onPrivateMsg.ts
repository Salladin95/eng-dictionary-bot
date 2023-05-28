import { MyContext as Context } from '../../contracts.ts';

import { translateByDictionaryApi } from '../../api/dictionaryApi/dictionaryApi.ts';
import translateByYandex from '../../api/yandexApi/yandexApi.ts';
import {
	getAudios,
	renderDictionaryApiResponse,
	renderYandexResponse,
} from '../../components/index.ts';
import sendAudios from '../../components/renderDicApiResp/getAudiosFromResp.ts';

const onPrivateMsg = async (ctx: Context) => {
	const { message, langConfig } = ctx;

	if (!message || !message.text) {
		return;
	}
	const { text } = message;

	try {
		if (langConfig.translationLanguage === 'en') {
			const translation = await translateByDictionaryApi(message.text);
			const html = renderDictionaryApiResponse(translation);

			ctx.reply(html, { parse_mode: 'HTML' }).then(() => {
				sendAudios(ctx, translation);
			});
		} else {
			const translation = await translateByYandex(
				text,
				ctx.langConfig.translationLanguage,
			);
			const { def } = translation;
			if (def.length) {
				ctx.reply(renderYandexResponse(def), { parse_mode: 'HTML' }).then(
					async () => {
						const wordDictionaryTranslation = await translateByDictionaryApi(
							message.text,
						);
						sendAudios(ctx, wordDictionaryTranslation);
					},
				);
			} else {
				ctx.reply('Sth went wrong YANDEX API, try another word');
			}
		}
	} catch {
		ctx.reply('Sth went wrong, try another word');
	}
};

export default onPrivateMsg;
