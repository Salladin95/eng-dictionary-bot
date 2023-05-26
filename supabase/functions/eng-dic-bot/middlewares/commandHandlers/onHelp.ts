import { MyContext } from '../../contracts.ts';
import { NextFunction } from '../../deps.ts';

const onHelp = (ctx: MyContext, next: NextFunction) => {
	ctx.reply('Send me a word to get its description...');
	next();
};

export default onHelp;
