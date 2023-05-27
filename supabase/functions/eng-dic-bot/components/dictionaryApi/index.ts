import {
	WordDefinition,
} from '../../api/dictionaryApi/dictionaryApi.contracts.ts';
import {
	FormattedDefinition,
	formatWord,
} from '../../helpers/text/formatWord.ts';
import {
	wrapByBold,
	wrapByItalic,
	wrapKeyByItalicValueByBold,
} from '../wrapByTag.ts';

export function renderWordDefnition(rowWord: WordDefinition) {
	const { word, transcription, meanings } = formatWord(rowWord);

	const synonymsByHtml = (values: string[]) => {
		const synonyms = values.reduce(
			(acc, text) => acc + wrapByItalic(text) + ', ',
			'',
		);
		return synonyms.trim().slice(0, synonyms.length - 2) + '.';
	};

	const definitionsByHtml = (definitions: FormattedDefinition[]) => {
		return definitions.reduce(
			(acc, { definition, example, synonyms }) => {
				acc += wrapKeyByItalicValueByBold('definition', definition);
				if (synonyms.length) {
					acc += wrapKeyByItalicValueByBold(
						'synonyms',
						synonymsByHtml(synonyms),
					);
				}
				if (example) {
					acc += wrapKeyByItalicValueByBold('example', example, true);
				} else {
					acc += '\n';
				}
				return acc;
			},
			'',
		);
	};

	const meaningsByHtml = meanings.reduce(
		(acc, { partOfSpeech, definitions }) => {
			acc += wrapKeyByItalicValueByBold('Part of speech', partOfSpeech + ';');
			acc += definitionsByHtml(definitions);
			return acc;
		},
		'',
	);

	return `${wrapByBold(word, true)}${
		wrapByItalic(transcription, true)
	}${meaningsByHtml}`;
}
