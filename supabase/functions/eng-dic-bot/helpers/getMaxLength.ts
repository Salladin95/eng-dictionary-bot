export const getMaxLength = (maxLength: number, elementLength: number) =>
	Math.min(maxLength, Math.max(elementLength, maxLength));
