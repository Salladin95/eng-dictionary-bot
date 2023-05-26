import { Api, Bot, Context, RawApi } from './deps.ts';

export type MyBot = Bot<Context, Api<RawApi>>;
export type Command = { command: string; description: string };
