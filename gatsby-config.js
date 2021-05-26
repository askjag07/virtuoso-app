module.exports = {
  plugins: [
    `gatsby-plugin-preact`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Virtuoso',
        short_name: 'Virtuoso',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#0d6efd',
        display: 'standalone',
        icon: './src/images/icon.png',
      },
    },
  ],
}
