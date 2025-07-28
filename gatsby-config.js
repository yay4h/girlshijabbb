module.exports = {
  siteMetadata: {
    title: "Hijab Girll",
    description:"This repo contains an example business website that is built with Gatsby, and Netlify CMS.It follows the JAMstack architecture by using Git as a single source of truth, and Netlify for continuous deployment, and CDN distribution.",
    author: "Yayah Paujiah",
    keywords: "Hijab Girll Hijab Girll Muslimah Indonesa Hijab Girll Rajeg Hijab Girll TangerangHijab Girll Fashion Rajeg Hijab Girll shopp my id Hijab Girll fauziah shop Hijab Girll Rajeg Tangerang Hijab Girll motif hijab girll minimalis Hijab Girll Style Indonesia Hijab Girll Hijab Girll Tangerang Hijab Girll Muslimah Indonesia Hijab Girll Fashion Rajeg Hijaber Girll Tangerang Wanita Girll Berhijab Hijab Girll Cantik Syar’i Hijab Girll Inspiration Hijab Girl in Rajeg Tangerang Hijab Girll stylish Fashion Rajeg Hijab Trends in Rajeg Tangerang Hijab Girll bikin cantik",
    
    url:"https://hijabgirlshop.my.id/",  
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        sassOptions: {
          indentedSyntax: true,
        },
      },
    },
    {
         // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images",
      },
    },
    `gatsby-plugin-image`,
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-decap-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ['/bulma-style.sass'], // applies purging only on the bulma css file
        printRejected: true,
      },
    }, // must be after other CSS plugins
    "gatsby-plugin-netlify", // make sure to keep it last in the array
  ],
};
