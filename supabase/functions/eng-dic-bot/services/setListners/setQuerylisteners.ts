import { MyBot } from '../../contracts.ts';
import {
	onChangeTransLang,
} from '../../middlewares/queryHandlers/index.ts';

const setQueryListeners = (bot: MyBot) => {
	bot.callbackQuery(
		'user-lang-en',
		(ctx) => onChangeTransLang(ctx, 'en'),
	);
	bot.callbackQuery(
		'user-lang-ru',
		(ctx) => onChangeTransLang(ctx, 'ru'),
	);
};

export default setQueryListeners;
