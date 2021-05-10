exports.onCreatePage = async ({ page, actions }) => {
  if (page.path.match(/^\/app/)) {
    page.matchPath = '/app/*'
    actions.createPage(page)
  }
}
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    1
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-jutsu/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
