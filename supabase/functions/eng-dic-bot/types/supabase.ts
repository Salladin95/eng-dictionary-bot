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
          description: string
          id: string
          tag: string
        }
        Insert: {
          command: string
          description: string
          id?: string
          tag: string
        }
        Update: {
          command?: string
          description?: string
          id?: string
          tag?: string
        }
      }
      profile: {
        Row: {
          created_at: string | null
          firstName: string | null
          id: number
          messageId: number | null
          stack: string | null
          userId: number | null
          userName: string | null
        }
        Insert: {
          created_at?: string | null
          firstName?: string | null
          id?: number
          messageId?: number | null
          stack?: string | null
          userId?: number | null
          userName?: string | null
        }
        Update: {
          created_at?: string | null
          firstName?: string | null
          id?: number
          messageId?: number | null
          stack?: string | null
          userId?: number | null
          userName?: string | null
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
