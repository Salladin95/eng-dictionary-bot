import { MyContext } from '../../contracts.ts';
import { LangOption } from '../../services/dbFunctions/user/user.contracts.ts';
import { updateUserRecord } from '../../services/dbFunctions/user/user.ts';

const onChangeTransLang = async (
	ctx: MyContext,
	option: LangOption,
) => {
	const { from } = ctx;
	if (from) {
		await updateUserRecord({ translationLang: option }, from.id);
		await ctx.answerCallbackQuery({
			text: 'You will receive translations in English',
		});
	}
};

export default onChangeTransLang;
