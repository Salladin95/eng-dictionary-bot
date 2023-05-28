import { Def, Tr } from '../../api/yandexApi/yandexApi.contracts.ts';
import { joinArrayByComma } from '../../helpers/text/joinArrByComma.ts';
import { wrapByBold, wrapKeyByBoldValueByItalic } from '../../helpers/wrapByTag.ts';

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
			}
			acc += wrapKeyByBoldValueByItalic('Слово', text + ';');
			acc += wrapKeyByBoldValueByItalic('Часть речи', pos + ';');
			if (ts) {
				acc += wrapKeyByBoldValueByItalic('Транскрипция', ts + ';', true);
			}
			acc += renderTranslations(tr);
			return acc;
		},
		'',
	);

	return result;
}
