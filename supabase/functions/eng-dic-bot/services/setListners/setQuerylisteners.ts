import { MyBot } from '../../contracts.ts';
import {
	onChangeBotLang,
	onChangeTransLang,
} from '../../middlewares/queryHandlers/index.ts';

const setQueryListeners = (bot: MyBot) => {
	bot.callbackQuery(
		'bot-lang-en',
		(ctx) => onChangeBotLang(ctx, 'en'),
	);
	bot.callbackQuery(
		'bot-lang-ru',
		(ctx) => onChangeBotLang(ctx, 'ru'),
	);

	bot.callbackQuery(
		'trans-lang-en',
		(ctx) => onChangeTransLang(ctx, 'en'),
	);
	bot.callbackQuery(
		'trans-lang-ru',
		(ctx) => onChangeTransLang(ctx, 'ru'),
	);
};

export default setQueryListeners;
