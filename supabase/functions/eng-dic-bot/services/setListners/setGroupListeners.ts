import { MyBot } from '../../contracts.ts';

import {
	greetNewMembers,
	onGroupMsg,
} from '../../middlewares/messageHandlers/index.ts';

const setGroupListeners = (bot: MyBot) => {
	bot.chatType(['group', 'supergroup']).on(
		':new_chat_members',
		(ctx, next) => greetNewMembers(ctx, next),
	);

	bot.chatType(['group', 'supergroup']).on(
		'msg',
		(ctx, next) => onGroupMsg(ctx, next),
	);
};

export default setGroupListeners;
