import { MyContext } from '../../contracts.ts';
import translator from '../../locales/initTranslator.ts';
import { LangOption } from '../../services/dbFunctions/user/user.contracts.ts';
import { updateUserRecord } from '../../services/dbFunctions/user/user.ts';

const onChangeUserLang = async (
	ctx: MyContext,
	option: LangOption,
) => {
	const { from } = ctx;
	if (from) {
		await updateUserRecord({ userLanguage: option }, from.id);
		const msg = translator(
			option,
			'queryReplyUserLangChange',
		);
		if (msg) {
			await ctx.answerCallbackQuery({
				text: msg,
			});
		}
	}
};

export default onChangeUserLang;
