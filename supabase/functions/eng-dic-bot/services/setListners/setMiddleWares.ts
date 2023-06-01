import { MyBot } from '../../contracts.ts';

import setLangOptionsToRequest from '../../middlewares/updateRequest/setLangOptionsToReq.ts';

const setMiddlewares = (bot: MyBot) => {
	bot.use(setLangOptionsToRequest);
};

export default setMiddlewares;
