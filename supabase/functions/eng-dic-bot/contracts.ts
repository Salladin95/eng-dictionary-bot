import { Api, Bot, Context, RawApi } from './deps.ts';
import { LangOption } from './services/dbFunctions/user/user.contracts.ts';

export interface BotLanguage {
	botLanguage: string;
	translationLanguage: string;
}

export type MyContext = Context & {
	langCongfig: BotLanguage;
};

export type MyBot = Bot<MyContext, Api<RawApi>>;
export type Command = { command: string; description: string };
