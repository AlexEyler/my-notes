// gatsby-config.js
module.exports = {
  siteMetadata: {
    title: 'notes',
    description: `Notes n' stuff`,
    author: 'Alex Eyler',
  },
  plugins: [
    {
      resolve: `gatsby-theme-code-notes`,
      options: {
        contentPath: 'notes',
        basePath: '/',
        gitRepoContentPath: 'https://github.com/AlexEyler/my-notes/tree/main/notes/',
        showDescriptionInSidebar: true,
        showThemeInfo: true,
        logo: 'https://github.com/AlexEyler/my-notes/raw/main/assets/penny.jpg',
      },
    },
  ],
}