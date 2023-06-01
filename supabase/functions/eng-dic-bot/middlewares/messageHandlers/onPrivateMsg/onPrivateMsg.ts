import { MyContext } from '../../../contracts.ts';
import { handleWordNotFound } from '../../handleErrors/wordNotFound.ts';
import { handleEngDicReq } from './handleEngDicReq.ts';
import { handleRuDicReq } from './handleRuDicReq.ts';

const onPrivateMsg = async (ctx: MyContext) => {
	const { userLanguage } = ctx;

	try {
		if (userLanguage === 'en') {
			await handleEngDicReq(ctx);
		} else {
			await handleRuDicReq(ctx);
		}
	} catch (err) {
		handleWordNotFound(ctx, err)
	}
};

export default onPrivateMsg;
