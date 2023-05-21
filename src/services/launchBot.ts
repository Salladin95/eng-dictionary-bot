import { Grammy } from '../../deps.ts';
import { bot } from "../bot.ts";
import onGroupMsg from '../services/messageHandlers/onGroupMsg.ts';
import onPrivateMsg from '../services/messageHandlers/onPrivateMsg.ts';
import greetNewMembers from './messageHandlers/greeting.ts';

const launchBot = () => {
	bot.command(
		'start',
		(ctx) => ctx.reply('Welcome! Send me a word...'),
	);

	bot.chatType('private', (ctx, next) => onPrivateMsg(ctx, next));

	bot.chatType(['group', 'supergroup']).on(
		':new_chat_members',
		(ctx, next) => greetNewMembers(ctx, next),
	);
	bot.chatType(['group', 'supergroup']).on(
		'msg',
		(ctx, next) => onGroupMsg(ctx, next),
	);

	bot.start();
	console.log('Bot is listening');

	bot.catch((err) => {
		const ctx = err.ctx;
		console.error(`Error while handling update ${ctx.update.update_id}:`);
		const e = err.error;
		if (e instanceof Grammy.GrammyError) {
			console.error('Error in request:', e.description);
		} else if (e instanceof Grammy.HttpError) {
			console.error('Could not contact Telegram:', e);
		} else {
			console.error('Unknown error:', e);
		}
	});
};

export default launchBot;
