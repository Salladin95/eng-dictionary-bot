import { MyContext as Context } from '../../contracts.ts';

import { getWordDefinition } from '../../api/dictionaryApi/dictionaryApi.ts';
import { renderWordDefnition } from '../../components/dictionaryApi/index.ts';
import translateByYandex from '../../api/yandexApi/yandexApi.ts';
import { renderYandexResponse } from '../../components/yandApi/index.ts';
import getAudios from '../../components/dictionaryApi/getAudios.ts';

const onPrivateMsg = async (ctx: Context) => {
	const { message, langConfig } = ctx;

	if (!message || !message.text) {
		return;
	}
	const { text } = message;

	try {
		if (langConfig.translationLanguage === 'en') {
			const translation = await getWordDefinition(message.text);
			const html = renderWordDefnition(translation);
			ctx.reply(html, { parse_mode: 'HTML' }).then(() => {
				const audios = getAudios(translation);
				audios?.forEach(({ audio }) => {
					if (audio && audio.length) {
						ctx.replyWithAudio(audio);
					}
				});
			});
		} else {
			const translation = await translateByYandex(
				text,
				ctx.langConfig.translationLanguage,
			);
			const { def } = translation;
			if (def.length) {
				ctx.reply(renderYandexResponse(def), { parse_mode: 'HTML' });
			} else {
				ctx.reply('Sth went wrong YANDEX API, try another word');
			}
		}
	} catch (err) {
		console.error(err);
		ctx.reply('Sth went wrong, try another word');
	}
};

export default onPrivateMsg;
