module.exports = {
    externals: {
        'axios': 'axios',
        'react': 'React',
        'react-dom': 'ReactDOM',
        'react-router-dom': 'ReactRouterDOM',
        'vue': 'Vue',
        'vue-router': 'VueRouter'
    },
    cdn: {
        base: [
            'https://cdn.bootcss.com/axios/0.18.0/axios.min.js',
        ],
        production: [
            'https://cdn.bootcss.com/react/16.4.0/umd/react.production.min.js'
        ],
        development: [
            'https://cdn.bootcss.com/react/16.4.0/umd/react.development.js'
        ]
    }
}