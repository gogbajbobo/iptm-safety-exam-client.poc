const
    path = require('path'),
    projectRoot = path.resolve(__dirname)


module.exports = {

    publicPath: './',

    devServer: {
        port: 8082,
        overlay: {
            warnings: true,
            errors: true
        }
    },

    lintOnSave: 'error',

    productionSourceMap: false,

    configureWebpack: {

        resolve: {
            alias: {
                '@': path.join(projectRoot, 'src')
            }
        }

    }

}
