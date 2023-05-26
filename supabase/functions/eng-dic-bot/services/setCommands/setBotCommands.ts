import { MyBot } from '../../contracts.ts';
import loadCommandsByLang from '../dbFunctions/command/index.ts';

export const setMyCommands = async (bot: MyBot) => {
	const commads = await loadCommandsByLang('en');

	if (!commads || !commads.length) {
		return;
	}

	await bot.api.setMyCommands(commads);
};
