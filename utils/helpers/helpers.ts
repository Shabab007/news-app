export const getQueryStringFromObject = <T extends { [key: string]: string | number | undefined }>(
  keyVals: T,
) => {
  return Object.keys(keyVals)
    .filter((key) => keyVals[key as keyof T] !== null && keyVals[key as keyof T] !== undefined)
    .map((key) => `${key}=${keyVals[key as keyof T]}`)
    .join('&')
}

export function getFormattedDate(dateString: string): string {
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date(dateString))
}
