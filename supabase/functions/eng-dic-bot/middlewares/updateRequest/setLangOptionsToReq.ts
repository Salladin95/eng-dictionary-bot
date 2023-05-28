import { BotLanguage, MyContext } from '../../contracts.ts';
import { NextFunction } from '../../deps.ts';
import { getUserRecord } from '../../services/dbFunctions/user/user.ts';

const setLangOptionsToRequest = async (ctx: MyContext, next: NextFunction) => {
	const { from } = ctx;
	if (from) {
		const user = await getUserRecord(from.id);
		const botLanguage = user?.botLang === 'en' ? 'en' : 'ru';
		const translationLanguage = user?.translationLang === 'en' ? 'en' : 'ru';
		const langConfig: BotLanguage = {
			botLanguage,
			translationLanguage,
		};
		ctx.langConfig = langConfig;
	}
	next();
};

export default setLangOptionsToRequest;
