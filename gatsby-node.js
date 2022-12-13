const path = require('path')

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  const config = getConfig()

  if (config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
    }
  } else {
    config.resolve = {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    }
  }

  actions.replaceWebpackConfig(config)
}
