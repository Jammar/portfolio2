module.exports = {
  siteMetadata: {
    title: `Joachim's portfolio`,
    description: `Joachim! Hire him!`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Joachim's portfolio`,
        short_name: `Joachim`,
        description: `This site introduces Joachim and his projects to the world.`,
        lang: `en`,
        start_url: `/`,
        background_color: `#A1BEEB`,
        theme_color: `#A1BEEB`,
        display: `minimal-ui`,
        icon: `src/images/jicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
