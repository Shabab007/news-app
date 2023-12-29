export enum NewsCategory {
  ENTERTAINMENT = 'entertainment',
  GENERAL = 'general',
  BUSINES = 'business',
  SPORTS = 'sports',
}

export type FetchNewsParams = {
  page?: number
  pageSize?: number
  q?: string
  category?: NewsCategory
}
