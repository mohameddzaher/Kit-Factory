export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function generatePlaceholderSVG(
  width: number,
  height: number,
  text: string = 'KIT FACTORY'
): string {
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}'%3E%3Crect width='100%25' height='100%25' fill='%231a1a2e'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%235bc0be' font-family='system-ui' font-size='${Math.min(width, height) * 0.08}'%3E${encodeURIComponent(text)}%3C/text%3E%3C/svg%3E`;
}
