import { MyContext } from '../../contracts.ts';
import translator from '../../locales/initTranslator.ts';

const onHelp = (ctx: MyContext) => {
	const { userLanguage } = ctx;
	const reply = translator(userLanguage, 'help');
	reply && ctx.reply(reply);
};

export default onHelp;
