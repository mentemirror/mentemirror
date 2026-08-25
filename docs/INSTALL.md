# Mente Mirror Option A — Phase 1.1 install

This package is an **overlay** for the existing Jekyll / GitHub Pages repository. It keeps the new information architecture but aligns the visual language more closely with the current mentemirror.com public website.

## Recommended workflow

```bash
git checkout -b site-v2-look-and-feel
```

Copy the package contents over the repository root. Do not replace `_config.yml` wholesale. Merge the values from `docs/CONFIG_PATCH.yml` into the existing config.

## Important: reuse the existing logo and images

The header now checks `site.logo`. Keep your repository's existing logo setting if one is already present.

The homepage hero uses the already migrated asset:

```text
/assets/images/home/why-counselling.jpg
```

This asset is already used by the current GitHub Pages migration. If your branch uses a different path, adjust the single image reference in `index.md`.

## Files replaced / added

- `_layouts/mm-default.html`
- `_includes/mm-header.html`
- `_includes/mm-footer.html`
- `_data/mm_navigation.yml`
- `assets/css/mm-site.css`
- `assets/js/mm-site.js`
- `index.md`
- `_pages/*.md`
- `docs/CONFIG_PATCH.yml`
- `docs/DESIGN_ALIGNMENT.md`

## Local preview

Use the same Jekyll command already used by the repository. A typical GitHub Pages-compatible workflow is:

```bash
bundle exec jekyll serve
```

Then test desktop and mobile navigation, logo sizing, hero image path, contact links and each dropdown.

## Staging URL

Keep the existing staging configuration while testing:

```yaml
url: https://mentemirror.github.io
baseurl: /mentemirror
```

Do not switch the custom domain until the redesigned site is approved.
