const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = env => {
    console.log(env);
    return {
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    },
                },
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: "html-loader",
                            options: { minimize: true }
                        }
                    ],
                },
                {
                    test: /\.css$/,
                    use: [
                        "style-loader",
                        "css-loader"
                    ],
                },
                {
                    test: /\.(png|svg|jpg|gif|ico)$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                name(file) {
                                    if (env.MODE === 'dev') {
                                        return '[name].[ext]'
                                    }

                                    return '[hash].[ext]'
                                },
                                outputPath: 'images/'
                            }
                        }
                    ],
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./src/index.html",
                filename: "./index.html"
            })
        ]
    }
};