/** Brief transition class while toggling light/dark. */
export function applyThemeTransition() {
  const root = document.documentElement;
  root.classList.add("theme-transition");
  window.setTimeout(() => root.classList.remove("theme-transition"), 400);
}
