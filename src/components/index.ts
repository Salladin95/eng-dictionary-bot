import {
	Definition,
	WordDefinition,
} from '../api/dictionaryApi/dictionaryApi.contracts.ts';
import { FormattedDefinition, formatWord } from '../helpers/text/formatWord.ts';
import {
	wrapByBold,
	wrapByItalic,
	wrapKeyByItalicValueByBold,
} from './wrapByTag.ts';

export function renderWordDefnition(rowWord: WordDefinition) {
	const { word, transcription, meanings, audio } = formatWord(rowWord);

	const definitionsByHtml = (definitions: FormattedDefinition[]) => {
		return definitions.reduce(
			(acc, currItem) =>
				acc +
				wrapKeyByItalicValueByBold('definition', currItem.definition) +
				wrapKeyByItalicValueByBold('example', currItem?.example ?? '', true),
			'',
		);
	};

	const meaningsByHtml = meanings.reduce(
		(acc, { partOfSpeech, definitions }) => {
			return acc +
				wrapKeyByItalicValueByBold('Part of speech', partOfSpeech + ';') +
				definitionsByHtml(definitions);
		},
		'',
	);

	return `${wrapByBold(word, true)}${wrapByItalic(transcription, true)}${
		wrapKeyByItalicValueByBold('audio', audio, true)
	}${meaningsByHtml}`;
}
