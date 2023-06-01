import { MyContext } from '../../contracts.ts';
import { NextFunction } from '../../deps.ts';
import { getUserRecord } from '../../services/dbFunctions/user/user.ts';

const setLangOptionsToRequest = async (ctx: MyContext, next: NextFunction) => {
	const { from } = ctx;
	if (from) {
		const user = await getUserRecord(from.id);
		const userLanguage = user?.userLanguage === 'en' ? 'en' : 'ru';
		ctx.userLanguage = userLanguage;
	}
	next();
};

export default setLangOptionsToRequest;
