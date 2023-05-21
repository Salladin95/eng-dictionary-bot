import {
	Context,
	NextFunction,
} from 'https://deno.land/x/grammy@v1.16.0/mod.ts';

const greetNewMembers = (ctx: Context, next: NextFunction) => {
	ctx.reply('WELCOME TO OUR CHAT');

	next();
};

export default greetNewMembers;
