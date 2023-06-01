import { config } from './config.ts';
import { MyContext } from './contracts.ts';
import { Bot, Context, serve, webhookCallback } from './deps.ts';
import launchBot from './services/launchBot/launchBot.ts';

const token = config.botToken;
if (token) {
  const bot = new Bot<MyContext>(token);
  launchBot(bot);
} else {
  console.warn("TOKEN IS EMPTY");
}
