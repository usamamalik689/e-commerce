/** Parse the reference's formatted rupee prices without treating “Rs.” as a decimal point. */
export function parsePrice(price: string): number {
  const value = price.match(/\d[\d,]*(?:\.\d+)?/)?.[0];
  return value ? Number(value.replaceAll(',', '')) : 0;
}
