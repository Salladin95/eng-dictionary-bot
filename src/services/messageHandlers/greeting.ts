import { Grammy } from '../../../deps.ts';

const greetNewMembers = (ctx: Grammy.Context, next: Grammy.NextFunction) => {
	ctx.reply('WELCOME TO OUR CHAT');

	next();
};

export default greetNewMembers;
