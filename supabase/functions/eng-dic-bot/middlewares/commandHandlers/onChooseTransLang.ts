import { MyContext } from '../../contracts.ts';
import { selectTranslatesLang } from '../../services/inlineKeybord/selectTranslatesLang.ts';

const onChooseTransLang = (ctx: MyContext) => {
	ctx.reply('Select bot\'s language', { reply_markup: selectTranslatesLang });
};

export default onChooseTransLang;
