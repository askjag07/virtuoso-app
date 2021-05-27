exports.onCreatePage = async function ({ page, actions }) {
  if (page.path.match(/^\/app/)) {
    page.matchPath = '/app/*'
    actions.createPage(page)
  }
}
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html' || stage === 'develop-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bootstrap/,
            use: loaders.null(),
          },
          {
            test: /opentok-accelerator-core/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
