// gatsby-config.js
module.exports = {
  siteMetadata: {
    title: 'my-notes',
    description: `Notes from Alex Eyler`,
    author: 'Alex Eyler',
  },
  plugins: [
    {
      resolve: `gatsby-theme-code-notes`,
      options: {
        contentPath: 'notes',
        basePath: '/',
        gitRepoContentPath:
          'https://github.com/AlexEyler/my-notes/tree/master/notes/',
        showDescriptionInSidebar: false,
        showThemeInfo: false,
        logo: 'https://brand.zander.wtf/Avatar.png',
      },
    },
  ],
}