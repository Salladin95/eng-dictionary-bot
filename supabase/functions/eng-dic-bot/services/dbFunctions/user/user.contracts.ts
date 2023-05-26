import { Database } from '../../../types/supabase.ts';

export type LangOption = 'ru' | 'en';
export type User = Database['public']['Tables']['user']['Row'];
export type CreatUserDto = Pick<User, 'firstName' | 'telegramId'>;
export type CreateUserDto = Database['public']['Tables']['user']['Insert'];
export type UpdateUserDto =
	& Omit<
		Database['public']['Tables']['user']['Update'],
		'botLang' | 'translationLang'
	>
	& { botLang?: LangOption; translationLang?: LangOption };
