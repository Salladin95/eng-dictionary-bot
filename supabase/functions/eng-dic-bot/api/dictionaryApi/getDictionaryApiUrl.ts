import { dictionaryApiBaseUrl } from '../../constants.ts';
import { buildUrl } from '../../deps.ts';

export const getYandexApiUrl = (
	text: string,
) => {
	const url = buildUrl(dictionaryApiBaseUrl, {
		path: [text],
	});
	return url;
};
