import { config } from './config.ts';
import { Bot, Context, serve, webhookCallback } from './deps.ts';
import launchBot from './services/launchBot/launchBot.ts';

const bot = new Bot(config.botToken || '');
launchBot(bot);
