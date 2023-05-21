import { Message } from 'https://deno.land/x/grammy_types@v3.1.1/message.ts';
import { getTags } from './workingWithText.ts';

export type IProfile = {
	messageId: number;
	userId: number;
	firstName: string;
	userName: string;
	stack: string[];
};

export const getProfileFromMsg = (msg: Message): IProfile | null => {
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
