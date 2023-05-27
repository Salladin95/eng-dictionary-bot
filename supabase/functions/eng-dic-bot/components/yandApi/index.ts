import { Def, Ex, Text, Tr } from '../../api/yandexApi/yandexApi.contracts.ts';
import {
	FormattedDefinition,
	formatWord,
} from '../../helpers/text/formatWord.ts';
import {
	wrapByBold,
	wrapByItalic,
	wrapKeyByItalicValueByBold,
} from '../wrapByTag.ts';

const joinText = (values: Text[]) => {
	const synonyms = values.reduce(
		(acc, { text }) => acc + wrapByItalic(text) + ', ',
		'',
	);
	return synonyms.trim().slice(0, synonyms.length - 2);
};

export function renderYandexResponse(rowWord: Def[]) {
	const renderTranslations = (translations: Tr[]) => {
		const textTranslations = translations.reduce(
			(acc, { text, pos, syn }) => {
				acc += wrapKeyByItalicValueByBold('Можно перевести как ', text) +
					wrapKeyByItalicValueByBold('Часть речи', pos);
				if (syn) {
					acc += 'Синонимы: ' + joinText(syn) + '\n\n';
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
			acc += wrapKeyByItalicValueByBold('Слово', text);
			acc += wrapKeyByItalicValueByBold('Часть речи', pos);
			if (ts) {
				acc += wrapKeyByItalicValueByBold('Транскрипция', ts, true);
			}
			const translations = renderTranslations(tr);
			acc += translations;
			return acc;
		},
		'',
	);

	return result;
}
