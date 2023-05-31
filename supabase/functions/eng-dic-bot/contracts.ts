import { Api, Bot, Context, RawApi } from './deps.ts';
import { LangOption } from './services/dbFunctions/user/user.contracts.ts';


export type MyContext = Context & {
	userLanguage: LangOption;
};

export type MyBot = Bot<MyContext, Api<RawApi>>;
export type Command = { command: string; description: string };
