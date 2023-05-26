import { BotLanguage, MyContext } from '../../contracts.ts';
import { NextFunction } from '../../deps.ts';
import { getUserRecord } from '../../services/dbFunctions/user/user.ts';

const setLangOptionsToRequest = async (ctx: MyContext, next: NextFunction) => {
	const { from } = ctx;
	if (from) {
		const user = await getUserRecord(from.id);
		console.log(user);
		const langConfig: BotLanguage = {
			botLanguage: user?.botLang ?? 'en',
			translationLanguage: user?.translationLang ?? 'en',
		};
		ctx.langCongfig = langConfig;
	}
	next();
};

export default setLangOptionsToRequest;
