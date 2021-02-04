const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    module: {
        rules: [ // En "Rules" se add los loaders
            // loader de HTML
            {
                test: /\.html$/, // Que archivo voy a buscar
                use: [
                        {
                            loader: "html-loader",
                            options: {minimize:true}
                        }
                    ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
}