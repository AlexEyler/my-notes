// gatsby-config.js
module.exports = {
  siteMetadata: {
    title: 'my-notes',
    description: `Assortment of uninteresting notes by me, Alex Eyler `,
    author: 'Alex Eyler',
  },
  plugins: [
    {
      resolve: `gatsby-theme-code-notes`,
      options: {
        contentPath: 'notes',
        basePath: '/',
        gitRepoContentPath: 'https://github.com/AlexEyler/my-notes/tree/master/notes/',
        showDescriptionInSidebar: true,
        showThemeInfo: true,
        logo: 'https://pbs.twimg.com/profile_images/747477968629469184/FRSteaL__400x400.jpg',
      },
    },
  ],
}