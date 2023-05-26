export type Json =
	| string
	| number
	| boolean
	| null
	| { [key: string]: Json }
	| Json[];

export interface Database {
	public: {
		Tables: {
			command: {
				Row: {
					command: string;
					descriptionEN: string;
					descriptionRU: string;
					id: string;
				};
				Insert: {
					command: string;
					descriptionEN: string;
					descriptionRU: string;
					id?: string;
				};
				Update: {
					command?: string;
					descriptionEN?: string;
					descriptionRU?: string;
					id?: string;
				};
			};
			user: {
				Row: {
					botLang: string;
					created_at: string;
					firstName: string;
					id: string;
					telegramId: number;
					translationLang: string;
					updated_at: string;
				};
				Insert: {
					botLang?: string;
					created_at?: string;
					firstName: string;
					id?: string;
					telegramId: number;
					translationLang?: string;
					updated_at?: string;
				};
				Update: {
					botLang?: string;
					created_at?: string;
					firstName?: string;
					id?: string;
					telegramId?: number;
					translationLang?: string;
					updated_at?: string;
				};
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
}
