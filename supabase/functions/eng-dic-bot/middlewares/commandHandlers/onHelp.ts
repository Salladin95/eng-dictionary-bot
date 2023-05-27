import { MyContext } from '../../contracts.ts';
import translator from '../../locales/initTranslator.ts';

const onHelp = (ctx: MyContext) => {
	const { langConfig } = ctx;
	const reply = translator(langConfig.botLanguage, 'help');
	reply && ctx.reply(reply);
};

export default onHelp;
