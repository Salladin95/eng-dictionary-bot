import { MyBot } from '../../contracts.ts';
import { loadCommandsByLangTag } from "../dbFunctions/loadCommadsByLangTag.ts";


export const setMyCommands = async (bot: MyBot) => {
	const commads = await loadCommandsByLangTag('en');
	if (!commads || !commads.length) {
    return;
	}

  await bot.api.setMyCommands(commads);
};
