import { GrammyTypes } from '../../../deps.ts';
import { getTags } from './workingWithText.ts';

export type IProfile = {
	messageId: number;
	userId: number;
	firstName: string;
	userName: string;
	stack: string[];
};

export const getProfileFromMsg = (
	msg: GrammyTypes.Message,
): IProfile | null => {
	if (msg.from && msg.text) {
		return {
			messageId: msg.message_id,
			userId: msg.from.id,
			firstName: msg.from.first_name,
			userName: msg.from.username ?? '',
			stack: getTags(msg.text),
		};
	}
	return null;
};
