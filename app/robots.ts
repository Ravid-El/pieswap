import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Folder rahasia (kalo ada)
    },
    sitemap: 'https://pieswap.my.id/sitemap.xml',
  }
}