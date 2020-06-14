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
          'https://github.com/mrmartineau/gatsby-theme-code-notes/tree/master/example/code-notes/',
        showDescriptionInSidebar: true,
        showThemeInfo: true,
        logo: 'https://brand.zander.wtf/Avatar.png',
      },
    },
  ],
}