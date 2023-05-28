import { MyContext as Context } from '../../contracts.ts';

import { translateByDictionaryApi } from '../../api/dictionaryApi/dictionaryApi.ts';
import translateByYandex from '../../api/yandexApi/yandexApi.ts';
import {
	renderDictionaryApiResponse,
	renderYandexResponse,
} from '../../components/index.ts';
import sendAudios from '../../components/renderDicApiResp/getAudiosFromResp.ts';
import translator from '../../locales/initTranslator.ts';

const onPrivateMsg = async (ctx: Context) => {
	const { message, langConfig } = ctx;

	if (!message || !message.text) {
		return;
	}
	const { text } = message;

	try {
		const translationByDictionary = await translateByDictionaryApi(
			message.text,
		);
		if (langConfig.translationLanguage === 'en') {
			const html = renderDictionaryApiResponse(translationByDictionary);
			ctx.reply(html, { parse_mode: 'HTML' }).then(() => {
				sendAudios(ctx, translationByDictionary);
			});
		} else {
			const translation = await translateByYandex(
				text,
				ctx.langConfig.translationLanguage,
			);
			const { def } = translation;
			if (def.length) {
				ctx.reply(renderYandexResponse(def), { parse_mode: 'HTML' }).then(
					() => sendAudios(ctx, translationByDictionary),
				);
			} else {
				ctx.reply(
					translator(ctx.langConfig.translationLanguage, 'wordNotFound') ??
						'Not found',
				);
			}
		}
	} catch (err) {
		console.warn('ON PRIVATE MESSAGE, API CALL ERROR');
		console.warn(err.message ?? JSON.stringify(err));
		ctx.reply(
			translator(ctx.langConfig.translationLanguage, 'wordNotFound') ??
				'Not found',
		);
	}
};

export default onPrivateMsg;
