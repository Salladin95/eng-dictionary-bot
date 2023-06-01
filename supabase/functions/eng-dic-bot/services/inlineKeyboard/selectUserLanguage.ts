import { InlineKeyboard } from '../../deps.ts';

export const selectUserLang = new InlineKeyboard()
	.text('English', 'user-lang-en')
	.text('Russian', 'user-lang-ru');
