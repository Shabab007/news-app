export enum NewsCategory {
  GENERAL = 'general',
  ENTERTAINMENT = 'entertainment',
  BUSINES = 'business',
  SPORTS = 'sports',
}

export type FetchNewsParams = {
  page?: number
  pageSize?: number
  q?: string
  category?: NewsCategory
}
