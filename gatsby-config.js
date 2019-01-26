module.exports = {
  siteMetadata: {
    title: `DavidGG - Software engineer`,
    description: `David GG. Software engineer personal site`,
    author: `@deibiz`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `DavidGG site`,
        short_name: `davidgg`,
        start_url: `/`,
        background_color: `#167cc0`,
        theme_color: `#167cc0`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-sass`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
};
