const
    path = require('path'),
    projectRoot = path.resolve(__dirname)


module.exports = {

    publicPath: './',

    devServer: {
        port: 8082,
        overlay: {
            warnings: false,
            errors: true
        }
    },

    lintOnSave: process.env.NODE_ENV === 'production' ? 'error' : 'warning',

    productionSourceMap: false,

    configureWebpack: {

        resolve: {
            alias: {
                '@': path.join(projectRoot, 'src')
            }
        }

    }

}
