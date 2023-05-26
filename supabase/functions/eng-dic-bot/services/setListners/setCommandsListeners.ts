import { MyBot } from '../../contracts.ts';
import { selectBotLang, selectTranslatesLang } from '../inlineKeybord/index.ts';

import onStart from '../../middlewares/messageHandlers/onStart.ts';

const setCommandsListeners = (bot: MyBot) => {
	bot.command(
		'start',
		(ctx, next) => onStart(ctx, next),
	);

	bot.command(
		'help',
		(ctx) => ctx.reply('Send me a word to get its description...'),
	);

	bot.command(
		'choose_bot_lang',
		(ctx) =>
			ctx.reply('Select bot\'s language', { reply_markup: selectBotLang }),
	);

	bot.command(
		'choose_trans_lang',
		(ctx) =>
			ctx.reply('Select translate\'s language', {
				reply_markup: selectTranslatesLang,
			}),
	);
};

export default setCommandsListeners;
