import { MyContext } from "../../../contracts.ts";
import translator from "../../../locales/initTranslator.ts";
import { handleEngDicReq } from "./handleEngDicReq.ts";
import { handleRuDicReq } from "./handleRuDicReq.ts";

const onPrivateMsg = (ctx: MyContext) => {
	const { message, userLanguage } = ctx;

	if (!message || !message.text) {
		return;
	}

	try {
		if (userLanguage === 'en') {
			handleEngDicReq(ctx);
		} else {
			handleRuDicReq(ctx);
		}
	} catch (err) {
		console.warn('ON PRIVATE MESSAGE, API CALL ERROR');
		console.warn(err.message ?? JSON.stringify(err));
		ctx.reply(
			translator(userLanguage, 'wordNotFound') ??
				'Not found',
		);
	}
};

export default onPrivateMsg;
