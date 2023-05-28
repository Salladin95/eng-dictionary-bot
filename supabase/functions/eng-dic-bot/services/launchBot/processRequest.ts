import { config } from '../../config.ts';
import { MyBot } from '../../contracts.ts';
import {
	Api,
	Bot,
	Context,
	RawApi,
	serve,
	webhookCallback,
} from '../../deps.ts';

const processRequest = (
	bot: MyBot,
) => {
	const handleUpdate = webhookCallback(bot, 'std/http');

	serve(async (req) => {
		try {
			const url = new URL(req.url);
			if (
				url.searchParams.get('secret') !== config.functionSecret
			) {
				return new Response('Not allowed', { status: 405 });
			}

			if (req.headers) {
				return await handleUpdate(req);
			}
		} catch (err) {
			console.error(err);
		}
	});
};

export default processRequest;
