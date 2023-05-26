import { MyBot } from '../../contracts.ts';

const setQueriesListeners = (bot: MyBot) => {
	bot.callbackQuery('en', async (ctx) => {
		await ctx.answerCallbackQuery({
			text: 'Here we go!',
		});
	});

	bot.callbackQuery('ru', async (ctx) => {
		await ctx.answerCallbackQuery({
			text: 'There we go!',
		});
	});
};

export default setQueriesListeners;
