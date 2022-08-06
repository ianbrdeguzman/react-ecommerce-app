export function formatDate(date: string) {
  return new Intl.DateTimeFormat('us-en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date(date));
}
