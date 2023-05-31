import { MyBot } from '../../contracts.ts';

import {
	onChooseUserLang,
	onHelp,
	onStart,
} from '../../middlewares/commandHandlers/index.ts';

const setCommandsListeners = (bot: MyBot) => {
	bot.command('start', onStart);

	bot.command('help', onHelp);

	bot.command('choose_language', onChooseUserLang);
};

export default setCommandsListeners;
