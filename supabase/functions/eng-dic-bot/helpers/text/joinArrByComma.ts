import { wrapByItalic } from '../wrapByTag.ts';

export const joinArrayByComma = (values: string[]) => {
	const synonyms = values.reduce(
		(acc, str) => acc + wrapByItalic(str) + ', ',
		'',
	);
	return synonyms.trim().slice(0, synonyms.length - 2) + '.';
};
