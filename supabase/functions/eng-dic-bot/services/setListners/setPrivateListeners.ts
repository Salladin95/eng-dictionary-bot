import { MyBot } from '../../contracts.ts';

import { onPrivateMsg } from '../../middlewares/messageHandlers/index.ts';

const setPrivateListeners = (bot: MyBot) => {
	bot.chatType('private').on('msg', onPrivateMsg);
};

export default setPrivateListeners;
