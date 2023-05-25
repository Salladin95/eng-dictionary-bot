import { commads } from '../../constants.ts';
import { MyBot } from '../../contracts.ts';
import {
	greetNewMembers,
	onGroupMsg,
	onPrivateMsg,
} from '../messageHandlers/index.ts';
import { setMyCommands } from '../setCommands/setBotCommands.ts';
import processRequest from './processRequest.ts';

const launchBot = (bot: MyBot) => {
	console.log('BOT IS UP AND RUNNING');

	setMyCommands(bot, commads);

	bot.command(
		'start',
		(ctx) => ctx.reply('Welcome! Send me a word...'),
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

	processRequest(bot);

	Deno.addSignalListener('SIGINT', () => bot.stop());
	Deno.addSignalListener('SIGTERM', () => bot.stop());
};

export default launchBot;
