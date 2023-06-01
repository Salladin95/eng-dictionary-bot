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
					created_at: string;
					firstName: string;
					id: string;
					learnedWords: string[] | null;
					learningWords: string[] | null;
					telegramId: number;
					updated_at: string;
					userLanguage: string;
				};
				Insert: {
					created_at?: string;
					firstName: string;
					id?: string;
					learnedWords?: string[] | null;
					learningWords?: string[] | null;
					telegramId: number;
					updated_at?: string;
					userLanguage?: string;
				};
				Update: {
					created_at?: string;
					firstName?: string;
					id?: string;
					learnedWords?: string[] | null;
					learningWords?: string[] | null;
					telegramId?: number;
					updated_at?: string;
					userLanguage?: string;
				};
			};
			userWord: {
				Row: {
					amountOfRighAnswersInRow: number | null;
					id: string;
					word: string | null;
				};
				Insert: {
					amountOfRighAnswersInRow?: number | null;
					id?: string;
					word?: string | null;
				};
				Update: {
					amountOfRighAnswersInRow?: number | null;
					id?: string;
					word?: string | null;
				};
			};
			word: {
				Row: {
					audios: string[] | null;
					id: string;
					meanings: string[];
					translation: string | null;
					word: string;
				};
				Insert: {
					audios?: string[] | null;
					id?: string;
					meanings: string[];
					translation?: string | null;
					word?: string;
				};
				Update: {
					audios?: string[] | null;
					id?: string;
					meanings?: string[];
					translation?: string | null;
					word?: string;
				};
			};
			wordDefinition: {
				Row: {
					definition: string;
					example: string | null;
					id: string;
					synonyms: string[] | null;
				};
				Insert: {
					definition?: string;
					example?: string | null;
					id?: string;
					synonyms?: string[] | null;
				};
				Update: {
					definition?: string;
					example?: string | null;
					id?: string;
					synonyms?: string[] | null;
				};
			};
			wordDefintionByPartOfSpeech: {
				Row: {
					engDefs: string[] | null;
					id: string;
					partOfSpeech: string;
					ruDefs: string[] | null;
				};
				Insert: {
					engDefs?: string[] | null;
					id?: string;
					partOfSpeech: string;
					ruDefs?: string[] | null;
				};
				Update: {
					engDefs?: string[] | null;
					id?: string;
					partOfSpeech?: string;
					ruDefs?: string[] | null;
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
