var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'docs');
module.exports = {
    //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
    entry: APP_PATH,
    //输出的文件名 合并以后的js会命名为bundle.js
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM'
    },
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
        //   'vue$': 'vue/dist/vue.esm.js',
          '@': path.resolve(__dirname, 'app')
        }
      },
    module: {
        rules: [
          {
            test: /\.jsx?$/,
      loaders: ['babel-loader?presets[]=es2015,presets[]=react']
          },
          {
            test: /\.css$/,
            loaders: ['css-loader']
          }
        ]
      },
    //添加我们的插件 会自动生成一个html文件
    plugins: [
        new HtmlwebpackPlugin({
            title: 'Hello React Starter',
            template: 'public/index.html',
            cdn: `<script type="text/javascript" crossorigin src="https://unpkg.com/react@16/umd/react.${process.env.NODE_ENV=='production'?'production.min':'development'}.js"></script>
              <script type="text/javascript" crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.${process.env.NODE_ENV=='production'?'production.min':'development'}.js"></script>`
        })
    ]
};