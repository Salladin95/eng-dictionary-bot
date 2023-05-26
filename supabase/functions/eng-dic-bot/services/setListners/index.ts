import { MyBot } from '../../contracts.ts';
import setCommandsListeners from './setCommandsListeners.ts';
import setGroupListeners from './setGroupListeners.ts';
import setMiddlewares from './setMiddleWares.ts';
import setPrivateListeners from './setPrivateListeners.ts';
import setQueriesListeners from './setQueriesListeners.ts';

const setListeners = (bot: MyBot) => {
	setMiddlewares(bot);
	setCommandsListeners(bot);
	setQueriesListeners(bot);
	setPrivateListeners(bot);
	setGroupListeners(bot);
};

export default setListeners;

export {
	setCommandsListeners,
	setGroupListeners,
	setMiddlewares,
	setPrivateListeners,
	setQueriesListeners,
};
