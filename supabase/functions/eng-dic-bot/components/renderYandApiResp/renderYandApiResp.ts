import { Def, Tr } from '../../api/yandexApi/yandexApi.contracts.ts';
import { joinArrayByComma } from '../../helpers/text/joinArrByComma.ts';
import {
	wrapByBold,
	wrapByItalic,
	wrapKeyByBoldValueByItalic,
} from '../../helpers/wrapByTag.ts';

export function renderYandexResponse(rowWord: Def[]) {
	const renderTranslations = (translations: Tr[]) => {
		const textTranslations = translations.reduce(
			(acc, { text, syn }) => {
				acc += wrapKeyByBoldValueByItalic('Можно перевести как', text + '.');
				if (syn) {
					const synonyms = syn.map((syn) => syn.text);
					acc += wrapByBold('Синонимы: ') + joinArrayByComma(synonyms) + '\n\n';
				} else {
					acc += '\n';
				}
				return acc;
			},
			'',
		);
		return textTranslations.trim();
	};

	const result = rowWord.reduce(
		(acc, { text, pos, ts, tr }) => {
			if (acc.length) {
				acc += '\n\n';
			} else {
				acc += wrapByBold(text, true);
				if (ts) {
					acc += wrapByBold(ts, true) + '\n';
				}
			}
			acc += wrapKeyByBoldValueByItalic('Часть речи', pos + ';');
			acc += wrapByItalic(
				'Следующие определения относятся к данной части речи!',
				true,
			) + '\n';
			acc += renderTranslations(tr);
			return acc;
		},
		'',
	);

	return result;
}
