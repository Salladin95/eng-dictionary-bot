import { MyBot } from '../../contracts.ts';
import loadCommandsByLang from '../dbFunctions/command/index.ts';

export const setMyCommands = async (bot: MyBot) => {
	const commands = await loadCommandsByLang('en');
	if (!commands || !commands.length) {
		return;
	}
	bot.api.setMyCommands(commands);
};
