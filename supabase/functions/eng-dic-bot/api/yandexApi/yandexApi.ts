import { config } from '../../config.ts';
import { axiod } from '../../deps.ts';
import { LangOption } from '../../services/dbFunctions/user/user.contracts.ts';
import { getYandexApiUrl } from './getYandexApiUrl.ts';
import { YandexApiResponse } from './yandexApi.contracts.ts';

const withEnUrl = (text: string, to = 'en') =>
	getYandexApiUrl({
		apiKey: config.yandexApiKey ?? '',
		from: 'en',
		to,
		text,
	});

const translateByYandex = async (text: string, to: LangOption = 'en') => {
	const url = withEnUrl(text, to);
	const translation = await axiod.get<YandexApiResponse>(url);
	return translation.data;
};

export default translateByYandex;
