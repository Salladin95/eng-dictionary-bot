import { MyContext } from '../../contracts.ts';
import { LangOption } from '../../services/dbFunctions/user/user.contracts.ts';
import { updateUserRecord } from '../../services/dbFunctions/user/user.ts';

const onChangeBotLang = async (
	ctx: MyContext,
	option: LangOption,
) => {
	const { from } = ctx;
	if (from) {
		await updateUserRecord({ botLang: option }, from.id);
		await ctx.answerCallbackQuery({
			text: 'You will receive messages in English (not translations)',
		});
	}
};

export default onChangeBotLang;
