import { DASHBOARD_BASE_PATH } from "./dashboard-nav";

/**
 * Determines whether a nav item should appear active for the current pathname.
 * Overview matches only the index route; other items also match nested paths.
 */
export function isNavItemActive(pathname: string, href: string): boolean {
  const normalized = pathname.replace(/\/$/, "") || "/";

  if (href === DASHBOARD_BASE_PATH) {
    return normalized === DASHBOARD_BASE_PATH;
  }

  return normalized === href || normalized.startsWith(`${href}/`);
}
