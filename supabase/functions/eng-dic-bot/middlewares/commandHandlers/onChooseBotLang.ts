import { MyContext } from '../../contracts.ts';
import { selectTranslatesLang } from '../../services/inlineKeybord/index.ts';

const onChooseBotLang = (ctx: MyContext) => {
	ctx.reply('Select translate\'s language', {
		reply_markup: selectTranslatesLang,
	});
};

export default onChooseBotLang;
