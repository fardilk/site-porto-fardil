import { build } from 'esbuild';
import { mkdir, readFile, writeFile, rm } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const srcArticles = join(root, 'src/pages/articlesData.ts');
const outDir = join(root, 'dist');
const ORIGIN = process.env.SITE_ORIGIN || 'https://fardil.com';

function toAbsolute(url) {
  if (!url) return undefined;
  if (/^https?:\/\//i.test(url)) return url;
  const path = url.startsWith('/') ? url : `/${url}`;
  // encode spaces and special chars in path
  const encoded = path
    .split('/')
    .map((seg) => (seg ? encodeURIComponent(seg) : ''))
    .join('/');
  return new URL(encoded, ORIGIN).toString();
}

function injectMeta(html, { title, description, image, type = 'article', url }) {
  const headOpen = html.indexOf('<head>');
  if (headOpen === -1) return html;
  const before = html.slice(0, headOpen + '<head>'.length);
  const after = html.slice(headOpen + '<head>'.length);
  const absImage = toAbsolute(image);
  const absUrl = toAbsolute(url);
  const tags = `\n    <title>${title}</title>\n    <meta name="description" content="${description}" />\n    <meta property="og:title" content="${title}" />\n    <meta property="og:description" content="${description}" />\n    <meta property="og:image" content="${absImage ?? ''}" />\n    <meta property="og:type" content="${type}" />\n    ${absUrl ? `<meta property="og:url" content="${absUrl}" />` : ''}\n    <meta name="twitter:card" content="summary_large_image" />\n    <meta name="twitter:title" content="${title}" />\n    <meta name="twitter:description" content="${description}" />\n    <meta name="twitter:image" content="${absImage ?? ''}" />\n  `;
  return before + '\n' + tags + after;
}

async function getArticles() {
  const outfile = join(__dirname, '.tmp.articles.cjs');
  await build({
    entryPoints: [srcArticles],
    platform: 'node',
    bundle: true,
    format: 'cjs',
    outfile,
  });
  const { articles } = await import('file://' + outfile);
  // best-effort cleanup of tmp bundle to avoid git conflicts on deploy hosts
  try { await rm(outfile, { force: true }); } catch {}
  return articles;
}

async function main() {
  const template = await readFile(join(outDir, 'index.html'), 'utf8');
  const articles = await getArticles();

  // Articles list page
  const listMeta = {
    title: 'Articles | Fardil',
    description: 'Browse featured and popular reads across Product, Technology, Startup, and more.',
  image: '/fardil-on-semeru.png',
    type: 'website',
    url: '/articles',
  };
  const listHtml = injectMeta(template, listMeta);
  const listPath = join(outDir, 'articles', 'index.html');
  await mkdir(dirname(listPath), { recursive: true });
  await writeFile(listPath, listHtml);

  // Each article page
  for (const a of articles) {
    const meta = {
      title: `${a.title} | Fardil`,
      description: a.excerpt || 'Read more on Fardil\'s blog.',
  image: a.coverImage || '/fardil-on-semeru.png',
      type: 'article',
      url: `/articles/${a.slug}`,
    };
    const html = injectMeta(template, meta);
    const filePath = join(outDir, 'articles', a.slug, 'index.html');
    await mkdir(dirname(filePath), { recursive: true });
    await writeFile(filePath, html);
  }

  // Key static routes with tailored meta
  const routes = [
    {
      path: '', // root
      meta: {
        title: 'Fardil | Product-minded Engineer & PM',
        description:
          'I help teams ship fast with clarity and craft. Explore projects, experience, and articles on Product and Technology.',
  image: '/fardil-on-semeru.png',
        type: 'website',
        url: '/',
      },
    },
    {
      path: 'services',
      meta: {
        title: 'Services | Fardil',
        description: 'Product management, discovery, and delivery—outcomes-focused engagements to accelerate your roadmap.',
  image: '/fardil-on-semeru.png',
        type: 'website',
        url: '/services',
      },
    },
    {
      path: 'portfolio',
      meta: {
        title: 'Portfolio | Fardil',
        description: 'Selected projects and case studies demonstrating product outcomes and engineering craft.',
  image: '/fardil-on-semeru.png',
        type: 'website',
        url: '/portfolio',
      },
    },
    {
      path: 'about',
      meta: {
        title: 'About | Fardil',
        description: 'A product-minded engineer focused on clarity, craft, and outcomes. Learn more about my journey and values.',
  image: '/fardil-on-semeru.png',
        type: 'website',
        url: '/about',
      },
    },
    {
      path: 'experience',
      meta: {
        title: 'Experience | Fardil',
        description: 'Roles, responsibilities, and impact across product and engineering initiatives.',
  image: '/fardil-on-semeru.png',
        type: 'website',
        url: '/experience',
      },
    },
    {
      path: 'contact',
      meta: {
        title: 'Contact | Fardil',
        description: 'Get in touch to discuss your goals and how we can ship meaningful outcomes together.',
  image: '/fardil-on-semeru.png',
        type: 'website',
        url: '/contact',
      },
    },
    {
      path: 'hire-me',
      meta: {
        title: 'Hire Me | Fardil',
        description: 'Need a product leader who connects vision to delivery? Let’s talk about your roadmap and outcomes.',
        image: '/Fardil On Semeru.png',
        type: 'website',
        url: '/hire-me',
      },
    },
  ];

  for (const r of routes) {
    const html = injectMeta(template, r.meta);
    const outPath = r.path === '' ? join(outDir, 'index.html') : join(outDir, r.path, 'index.html');
    await mkdir(dirname(outPath), { recursive: true });
    await writeFile(outPath, html);
  }
}

main().catch((e) => {
  console.error('Prerender failed:', e);
  process.exit(1);
});
