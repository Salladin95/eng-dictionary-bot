import {
	wordDictionaryApiResp,
} from '../../api/dictionaryApi/dictionaryApi.contracts.ts';
import {
	formatDicApiResp,
	FormattedDefinition,
} from '../../helpers/text/formatWord.ts';
import { joinArrayByComma } from '../../helpers/text/joinArrByComma.ts';
import {
	wrapByBold,
	wrapByItalic,
	wrapKeyByBoldValueByItalic,
} from '../../helpers/wrapByTag.ts';

export function renderDictionaryApiResponse(rowWord: wordDictionaryApiResp) {
	const { word, transcription, meanings } = formatDicApiResp(rowWord);

	const renderDefs = (definitions: FormattedDefinition[]) => {
		return definitions.reduce(
			(acc, { definition, example, synonyms }) => {
				acc += wrapKeyByBoldValueByItalic('definition', definition);
				if (synonyms.length) {
					acc += wrapKeyByBoldValueByItalic(
						'synonyms',
						joinArrayByComma(synonyms),
					);
				}
				if (example) {
					acc += wrapKeyByBoldValueByItalic('example', example, true);
				} else {
					acc += '\n';
				}
				return acc;
			},
			'',
		);
	};

	const meaningsHtml = meanings.reduce(
		(acc, { partOfSpeech, definitions }) => {
			acc += wrapKeyByBoldValueByItalic('Part of speech', partOfSpeech + ';');
			acc += renderDefs(definitions);
			return acc;
		},
		'',
	);

	return `${wrapByBold(word, true)}${
		wrapByItalic(transcription, true)
	}${meaningsHtml}`;
}
