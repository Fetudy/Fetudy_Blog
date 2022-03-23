import React from 'react'
import * as fs from 'fs'
const Sitemap = () => {
  return null
}

export const getServerSideProps = async ({ res }) => {
  const BASE_URL = 'https://fetudy-blog.vercel.app'

  const staticPaths = fs
    .readdirSync('pages')
    .filter((staticPage) => {
      return !['_app.js', '_document.js', 'sitemap.xml.js'].includes(staticPage)
    })
    .map((staticPagePath) => {
      return `${BASE_URL}/${staticPagePath}`
    })

  const dynamicPaths = fs.readdirSync('_posts').map((post) => {
    return `${BASE_URL}/${post.substring(0, post.length - 3)}`
  })

  console.log(dynamicPaths)

  const allPaths = [...staticPaths, ...dynamicPaths]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPaths
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `
        })
        .join('')}
    </urlset>
  `

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  console.log(sitemap)

  return {
    props: {},
  }
}

export default Sitemap
