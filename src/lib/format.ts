const nf = (digits: number) =>
  new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });

export function formatNumber(value: number, digits = 0): string {
  return nf(digits).format(value);
}

export function formatLoad(value: number): string {
  return `${formatNumber(value, 1)} MJ/m²`;
}

export function parseDecimal(input: string): number {
  const cleaned = input.trim().replace(/\s/g, "").replace(",", ".");
  if (cleaned === "") return Number.NaN;
  return Number(cleaned);
}
