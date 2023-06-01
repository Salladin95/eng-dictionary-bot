import { Database } from '../../../types/supabase.ts';

export type LangOption = 'ru' | 'en';
export type WithLangOptions<T> =
	& Omit<
		T,
		'userLanguage'
	>
	& { userLanguage?: LangOption };

export type User = WithLangOptions<Database['public']['Tables']['user']['Row']>;
export type CreateUserDto = Pick<User, 'firstName' | 'telegramId'>;
export type UpdateUserDto = WithLangOptions<
	Database['public']['Tables']['user']['Update']
>;
