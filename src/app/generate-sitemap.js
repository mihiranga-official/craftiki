const fs = require('fs');
const path = require('path');

const baseUrl = 'https://craftiki.vercel.app';

const routes = [
  '',            // homepage
  'about',
  'contact',
  'products',
  'gallery',
  // add more routes as needed
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `
  <url>
    <loc>${baseUrl}/${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

fs.writeFileSync(
  path.resolve(__dirname, 'src', 'sitemap.xml'),
  sitemap.trim()
);

console.log('✅ Sitemap generated!');
