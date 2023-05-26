import { MyContext } from '../../contracts.ts';
import { NextFunction } from '../../deps.ts';
import { LangOption } from '../../services/dbFunctions/user/user.contracts.ts';
import { updateUserRecord } from '../../services/dbFunctions/user/user.ts';

const onChangeBotLang = async (
	ctx: MyContext,
	next: NextFunction,
	option: LangOption,
) => {
	const { from } = ctx;
	if (from) {
		await updateUserRecord({ botLang: option }, from.id);
		await ctx.answerCallbackQuery({
			text: 'Bot"s language is changed',
		});
	}
	next();
};

export default onChangeBotLang;
