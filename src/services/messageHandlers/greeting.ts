import { grammy } from "../../../deps.ts";

const greetNewMembers = (ctx: grammy.Context, next: grammy.NextFunction) => {
	ctx.reply('WELCOME TO OUR CHAT');

	next();
};

export default greetNewMembers;
