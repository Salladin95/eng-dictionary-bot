import { MyContext } from '../../contracts.ts';
import { NextFunction } from '../../deps.ts';
import { selectBotLang } from '../../services/inlineKeybord/index.ts';

const onChooseTransLang = (ctx: MyContext, next: NextFunction) => {
	ctx.reply('Select bot\'s language', { reply_markup: selectBotLang });
	next();
};

export default onChooseTransLang;
