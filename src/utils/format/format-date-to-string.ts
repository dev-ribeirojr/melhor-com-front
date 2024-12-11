export function formatDateToString(value: string | undefined): string {
  if (!value) return ''
  const cleanedValue = value.replace(/[^0-9]/g, '')

  return cleanedValue
    .replace(/^(\d{2})(\d)/, '$1/$2')
    .replace(/^(\d{2}\/\d{2})(\d)/, '$1/$2')
    .slice(0, 10)
}
