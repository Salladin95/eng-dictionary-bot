import { MyBot } from '../../contracts.ts';

import {
	onChooseBotLang,
	onChooseTransLang,
	onHelp,
	onStart,
} from '../../middlewares/commandHandlers/index.ts';

const setCommandsListeners = (bot: MyBot) => {
	bot.command('start', onStart);

	bot.command('help', onHelp);

	bot.command('choose_bot_lang', onChooseBotLang);

	bot.command('choose_trans_lang', onChooseTransLang);
};

export default setCommandsListeners;
