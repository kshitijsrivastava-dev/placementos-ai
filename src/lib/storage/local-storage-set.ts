export function readLocalStorageStringSet(key: string): Set<string> {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return new Set();
    const parsed = JSON.parse(raw) as string[];
    return new Set(Array.isArray(parsed) ? parsed : []);
  } catch {
    return new Set();
  }
}

export function writeLocalStorageStringSet(key: string, values: Set<string>): void {
  localStorage.setItem(key, JSON.stringify([...values]));
}
