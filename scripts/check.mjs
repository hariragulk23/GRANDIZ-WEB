import assert from 'node:assert/strict';
import { readFile, readdir, stat } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { products, brand } from '../src/data.mjs';

const root = resolve('dist');
async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  return (await Promise.all(entries.map(e => e.isDirectory() ? walk(join(dir,e.name)) : join(dir,e.name)))).flat();
}
const pages = (await walk(root)).filter(p => p.endsWith('.html'));
assert.equal(pages.length, 20, 'Expected 19 pages plus a 404');
let links = 0;
for (const file of pages) {
  const html = await readFile(file,'utf8');
  assert.equal((html.match(/<h1[ >]/g)||[]).length,1,`${file}: one H1`);
  assert.match(html, /<html lang="en">/);
  assert.match(html, /name="viewport"/);
  assert(!/Ghana|lifetime warranty|India.s No\.?\s*1|ISO 9001/i.test(html),`${file}: unapproved claim`);
  for (const match of html.matchAll(/(?:href|src)="(\/[^"?#]*)(?:[?#][^"]*)?"/g)) {
    const route = match[1];
    const target = join(root, route.endsWith('/') ? `${route}index.html` : route);
    assert((await stat(target)).isFile(),`Broken internal route ${route} in ${file}`);
    links++;
  }
}
const contact = await readFile(join(root,'contact/index.html'),'utf8');
assert.match(contact, /name="grandiz-enquiry" method="POST" action="\/thank-you\/" data-netlify="true"/);
assert.match(contact, /name="form-name" value="grandiz-enquiry"/);
assert.match(contact, /netlify-honeypot="website"/);
assert(contact.includes(brand.gst));
for(const product of products) {
  assert(contact.includes(`<option value="${product.slug}">`), `Missing product option ${product.slug}`);
}
console.log(`Verified ${pages.length} pages, ${links} internal links/assets, all ${products.length} product enquiry options and Netlify form configuration.`);
