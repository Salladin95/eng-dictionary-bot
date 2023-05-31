export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      command: {
        Row: {
          command: string
          descriptionEN: string
          descriptionRU: string
          id: string
        }
        Insert: {
          command: string
          descriptionEN: string
          descriptionRU: string
          id?: string
        }
        Update: {
          command?: string
          descriptionEN?: string
          descriptionRU?: string
          id?: string
        }
      }
      user: {
        Row: {
          created_at: string
          firstName: string
          id: string
          learnedWords: string[] | null
          learningWords: string[] | null
          telegramId: number
          updated_at: string
          userLanguage: string
        }
        Insert: {
          created_at?: string
          firstName: string
          id?: string
          learnedWords?: string[] | null
          learningWords?: string[] | null
          telegramId: number
          updated_at?: string
          userLanguage?: string
        }
        Update: {
          created_at?: string
          firstName?: string
          id?: string
          learnedWords?: string[] | null
          learningWords?: string[] | null
          telegramId?: number
          updated_at?: string
          userLanguage?: string
        }
      }
      userWord: {
        Row: {
          amountRighAnswerInRow: number | null
          id: number
          word: string | null
        }
        Insert: {
          amountRighAnswerInRow?: number | null
          id?: number
          word?: string | null
        }
        Update: {
          amountRighAnswerInRow?: number | null
          id?: number
          word?: string | null
        }
      }
      word: {
        Row: {
          audios: string[] | null
          engDefs: string[] | null
          id: string
          ruDefs: string[] | null
          translation: string | null
          word: string
        }
        Insert: {
          audios?: string[] | null
          engDefs?: string[] | null
          id?: string
          ruDefs?: string[] | null
          translation?: string | null
          word?: string
        }
        Update: {
          audios?: string[] | null
          engDefs?: string[] | null
          id?: string
          ruDefs?: string[] | null
          translation?: string | null
          word?: string
        }
      }
      wordDefinition: {
        Row: {
          definition: string
          examples: string[] | null
          id: number
          partOfSpeech: string
          synonyms: string[] | null
        }
        Insert: {
          definition?: string
          examples?: string[] | null
          id?: number
          partOfSpeech?: string
          synonyms?: string[] | null
        }
        Update: {
          definition?: string
          examples?: string[] | null
          id?: number
          partOfSpeech?: string
          synonyms?: string[] | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
