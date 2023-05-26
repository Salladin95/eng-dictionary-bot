import { MyContext } from '../../contracts.ts';

const onNewChatMember = (ctx: MyContext) => {
	ctx.reply('WELCOME TO OUR CHAT');
};

export default onNewChatMember;
