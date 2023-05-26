import { MyContext as Context } from '../../contracts.ts';
import { NextFunction } from '../../deps.ts';
import {
	createUserRecord,
	getUserRecord,
} from '../../services/dbFunctions/user/user.ts';

const onStart = async (ctx: Context, next: NextFunction) => {
	const { from } = ctx;
	if (from) {
		const user = await getUserRecord(from?.id);
		if (!user) {
			await createUserRecord({
				telegramId: from.id,
				firstName: from.first_name,
			});
		}
		ctx.reply(
			`Hello ${from.first_name}, it's me English Dictionary Bot, send me a word to get its description `,
		);
	}
};

export default onStart;
