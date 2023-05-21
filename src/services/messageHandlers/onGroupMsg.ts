import { Grammy } from '../../../deps.ts';

const onGroupMsg = (ctx: Grammy.Context, next: Grammy.NextFunction) => {
	const { message } = ctx;

	if (message?.new_chat_members || !message || !message.text) {
		return;
	}

	ctx.reply('MIND YOUR BUSINESS'); // write to the group"s chat
	// ctx.api.sendMessage(message.from.id, 'HI TEHRE') // write to the user"s personal chat

	next();
};

export default onGroupMsg;
