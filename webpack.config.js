const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
    entry: {
        'App': './App.js',
    },
    output: {
      path: __dirname + '/js_lib',
      filename: '[name].js',
      publicPath: './js_lib'
    },
    /**
     * loaders 對應使用規則
     */
    module: {
      rules: [
             {
                 test: /\.js$/,
                 exclude: /node_modules/,
                 use: [
                     {
                         loader: 'babel-loader',
                         options: {
                             presets: [
                                 "@babel/preset-env",
                                 "@babel/preset-react"
                             ],
                             plugins: [
                                 "@babel/plugin-proposal-class-properties",
                                 "@babel/transform-runtime"
                             ]
                         },
                     },
                 ],
             },
             {
                 test: /\.css$/,
                 exclude: /node_modules/,
                 use: ['style-loader', 'css-loader'],
             },
             {
                 test: /\.(scss|sass)$/,
                 use: ['style-loader', 'css-loader', 'sass-loader']
             },
             {
                 test: /\.(png|jpg|gif)$/,
                 loader: 'file-loader?name=/img/[name].[ext]'
             },
             {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: '/fonts/'
                    }
                }]
            },
            {
                test: /\.mp4$/,
                use: 'file-loader?name=/img/[name].[ext]',
            },
         ],

    },
};
