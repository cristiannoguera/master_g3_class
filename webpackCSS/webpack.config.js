const HtmlWebpackPlugin = require("html-webpack-plugin");

const loader = require("sass-loader");

module.exports = {
    module :{
        //Loaders --->> son bibliotecas que me ayudan a funcionar Webpack
        rules:[ // Aqui voy a cargar todos los loaders para que Webpack los trabaje.
            {
                test: /\.scss$/,
                use: [ //El orden no importa
                    "style-loader", // Procesa los estilos en line
                    "css-loader", // Procesa estilos en los archivos css
                    "sass-loader" // Procesa archivos scss (SASS)
                ]
            }
        ]
    },
    pugins: [] // Complementos que ayudan a los loaders
}