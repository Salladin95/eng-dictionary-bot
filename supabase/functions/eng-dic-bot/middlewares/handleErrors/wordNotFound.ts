import { MyContext } from '../../contracts.ts';
import { getErrMsg } from '../../helpers/getErrMsg.ts';
import translator from '../../locales/initTranslator.ts';

export const handleWordNotFound = (ctx: MyContext, err: unknown) => {
	console.warn('ON PRIVATE MESSAGE, API CALL ERROR');
	console.warn(getErrMsg(err));
	ctx.reply(
		translator(ctx.userLanguage, 'wordNotFound') ??
			'Not found',
	);
};
