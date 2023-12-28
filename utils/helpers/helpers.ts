export const getQueryStringFromObject = <T extends { [key: string]: string | number }>(
  keyVals: T,
) => {
  return Object.keys(keyVals)
    .filter((key) => keyVals[key as keyof T] !== null && keyVals[key as keyof T] !== undefined)
    .map((key) => `${key}=${keyVals[key as keyof T]}`)
    .join('&')
}
