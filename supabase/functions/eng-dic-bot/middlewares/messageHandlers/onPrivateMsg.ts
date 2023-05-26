import { MyContext as Context } from '../../contracts.ts';
import { NextFunction } from '../../deps.ts';

import { getWordDefinition } from '../../api/dictionaryApi/dictionaryApi.ts';
import { renderWordDefnition } from '../../components/index.ts';

const onPrivateMsg = async (ctx: Context) => {
	const { message } = ctx;

	if (!message || !message.text) {
		return;
	}

	try {
		const word = await getWordDefinition(message.text);

		const html = renderWordDefnition(word);
		ctx.reply(html, { parse_mode: 'HTML' });
	} catch (err) {
		console.log(err);
		ctx.reply('Sth went wrong, try another word');
	}
};

export default onPrivateMsg;
