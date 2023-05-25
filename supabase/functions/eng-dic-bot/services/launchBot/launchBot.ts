import { Api, Bot, Context, RawApi } from '../../deps.ts';

import {
	greetNewMembers,
	onGroupMsg,
	onPrivateMsg,
} from '../messageHandlers/index.ts';
import processRequest from './processRequest.ts';

const launchBot = (bot: Bot<Context, Api<RawApi>>) => {
	console.log('BOT IS UP AND RUNNING');

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

	processRequest(bot);

	Deno.addSignalListener('SIGINT', () => bot.stop());
	Deno.addSignalListener('SIGTERM', () => bot.stop());
};

export default launchBot;
