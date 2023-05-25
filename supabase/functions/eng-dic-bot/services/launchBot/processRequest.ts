import { config } from "../../config.ts";
import { Api, Bot, Context, RawApi, serve, webhookCallback } from "../../deps.ts";

const processRequest = (
	bot: Bot<Context, Api<RawApi>>,
) => {
	const handleUpdate = webhookCallback(bot, 'std/http');

	serve(async (req) => {
		try {
			const url = new URL(req.url);
			if (url.searchParams.get('secret') !== config.functionSecret || !req.headers) {
				return new Response('Not allowed', { status: 405 });
			}

			return await handleUpdate(req);
		} catch (err) {
			console.error(err);
		}
	});
};

export default processRequest;
