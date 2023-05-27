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

	const synonymsByHtml = (synonyms: string[]) => {
		return synonyms.reduce(
			(acc, synonym) => {
				acc += wrapKeyByItalicValueByBold('synonyms', synonym);
				return acc;
			},
			'',
		);
	};

	const definitionsByHtml = (definitions: FormattedDefinition[]) => {
		return definitions.reduce(
			(acc, { definition, example, synonyms }) => {
				acc += wrapKeyByItalicValueByBold('definition', definition);
				if (example) {
					acc += wrapKeyByItalicValueByBold('example', example, true);
				} else {
					acc += '\n';
				}
				if (synonyms.length) {
					acc += synonymsByHtml(synonyms);
				}
				return acc;
			},
			'',
		);
	};

	const meaningsByHtml = meanings.reduce(
		(acc, { partOfSpeech, definitions, synonyms }) => {
			acc += wrapKeyByItalicValueByBold('Part of speech', partOfSpeech + ';');
			if (synonyms?.length) {
				acc += synonymsByHtml(synonyms);
			}
			acc += definitionsByHtml(definitions);
			return acc;
		},
		'',
	);

	return `${wrapByBold(word, true)}${
		wrapByItalic(transcription, true)
	}${meaningsByHtml}`;
}
