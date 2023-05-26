import { MyContext } from '../../contracts.ts';
import { NextFunction } from '../../deps.ts';

const onNewChatMember = (ctx: MyContext, next: NextFunction) => {
	ctx.reply('WELCOME TO OUR CHAT');

	next();
};

export default onNewChatMember;
