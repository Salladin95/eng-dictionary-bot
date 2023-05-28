import { MyContext as Context } from '../../contracts.ts';
import { NextFunction } from '../../deps.ts';

const onGroupMsg = (ctx: Context) => {
	const { message } = ctx;

	if (message?.new_chat_members || !message || !message.text) {
		return;
	}

	ctx.reply('MIND YOUR BUSINESS'); // write to the group"s chat
	// ctx.api.sendMessage(message.from.id, 'HI TEHRE') // write to the user"s personal chat
};

export default onGroupMsg;
