import 'https://deno.land/std@0.187.0/dotenv/load.ts';

import launchBot from './services/launchBot.ts';

const token = Deno.env.get('BOT_TOKEN');

token && launchBot(token);
