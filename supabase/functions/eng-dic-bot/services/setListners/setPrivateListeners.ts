import { MyBot } from '../../contracts.ts';

import { onPrivateMsg } from '../../middlewares/messageHandlers/index.ts';

const setPrivateListeners = (bot: MyBot) => {
	bot.chatType('private').on(':text', (ctx, next) => onPrivateMsg(ctx, next));
};

export default setPrivateListeners;
