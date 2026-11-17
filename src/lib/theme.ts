// Light / dark theme, mirrored on <html data-theme>. Same mechanism as
// teaching.mariusbleif.com: saved choice first, else the system setting.

export type Theme = "light" | "dark";
export const THEME_KEY = "mariusbleif.theme";

export function getTheme(): Theme {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

export function setTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {}
  window.dispatchEvent(new CustomEvent("themechange", { detail: theme }));
}

// Runs inline in <head> before paint. View transitions replace the <html>
// attributes on every navigation, so the theme is applied again after each swap.
export const initThemeScript = `(() => {
  const apply = () => {
    let t;
    try { t = localStorage.getItem("${THEME_KEY}"); } catch {}
    if (t !== "light" && t !== "dark") t = matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    document.documentElement.dataset.theme = t;
  };
  apply();
  document.addEventListener("astro:after-swap", apply);
})();`;
