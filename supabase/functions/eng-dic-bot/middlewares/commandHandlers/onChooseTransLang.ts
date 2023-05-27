import { MyContext } from '../../contracts.ts';
import { selectTranslatesLang } from '../../services/inlineKeyboard/selectTranslatesLang.ts';
import translator from '../../locales/initTranslator.ts';

const onChooseTransLang = (ctx: MyContext) => {
	const { langConfig } = ctx;
	const reply = translator(langConfig.botLanguage, 'selectTransLang');
	reply && ctx.reply(reply, { reply_markup: selectTranslatesLang });
};

export default onChooseTransLang;
