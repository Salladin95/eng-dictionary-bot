export const getWordFromArray = (arr: string[], target: string) => {
	return arr.find((word) => word === target);
};

export const getTrimmedArrayFromText = (text: string) =>
	text.split(' ').map((w) => w.trim());

export const getTags = (text: string) => {
	const arr = getTrimmedArrayFromText(text);
	return arr.filter((word) => word.startsWith('#') && word !== '#profile');
};

export const checkTextForWord = (text: string, target: string) => {
	const arr = getTrimmedArrayFromText(text);
	return getWordFromArray(arr, target);
};
