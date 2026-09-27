# Emblem Books — redesign (Astro)

I've assumed this is (or should become) an **Astro** static site — let me know if it's actually
built on something else (WordPress, plain HTML, another framework) and I'll adapt the same
design into that stack.

## What changed

- **New hero** — editorial two-column layout: headline, trust stats (est. year, appreciation
  rate, worldwide shipping), and an illustrated stack of book spines resting on a gilt "shelf
  ledge." That shelf-ledge line is the recurring signature device — it reappears under every
  book cover in the catalogue and under the "Book of the Month" spotlight, tying the whole site
  back to the idea of a bookshelf.
- **New palette & type** — warm parchment background, deep forest green, oxblood wine as a
  secondary accent, and gilt gold for rules/ratings — pulled straight from your leather-bound
  stock photography. Fraunces for display headlines, Source Serif 4 for reading copy, Public
  Sans for nav/labels/UI.
- **Illustrated book covers** instead of stock photography (`src/components/BookCover.astro`) —
  no photos required, renders consistently for every title, and reads as an intentional design
  choice rather than mismatched product shots. Swap in real cover photography any time by
  editing that one component.
- **Every page rebuilt** on the same system: Home, Books (with working era filter chips),
  a book detail page, Delivery (working accordion), About, Books as Investment (new page —
  the nav linked here but there was no content yet), and Contact (working char-counter form).

## Structure

```
src/
  layouts/Layout.astro       # <head>, header, footer, global.css
  components/
    Header.astro              # nav + "More Books" dropdown (mobile menu included)
    Footer.astro
    BookCover.astro           # illustrated spine/cover — swap for real photos later
    BookCard.astro            # cover + title + rating + price, used in the grid
  data/books.js               # catalogue data — replace with a CMS/API call
  pages/
    index.astro                # Home
    books.astro                 # Catalogue grid + era filter
    books/[slug].astro           # Individual book page
    delivery.astro
    about.astro
    investment.astro             # Books as Investment (new)
    contact.astro
    terms.astro / privacy.astro   # stub pages so footer links don't 404
  styles/global.css             # design tokens + every component style
```

## Run it

```bash
npm install
npm run dev       # http://localhost:4321
npm run build      # outputs to /dist
```

I wasn't able to run `npm install`/`npm run build` in this sandbox (no network access), so
please do a quick `npm run dev` locally before shipping — the code is written carefully but a
live check is worth it.

## Swapping in real content

- **Book data**: edit `src/data/books.js`, or replace `fetchProperties`-style logic with a
  fetch from your CMS/backend in each page's frontmatter (frontmatter runs at build time).
- **Real cover photography**: replace `<BookCover />` usage with an `<img>` once you have shot
  photography — the shelf-ledge shadow (`.book-cover-wrap`) will still work under a real photo.
- **Contact form**: currently just shows an alert on submit — point the `fetch()`/`action` at
  your backend or a form service (Formspree, Resend, your own API route) in
  `src/pages/contact.astro`.
- **Logo**: the header currently uses a simplified SVG re-creation of your emblem mark — drop
  in your real logo file in `public/` and swap the `<svg>` in `Header.astro` for an `<img>`.
