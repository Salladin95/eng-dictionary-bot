import { MyContext } from '../../contracts.ts';
import translator from '../../locales/initTranslator.ts';
import { LangOption } from '../../services/dbFunctions/user/user.contracts.ts';
import { updateUserRecord } from '../../services/dbFunctions/user/user.ts';

const onChangeTransLang = async (
	ctx: MyContext,
	option: LangOption,
) => {
	const { from } = ctx;
	if (from) {
		await updateUserRecord({ translationLang: option }, from.id);
		const msg = translator(
			option,
			'queryReplyTransLangChange',
		);
		if (msg) {
			await ctx.answerCallbackQuery({
				text: msg,
			});
		}
	}
};

export default onChangeTransLang;
