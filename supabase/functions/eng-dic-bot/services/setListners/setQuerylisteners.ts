import { MyBot } from '../../contracts.ts';
import {
	onChangeBotLang,
	onChangeTransLang,
} from '../../middlewares/queryHandlers/index.ts';

const setQueryListeners = (bot: MyBot) => {
	bot.callbackQuery(
		'bot-lang-en',
		(ctx, next) => onChangeBotLang(ctx, next, 'en'),
	);
	bot.callbackQuery(
		'bot-lang-ru',
		(ctx, next) => onChangeBotLang(ctx, next, 'ru'),
	);

	bot.callbackQuery(
		'bot-trans-en',
		(ctx, next) => onChangeTransLang(ctx, next, 'en'),
	);
	bot.callbackQuery(
		'bot-trans-ru',
		(ctx, next) => onChangeTransLang(ctx, next, 'ru'),
	);
};

export default setQueryListeners;
