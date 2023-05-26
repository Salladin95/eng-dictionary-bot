import { MyContext } from '../../contracts.ts';

const onHelp = (ctx: MyContext) => {
	ctx.reply('Send me a word to get its description...');
};

export default onHelp;
