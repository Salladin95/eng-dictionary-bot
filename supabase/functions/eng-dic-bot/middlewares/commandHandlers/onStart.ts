import { MyContext as Context } from '../../contracts.ts';
import translator from '../../locales/initTranslator.ts';
import {
	createUserRecord,
	getUserRecord,
} from '../../services/dbFunctions/user/user.ts';

const onStart = async (ctx: Context) => {
	const { from, userLanguage } = ctx;
	if (from) {
		const user = await getUserRecord(from?.id);
		if (!user) {
			await createUserRecord({
				telegramId: from.id,
				firstName: from.first_name,
			});
		}
		const reply = translator(userLanguage, 'start', {
			name: from.first_name ?? 'User',
		});
		reply && ctx.reply(reply);
	}
};

export default onStart;
