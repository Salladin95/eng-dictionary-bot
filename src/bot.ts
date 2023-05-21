import 'https://deno.land/std@0.187.0/dotenv/load.ts';

import { config } from '../config.ts';
import { Grammy } from "../deps.ts";
import launchBot from './services/launchBot.ts';

export const bot = new Grammy.Bot(config.botToken);

launchBot();
