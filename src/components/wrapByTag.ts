export const wrapByBold = (str: string, withOffset = false) =>
	`<b>${str}</b>${withOffset ? '\n' : ''}`;

export const wrapByItalic = (str: string, withOffset = false) =>
	`<i>${str}</i>${withOffset ? '\n' : ''}`;

export const wrapKeyByItalicValueByBold = (
	key: string,
	value: string,
	withOffset = false,
) =>
	`${wrapByItalic(key)}: ${wrapByBold(value, true)}${withOffset ? '\n' : ''}`;
