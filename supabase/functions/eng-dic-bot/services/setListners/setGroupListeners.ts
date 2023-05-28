import { MyBot } from '../../contracts.ts';

import {
	onGroupMsg,
	onNewChatMember,
} from '../../middlewares/messageHandlers/index.ts';

const setGroupListeners = (bot: MyBot) => {
	bot.chatType(['group', 'supergroup']).on(
		':new_chat_members',
		onNewChatMember,
	);

	bot.chatType(['group', 'supergroup']).on(
		'msg',
		onGroupMsg,
	);
};

export default setGroupListeners;
