module.exports = {
  siteMetadata: {
    siteUrl: `https://govirtuoso.org`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-preact`,
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          precision: 6,
        },
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        ignore: ['src/styles/meeting.scss'],
      },
    },
    {
      resolve: `gatsby-plugin-image`,
    },
    {
      resolve: `gatsby-plugin-sharp`,
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://govirtuoso.org`,
        sitemap: [
          `https://govirtuoso.org/sitemap-0.xml`,
          `https://govirtuoso.org/sitemap-index.xml`,
        ],
        policy: [{ userAgent: `*`, allow: `/` }],
        output: `/robots.txt`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Virtuoso`,
        short_name: `Virtuoso`,
        lang: `en`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#0d6efd`,
        display: `standalone`,
        icon: `./src/images/icon.png`,
        cache_busting_mode: `none`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          globPatterns: [`./icons/icon*`],
        },
      },
    },
  ],
}
