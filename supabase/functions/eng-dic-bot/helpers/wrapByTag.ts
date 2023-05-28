export const wrapByBold = (str: string, withOffset = false) =>
	`<b>${str}</b>${withOffset ? '\n' : ''}`;

export const wrapByItalic = (str: string, withOffset = false) =>
	`<i>${str}</i>${withOffset ? '\n' : ''}`;

export const wrapKeyByBoldValueByItalic = (
	key: string,
	value: string,
	withOffset = false,
) =>
	`${wrapByBold(key)}: ${wrapByItalic(value, true)}${withOffset ? '\n' : ''}`;
