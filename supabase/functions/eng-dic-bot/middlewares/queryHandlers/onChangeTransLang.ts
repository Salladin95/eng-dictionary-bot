import { MyContext } from '../../contracts.ts';
import { NextFunction } from '../../deps.ts';
import { LangOption } from '../../services/dbFunctions/user/user.contracts.ts';
import { updateUserRecord } from '../../services/dbFunctions/user/user.ts';

const onChangeTransLang = async (
	ctx: MyContext,
	next: NextFunction,
	option: LangOption,
) => {
	const { from } = ctx;
	if (from) {
		await updateUserRecord({ translationLang: option }, from.id);
		await ctx.answerCallbackQuery({
			text: 'Translation"s language is changed',
		});
	}
	next();
};

export default onChangeTransLang;
