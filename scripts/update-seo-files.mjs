
import fs from "fs";
import path from "path";

const BLOG_DIR = "c:/Vercel/src/app/blog";
const SITEMAP_PATH = "c:/Vercel/src/app/sitemap.ts";
const ROBOTS_PATH = "c:/Vercel/src/app/robots.ts";

function updateSitemap() {
    console.log("Updating Sitemap...");
    if (!fs.existsSync(BLOG_DIR)) return;

    const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.mdx') || f.endsWith('.md'));
    const urls = files.map(f => {
        const slug = f.replace(/\.mdx?$/, '');
        return `
    {
      url: \`\${baseUrl}/blog/${slug}\`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },`;
    }).join("");

    const newSitemapContent = `import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bespokeethos.com';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: \`\${baseUrl}/services\`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Dynamically Injected Blog Posts
    ${urls}
  ];
}
`;
    fs.writeFileSync(SITEMAP_PATH, newSitemapContent);
    console.log(`✅ Sitemap updated with ${files.length} blog posts.`);
}

function updateRobots() {
    console.log("Updating Robots.txt...");
    const robotsContent = `import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://bespokeethos.com/sitemap.xml',
  };
}
`;
    fs.writeFileSync(ROBOTS_PATH, robotsContent);
    console.log("✅ Robots.txt updated to be permissive.");
}

updateSitemap();
updateRobots();
