import { MyBot } from '../../contracts.ts';

import {
	onGroupMsg,
	onNewChatMember,
} from '../../middlewares/messageHandlers/index.ts';

const setGroupListeners = (bot: MyBot) => {
	bot.chatType(['group', 'supergroup']).on(
		':new_chat_members',
		(ctx, next) => onNewChatMember(ctx, next),
	);

	bot.chatType(['group', 'supergroup']).on(
		'msg',
		(ctx, next) => onGroupMsg(ctx, next),
	);
};

export default setGroupListeners;
