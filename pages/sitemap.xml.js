const Sitemap = () => {
  return null
}

export const getServerSideProps = async ({ res }) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">	  	  
  
  <url>
     <loc>https://fetudy-blog.vercel.app/</loc>
     <lastmod>2022-03-23T09:15:21+00:00</lastmod>
     <changefreq>monthly</changefreq>
     <priority>1.0000</priority>
  </url>
  <url>
     <loc>https://fetudy-blog.vercel.app/posts</loc>
     <lastmod>2022-03-23T09:15:21+00:00</lastmod>
     <changefreq>monthly</changefreq>
     <priority>0.8000</priority>
  </url>
  <url>
     <loc>https://fetudy-blog.vercel.app/posts/2022-03-23-type-interface-zerochae</loc>
     <lastmod>2022-03-23T09:15:21+00:00</lastmod>
     <changefreq>monthly</changefreq>
     <priority>0.6400</priority>
  </url>
  <url>
     <loc>https://fetudy-blog.vercel.app/posts/2022-03-22-MVC-Gilpop8663</loc>
     <lastmod>2022-03-23T09:15:21+00:00</lastmod>
     <changefreq>monthly</changefreq>
     <priority>0.6400</priority>
  </url>
  <url>
     <loc>https://fetudy-blog.vercel.app/posts/2022-03-10-JSvsECMAScript-jyb1798</loc>
     <lastmod>2022-03-23T09:15:21+00:00</lastmod>
     <changefreq>monthly</changefreq>
     <priority>0.6400</priority>
  </url>
  <url>
     <loc>https://fetudy-blog.vercel.app/posts/2022-03-09-BrowerRendering-zerochae</loc>
     <lastmod>2022-03-23T09:15:21+00:00</lastmod>
     <changefreq>monthly</changefreq>
     <priority>0.6400</priority>
  </url>
  <url>
     <loc>https://fetudy-blog.vercel.app/posts/2022-03-08-dom-Gilpop8663</loc>
     <lastmod>2022-03-23T09:15:21+00:00</lastmod>
     <changefreq>monthly</changefreq>
     <priority>0.6400</priority>
  </url>
  <url>
     <loc>https://fetudy-blog.vercel.app/posts/2022-03-08-sementic-jyb1798</loc>
     <lastmod>2022-03-23T09:15:21+00:00</lastmod>
     <changefreq>monthly</changefreq>
     <priority>0.6400</priority>
  </url>
  <url>
     <loc>https://fetudy-blog.vercel.app/posts/2022-03-08-css-zerochae</loc>
     <lastmod>2022-03-23T09:15:21+00:00</lastmod>
     <changefreq>monthly</changefreq>
     <priority>0.6400</priority>
  </url>
  </urlset>
  `

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default Sitemap
