import { MyContext } from '../../contracts.ts';
import translator from '../../locales/initTranslator.ts';
import { selectBotLang } from '../../services/inlineKeyboard/selectBotLang.ts';

const onChooseBotLang = (ctx: MyContext) => {
	const { langConfig } = ctx;
	const reply = translator(langConfig.botLanguage, 'selectBotLang');
	reply && ctx.reply(reply, { reply_markup: selectBotLang });
};

export default onChooseBotLang;
