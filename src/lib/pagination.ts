export function getPageCount(totalItems: number, pageSize: number): number {
  return Math.max(1, Math.ceil(totalItems / pageSize));
}

export function paginateSlice<T>(items: T[], page: number, pageSize: number): T[] {
  const start = (page - 1) * pageSize;
  return items.slice(start, start + pageSize);
}

export function getPageItemCount(
  page: number,
  pageSize: number,
  totalItems: number,
): number {
  if (totalItems === 0) return 0;
  return Math.min(pageSize, totalItems - (page - 1) * pageSize);
}

export function clampPage(page: number, pageCount: number): number {
  return Math.min(Math.max(1, page), pageCount);
}
