import {
	Context,
	NextFunction,
} from 'https://deno.land/x/grammy@v1.16.0/mod.ts';

const onGroupMsg = (ctx: Context, next: NextFunction) => {
	const { message } = ctx;

	if (message?.new_chat_members || !message || !message.text) {
		return;
	}

	ctx.reply('MIND YOUR BUSINESS'); // write to the group"s chat
	// ctx.api.sendMessage(message.from.id, 'HI TEHRE') // write to the user"s personal chat

	next();
};

export default onGroupMsg;
