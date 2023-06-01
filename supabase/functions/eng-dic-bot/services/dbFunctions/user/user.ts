import supabase from '../../../db.ts';
import { CreateUserDto, UpdateUserDto } from './user.contracts.ts';

const createUserRecord = async (dto: CreateUserDto) => {
	const user = await supabase.from('user').insert(dto);
	return user.data;
};

const updateUserRecord = async (dto: UpdateUserDto, telegramId: number) => {
	const user = await supabase.from('user').update(dto).eq(
		'telegramId',
		telegramId,
	);
	return user.data;
};

const getUserRecords = async () => {
	const user = await supabase.from('user').select('*');
	return user.data;
};

const getUserRecord = async (telegramId: number) => {
	const user = await supabase.from('user').select('*').eq(
		'telegramId',
		telegramId,
	);
	if (user.data?.length) {
		return user.data[0];
	}
	return null;
};

export { createUserRecord, getUserRecord, getUserRecords, updateUserRecord };
