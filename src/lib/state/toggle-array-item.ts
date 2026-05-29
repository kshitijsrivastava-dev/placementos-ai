/** Toggles a value in a list (add if missing, remove if present). */
export function toggleArrayItem<T>(items: readonly T[], item: T): T[] {
  return items.includes(item) ? items.filter((value) => value !== item) : [...items, item];
}
