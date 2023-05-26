import { MyContext } from '../../contracts.ts';
import { NextFunction } from '../../deps.ts';
import { selectTranslatesLang } from '../../services/inlineKeybord/index.ts';

const onChooseBotLang = (ctx: MyContext, next: NextFunction) => {
	ctx.reply('Select translate\'s language', {
		reply_markup: selectTranslatesLang,
	});
	next();
};

export default onChooseBotLang;
