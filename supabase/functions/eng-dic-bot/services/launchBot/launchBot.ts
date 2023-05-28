import { MyBot } from '../../contracts.ts';
import { setMyCommands } from '../setCommands/setBotCommands.ts';
import setListeners from '../setListners/index.ts';
import processRequest from './processRequest.ts';

const launchBot = async (bot: MyBot) => {
	console.log('BOT IS UP AND RUNNING');

	await setMyCommands(bot);
	setListeners(bot);

	// bot.start(); // for develop
	processRequest(bot); // for prod

	Deno.addSignalListener('SIGINT', () => bot.stop());
	Deno.addSignalListener('SIGTERM', () => bot.stop());
};

export default launchBot;
