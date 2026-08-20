# mariusbleif.com

Source for my personal website, [mariusbleif.com](https://mariusbleif.com), a single-page profile built with [Astro](https://astro.build), [Tailwind CSS](https://tailwindcss.com) and [DaisyUI](https://daisyui.com).

It started as a fork of the [Astrofy](https://github.com/manuelernestog/astrofy) portfolio template, but has been heavily edited since, the layout, content, styling and structure are largely rewritten, so don't expect it to match upstream.

## Development

```bash
pnpm install
pnpm run dev     # local dev server
pnpm run build   # production build to dist/
```

## Structure

- `src/config.ts` — site title and description
- `src/data/profile.ts` — profile content, also used to generate `/llms.txt`
- `src/pages/` — pages (index, legal notice, privacy policy, 404)
- `src/components/`, `src/layouts/`, `src/styles/` — UI

## License

MIT — see [LICENSE](LICENSE). The original template is MIT-licensed by Manuel Ernesto Garcia.
