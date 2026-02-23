import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pieswap.my.id'
  
  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/blog`, lastModified: new Date() },
    { url: `${baseUrl}/pdf-ke-word`, lastModified: new Date() },
    { url: `${baseUrl}/word-ke-pdf`, lastModified: new Date() },
    { url: `${baseUrl}/kompres-pdf`, lastModified: new Date() },
    { url: `${baseUrl}/blog/cara-mengubah-pdf-ke-word-tanpa-berantakan`, lastModified: new Date() },
    { url: `${baseUrl}/blog/cara-mengubah-word-ke-pdf-tanpa-berantakan`, lastModified: new Date() },
    { url: `${baseUrl}/blog/mengapa-kompres-pdf-penting`, lastModified: new Date() },
  ]
}