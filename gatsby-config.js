module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lillian and the Chocolate Unicorn 6`,
        short_name: `UnicornLillian`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `book/images/UnicornLillian2.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `@olavea/gatsby-theme-picture-book`,
      options: {
        basePath: `/`,
        imagePath: `book/images`,
        audioPath: `book/audio`,
        infoLink: {
          title: "Project on GitHub",
          url: `https://github.com/olavea/gatsby-theme-picture-book.git`,
        },
      },
    },
  ],
  siteMetadata: {
    // First page will have siteTile as page title,
    // the other pages follow this configuration <page#> | <siteTitle>.
    siteTitle: `Lillian and the Chocolate Unicorn 6`,
    // Used for SEO
    siteDescription: `Almost Chocolate Unicorn, narrated by BatCatDad (42 😸) and Lillian (4.5 🦄)`,
    // Will be set on the <html /> tag
    siteLanguage: `no`,
    // Twitter Handle
    author: `@BatCatDad`,
  },
}
