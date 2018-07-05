var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'docs');
var starterConfig = require('./config/starter.config')

let renderCDN = (cdnObj) => {
    let cdnStr = ''
    let env = process.env.NODE_ENV
    cdnObj.base.forEach((cdn)=>{
            cdnStr += `<script type="text/javascript" crossorigin src="${cdn}"></script>`
    })
    if(cdnObj[env]){
        cdnObj[env].forEach((cdn)=>{
            cdnStr += `<script type="text/javascript" crossorigin src="${cdn}"></script>`
    })
    }
    return cdnStr
}

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
        ...starterConfig.externals
    },
    resolve: {
        extensions: ['.js', '.json', '.vue', '.jsx'],
        alias: {
        //   'vue$': 'vue/dist/vue.esm.js',
          '@': path.resolve(__dirname, 'app')
        }
      },
    module: {
        rules: [
          {
            test: /\.jsx?$/,
            loaders: ['babel-loader?presets[]=stage-0,presets[]=react']
          },
          {
            test: /\.vue$/,
            loaders: ['vue-loader']
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
            cdn: renderCDN(starterConfig.cdn)
        })
    ]
};