import { MyContext } from '../../contracts.ts';
import translator from '../../locales/initTranslator.ts';
import { selectUserLang } from '../../services/inlineKeyboard/index.ts';

const onChooseUserLang = (ctx: MyContext) => {
	const { userLanguage } = ctx;
	const reply = translator(userLanguage, 'selectUserLang');
	reply && ctx.reply(reply, { reply_markup: selectUserLang });
};

export default onChooseUserLang;
