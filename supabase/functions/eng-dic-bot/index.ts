import { config } from './config.ts';
import { MyContext } from './contracts.ts';
import { Bot, Context, serve, webhookCallback } from './deps.ts';
import launchBot from './services/launchBot/launchBot.ts';

const bot = new Bot<MyContext>(config.botToken || '');
launchBot(bot);
