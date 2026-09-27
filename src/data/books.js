// Placeholder catalogue data. Replace with a real API/CMS call when ready —
// each book only needs: title, author, price, rating (0-5), era tag, and a
// "color" key (used by <BookCover /> to render the illustrated spine).
export const books = [
  { slug: 'heart-of-the-matter', title: 'The Heart of the Matter', author: 'Graham Greene', price: 7000, rating: 5, era: '20th', color: 'wine', featured: true,
    blurb: 'A first edition in its original Heinemann jacket — Greene\u2019s West-African masterpiece, and a strong long-term hold.' },
  { slug: 'a-trumpet-major', title: 'A Trumpet Major', author: 'Thomas Hardy', price: 7000, rating: 5, era: '19th', color: 'wine' },
  { slug: 'complete-dickens', title: 'Complete Dickens', author: 'Charles Dickens', price: 2897, rating: 4, era: '19th', color: 'forest' },
  { slug: 'david-copperfield', title: 'David Copperfield', author: 'Charles Dickens', price: 4897, rating: 4, era: '19th', color: 'tan' },
  { slug: 'jane-eyre', title: 'Jane Eyre', author: 'Charlotte Bronte', price: 3900, rating: 4, era: '19th', color: 'navy' },
  { slug: 'mill-on-the-floss', title: 'The Mill on the Floss', author: 'George Eliot', price: 2060, rating: 2, era: '19th', color: 'rose' },
  { slug: 'northanger-abbey', title: 'Northanger Abbey', author: 'Jane Austen', price: 1700, rating: 3, era: '19th', color: 'gold' },
  { slug: 'ulysses', title: 'Ulysses', author: 'James Joyce', price: 5600, rating: 5, era: '20th', color: 'forest' },
  { slug: 'rumour-at-nightfall', title: 'Rumour at Nightfall', author: 'Graham Greene', price: 3200, rating: 4, era: '20th', color: 'teal' },
];

export const eras = [
  { id: 'all', label: 'All eras' },
  { id: '18th', label: '18th Century' },
  { id: '19th', label: '19th Century' },
  { id: '20th', label: '20th Century' },
];
