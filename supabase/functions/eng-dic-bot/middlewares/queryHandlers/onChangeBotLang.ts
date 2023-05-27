import { MyContext } from '../../contracts.ts';
import translator from '../../locales/initTranslator.ts';
import { LangOption } from '../../services/dbFunctions/user/user.contracts.ts';
import { updateUserRecord } from '../../services/dbFunctions/user/user.ts';

const onChangeBotLang = async (
	ctx: MyContext,
	option: LangOption,
) => {
	const { from } = ctx;
	if (from) {
		await updateUserRecord({ botLang: option }, from.id);
		const msg = translator(
			option,
			'queryReplyBotLangChange',
		);
		if (msg) {
			await ctx.answerCallbackQuery({
				text: msg,
			});
		}
	}
};

export default onChangeBotLang;
