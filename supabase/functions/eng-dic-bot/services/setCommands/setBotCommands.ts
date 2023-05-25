import { Command, MyBot } from "../../contracts.ts";

export const setMyCommands = async (bot: MyBot, commands: Command[]) => {
  await bot.api.setMyCommands(commands);
}