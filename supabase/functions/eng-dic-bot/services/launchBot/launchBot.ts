import { MyBot } from '../../contracts.ts';
import { selectBotLang, selectTranslatesLang } from '../inlineKeybord/index.ts';
import {
	greetNewMembers,
	onGroupMsg,
	onPrivateMsg,
} from '../messageHandlers/index.ts';
import onStart from '../messageHandlers/onStart.ts';
import { setMyCommands } from '../setCommands/setBotCommands.ts';
import processRequest from './processRequest.ts';

const launchBot = (bot: MyBot) => {
	console.log('BOT IS UP AND RUNNING');

	setMyCommands(bot);

	bot.command(
		'start',
		(ctx, next) => onStart(ctx, next),
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

	bot.callbackQuery('en', async (ctx) => {
		await ctx.answerCallbackQuery({
			text: 'Here we go!',
		});
	});

	bot.callbackQuery('ru', async (ctx) => {
		await ctx.answerCallbackQuery({
			text: 'There we go!',
		});
	});

	bot.command(
		'help',
		(ctx) => ctx.reply('Send me a word to get its description...'),
	);

	bot.chatType('private').on(':text', (ctx, next) => onPrivateMsg(ctx, next));

	bot.chatType(['group', 'supergroup']).on(
		':new_chat_members',
		(ctx, next) => greetNewMembers(ctx, next),
	);

	bot.chatType(['group', 'supergroup']).on(
		'msg',
		(ctx, next) => onGroupMsg(ctx, next),
	);

	bot.start(); // for develop
	// processRequest(bot); // for prod

	Deno.addSignalListener('SIGINT', () => bot.stop());
	Deno.addSignalListener('SIGTERM', () => bot.stop());
};

export default launchBot;
