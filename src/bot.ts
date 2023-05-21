import { env } from '../config.ts';
import { Grammy } from "../deps.ts";
import launchBot from './services/launchBot.ts';

export const token = env['BOT_TOKEN'];
export const bot = new Grammy.Bot(token);

token && launchBot();
