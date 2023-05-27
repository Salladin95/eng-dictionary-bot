import { yandexApiBaseUrl } from '../../constants.ts';
import { buildUrl } from '../../deps.ts';

export const getYandexApiUrl = (
	{ apiKey, from, text, to }: {
		apiKey: string;
		from: string;
		to: string;
		text: string;
	},
) => {
	const url = buildUrl(yandexApiBaseUrl, {
		path: ['lookup'],
		queryParams: {
			key: apiKey,
			lang: `${from}-${to}`,
			text: text,
		},
	});
	return url;
};
