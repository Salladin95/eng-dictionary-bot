import {
	Word,
	WordDefinition,
	WordDefinitionByPartOfSpeech,
} from '../../services/dbFunctions/word/word.contracts.ts';
import { joinArrayByComma } from '../../helpers/text/joinArrByComma.ts';
import {
	wrapByBold,
	wrapByItalic,
	wrapKeyByBoldValueByItalic,
} from '../../helpers/wrapByTag.ts';
import { LangOption } from '../../services/dbFunctions/user/user.contracts.ts';
import translator from '../../locales/initTranslator.ts';

export function renderWord(
	{ word, meanings, transcription }: Word,
	lang: LangOption,
) {
	const renderDefs = (definitions: WordDefinition[] | null) => {
		if (!definitions || !translator) {
			return null;
		}
		return definitions.reduce(
			(acc, { definition, example, synonyms }) => {
				acc += wrapKeyByBoldValueByItalic(
					translator(lang, 'definition') ?? 'definition',
					definition,
				);
				if (synonyms?.length) {
					acc += wrapKeyByBoldValueByItalic(
						translator(lang, 'synonyms') ?? 'synonyms',
						joinArrayByComma(synonyms),
					);
				}
				if (example) {
					acc += wrapKeyByBoldValueByItalic(
						translator(lang, 'example') ?? 'example',
						example,
						true,
					);
				} else {
					acc += '\n';
				}
				return acc;
			},
			'',
		);
	};

	const meaningsHtml = meanings.reduce(
		(acc, { partOfSpeech, ruDefs, engDefs }) => {
			acc += wrapKeyByBoldValueByItalic(
				translator(lang, 'partOfSpeech') ?? 'Part of speech',
				partOfSpeech + ';',
			);
			acc += wrapByItalic(
				translator(lang, 'relatedTo') ??
					'The following definitions are related to this part of speech!',
				true,
			) + '\n';
			const defs = lang === 'en' ? engDefs : ruDefs;
			acc += renderDefs(defs);
			return acc;
		},
		'',
	);
	let result = wrapByBold(word, true);
	if (transcription) {
		result += wrapByItalic(transcription, true) + '\n';
	}
	result += meaningsHtml;
	return result;
}
